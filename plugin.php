<?php
/**
 * Plugin Name:       One Planet Living
 * Plugin URI:        https://github.com/maxray/one-planet
 * Description:       An interactive tool to help you create your own One Planet Living Action Plan.
 * Version:           1.7.14
 * Author:            Sush Kelly
 * License:           GPL2
 * Domain Path:       /languages
 * Text Domain:       one-planet-libing
 * Network:           true
 * GitHub Plugin URI: https://github.com/maxray/one-planet
 * Primary Branch: main
 * Requires at least: 5.9
 * Requires PHP:      8.0
 *
 * @package OPL
 */

// Don't call the file directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * One_Planet_Living class
 *
 * @class One_Planet_Living The class that holds the entire One_Planet_Living plugin
 */
final class One_Planet_Living {

	public $version = '1.0';
	private $container = array();

	public function __construct() {
		$this->define_constants();

		register_activation_hook( __FILE__, array( $this, 'activate' ) );
		register_deactivation_hook( __FILE__, array( $this, 'deactivate' ) );

		add_action( 'plugins_loaded', array( $this, 'init_plugin' ) );
		add_action( 'after_setup_theme', array( $this, 'wpd_hide_admin_bar_for_non_admins' ) );
		add_action( 'show_user_profile', array( $this, 'add_ward_field_to_user_profile' ) );
		add_action( 'edit_user_profile', array( $this, 'add_ward_field_to_user_profile' ) );
		add_action( 'personal_options_update', array( $this, 'save_ward_field_in_user_profile' ) );
		add_action( 'edit_user_profile_update', array( $this, 'save_ward_field_in_user_profile' ) );
		add_action( 'phpmailer_init', array( $this, 'configure_smtp' ) );
		add_action( 'admin_menu', array( $this, 'opl_add_admin_menu' ) );
		add_action( 'admin_init', array( $this, 'opl_settings_init' ) );
	}

	public static function init() {
		static $instance = false;
		if ( ! $instance ) {
			$instance = new One_Planet_Living();
		}
		return $instance;
	}

	public function __get( $prop ) {
		if ( array_key_exists( $prop, $this->container ) ) {
			return $this->container[ $prop ];
		}
		return $this->{$prop};
	}

	public function __isset( $prop ) {
		return isset( $this->{$prop} ) || isset( $this->container[ $prop ] );
	}

	public function define_constants() {
		define( 'OPLBASE_VERSION', $this->version );
		define( 'OPLBASE_FILE', __FILE__ );
		define( 'OPLBASE_PATH', dirname( OPLBASE_FILE ) );
		define( 'OPLBASE_INCLUDES', OPLBASE_PATH . '/includes' );
		define( 'OPLBASE_URL', plugins_url( '', OPLBASE_FILE ) );
		define( 'OPLBASE_ASSETS', OPLBASE_URL . '/assets' );
	}

	public function init_plugin() {
		$this->includes();
		$this->init_hooks();
	}

	public function activate() {
		$installed = get_option( 'oplbase_installed' );
		if ( ! $installed ) {
			update_option( 'oplbase_installed', time() );
		}
		update_option( 'oplbase_version', OPLBASE_VERSION );
	}

	public function deactivate() {}

	public function includes() {
		require_once OPLBASE_INCLUDES . '/Assets.php';
		if ( $this->is_request( 'frontend' ) ) {
			require_once OPLBASE_INCLUDES . '/Frontend.php';
		}
		require_once OPLBASE_INCLUDES . '/Api.php';
		require_once OPLBASE_INCLUDES . '/cpt.php';
		require_once OPLBASE_INCLUDES . '/acf.php';
	}

	public function init_hooks() {
		add_action( 'init', array( $this, 'init_classes' ) );
		add_action( 'init', array( $this, 'localization_setup' ) );
add_filter( 'login_redirect', array( $this, 'opl_redirect_subscribers_after_login' ), 10, 3 );
		$this->init_password_reset();
	}

/**
 * Initialize password reset handling
 */
public function init_password_reset() {
    add_filter( 'retrieve_password_message', array( $this, 'opl_modify_password_reset_email' ), 10, 4 );
    add_action( 'login_form_rp', array( $this, 'opl_add_hidden_from_field_rp' ) );
    add_filter( 'login_redirect', array( $this, 'opl_password_reset_redirect' ), 10, 3 );
}

/**
 * Modify the password reset email
 */
public function opl_modify_password_reset_email( $message, $key, $user_login, $user_data ) {
    // Always append our plugin tag
    $reset_url = network_site_url(
        "wp-login.php?action=rp&key=$key&login=" . rawurlencode( $user_login ) . "&from=oplplugin",
        'login'
    );

    $message = "Hi {$user_login},\n\n";
    $message .= "To reset your password, visit the following link:\n\n";
    $message .= $reset_url . "\n\n";
    $message .= "If you did not request this, ignore this email.\n";

    return $message;
}

/**
 * Add hidden "from" field to reset password form (PHP-only)
 */
public function opl_add_hidden_from_field_rp() {
    $from = isset($_GET['from']) ? sanitize_text_field($_GET['from']) : '';
    if ( $from === 'oplplugin' ) {
        echo '<input type="hidden" name="from" value="oplplugin">';
    }
}

/**
 * Redirect after password reset
 */
public function opl_password_reset_redirect( $redirect_to, $requested_redirect_to, $user ) {
    $from = '';

    // Preserve plugin flag from GET or POST
    if ( isset($_GET['from']) ) {
        $from = sanitize_text_field($_GET['from']);
    } elseif ( isset($_POST['from']) ) {
        $from = sanitize_text_field($_POST['from']);
    }

    // Only redirect if from our plugin
    if ( $from === 'oplplugin' && isset($_GET['checkemail']) && $_GET['checkemail'] === 'confirm' ) {
        return site_url( '/one-planet-living/' );
    }

    return $redirect_to;
}

/**
 * Generate lost password link
 */
public function opl_lost_password_url() {
    return wp_lostpassword_url() . '?from=oplplugin';
}

/**
 * Redirect subscribers (or any role) after login
 */
public function opl_redirect_subscribers_after_login( $redirect_to, $requested_redirect_to, $user ) {
    if ( is_a( $user, 'WP_User' ) ) {
        if ( in_array( 'subscriber', (array) $user->roles, true ) ) {
            return site_url( '/one-planet-living/' ); // front-end page
        }
    }
    return $redirect_to;
}





	public function init_classes() {
		if ( $this->is_request( 'frontend' ) ) {
			$this->container['frontend'] = new OPL\Frontend();
		}
		$this->container['api']    = new OPL\Api();
		$this->container['assets'] = new OPL\Assets();
	}

	public function localization_setup() {
		load_plugin_textdomain( 'oplbase', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
	}

	private function is_request( $type ) {
		switch ( $type ) {
			case 'admin': return is_admin();
			case 'ajax': return defined( 'DOING_AJAX' );
			case 'rest': return defined( 'REST_REQUEST' );
			case 'cron': return defined( 'DOING_CRON' );
			case 'frontend': return ( ! is_admin() || defined( 'DOING_AJAX' ) ) && ! defined( 'DOING_CRON' );
		}
	}

	public function wpd_hide_admin_bar_for_non_admins() {
		add_filter( 'show_admin_bar', function( $show ) {
			if ( ! current_user_can( 'administrator' ) && ! is_admin() ) {
				return false;
			}
			return $show;
		} );
	}

	public function add_ward_field_to_user_profile( $user ) {
		$ward = get_user_meta( $user->ID, 'ward', true );
		?>
		<h3>Extra profile information</h3>
		<table class="form-table">
			<tr>
				<th><label for="ward">Ward</label></th>
				<td>
					<input type="text" name="ward" id="ward" value="<?php echo esc_attr( $ward ); ?>" class="regular-text" /><br />
				</td>
			</tr>
		</table>
		<?php
	}

	public function save_ward_field_in_user_profile( $user_id ) {
		if ( ! current_user_can( 'edit_user', $user_id ) ) return false;
		update_user_meta( $user_id, 'ward', $_POST['ward'] );
	}

	public function configure_smtp( PHPMailer\PHPMailer\PHPMailer $phpmailer ) {
		$options = get_option( 'opl_smtp_settings' );
		$phpmailer->isSMTP();
		$phpmailer->Host       = $options['host'] ?? 'default_host';
		$phpmailer->SMTPAuth   = true;
		$phpmailer->Username   = $options['username'] ?? 'default_username';
		$phpmailer->Password   = $options['password'] ?? 'default_password';
		$phpmailer->SMTPSecure = 'tls';
		$phpmailer->Port       = $options['port'] ?? 587;
		$phpmailer->From       = 'website@ecobirmingham.com';
		$phpmailer->FromName   = 'From Name';
	}

	/**
	 * Initialize password reset hooks
	 */
	public function init_password_reset_hooks() {
    // Customize reset password email for plugin
   // Mark user for plugin password reset
add_filter( 'retrieve_password_message', function( $message, $key, $user_login, $user_data ) {
    // Only modify if request came from our plugin
    if ( isset( $_REQUEST['from'] ) && $_REQUEST['from'] === 'oplplugin' ) {
        $reset_url = network_site_url(
            "wp-login.php?action=rp&key=$key&login=" . rawurlencode( $user_login ) . "&from=oplplugin",
            'login'
        );

        $message  = "Hi {$user_login},\n\n";
        $message .= "To reset your password, visit the following address:\n\n";
        $message .= $reset_url . "\n\n";
        $message .= "If you did not request this, ignore this email.\n";
    }
    return $message;
}, 10, 4 );


// Redirect after password reset login
add_filter( 'login_redirect', function( $redirect_to, $requested_redirect_to, $user ) {
    if ( isset( $_GET['checkemail'], $_GET['from'] ) 
         && $_GET['checkemail'] === 'confirm'
         && $_GET['from'] === 'oplplugin' ) {

        // Redirect to your front-end page after password reset & login
        return site_url( '/one-planet-living/' );
    }

    return $redirect_to;
}, 10, 3 );





}


	// OPL Settings page functions
	public function opl_settings_page() {
		?>
		<div class="wrap">
			<h2>One Planet Living Settings</h2>
			<form method="post" action="options.php">
				<?php
				settings_fields( 'opl_settings_group' );
				do_settings_sections( 'opl-settings' );
				submit_button();
				?>
			</form>
		</div>
		<?php
	}

	public function opl_add_admin_menu() {
		add_menu_page(
			'One Planet Living Settings',
			'OPL Settings',
			'manage_options',
			'opl-settings',
			array( $this, 'opl_settings_page' ),
			'dashicons-admin-generic',
			100
		);
	}

	public function opl_settings_init() {
		register_setting( 'opl_settings_group', 'opl_smtp_settings', array( $this, 'opl_sanitize_smtp_settings' ) );

		add_settings_section(
			'opl_smtp_section',
			'SMTP Settings',
			array( $this, 'opl_smtp_section_callback' ),
			'opl-settings'
		);

		add_settings_field( 'opl_smtp_host', 'SMTP Host', array( $this, 'opl_smtp_host_render' ), 'opl-settings', 'opl_smtp_section' );
		add_settings_field( 'opl_smtp_port', 'SMTP Port', array( $this, 'opl_smtp_port_render' ), 'opl-settings', 'opl_smtp_section' );
		add_settings_field( 'opl_smtp_username', 'SMTP Username', array( $this, 'opl_smtp_username_render' ), 'opl-settings', 'opl_smtp_section' );
		add_settings_field( 'opl_smtp_password', 'SMTP Password', array( $this, 'opl_smtp_password_render' ), 'opl-settings', 'opl_smtp_section' );
	}

	public function opl_smtp_section_callback() { echo 'Enter your SMTP settings below.'; }
	public function opl_smtp_host_render() { $options = get_option( 'opl_smtp_settings' ); echo "<input type='text' name='opl_smtp_settings[host]' value='" . esc_attr( $options['host'] ) . "'>"; }
	public function opl_smtp_port_render() { $options = get_option( 'opl_smtp_settings' ); echo "<input type='text' name='opl_smtp_settings[port]' value='" . esc_attr( $options['port'] ) . "'>"; }
	public function opl_smtp_username_render() { $options = get_option( 'opl_smtp_settings' ); echo "<input type='text' name='opl_smtp_settings[username]' value='" . esc_html( $options['username'] ) . "'>"; }
	public function opl_smtp_password_render() { $options = get_option( 'opl_smtp_settings' ); echo "<input type='password' name='opl_smtp_settings[password]' value='" . esc_attr( $options['password'] ) . "'>"; }

	public function opl_sanitize_smtp_settings( $options ) {
		foreach ( $options as $key => &$value ) {
			if ( $key === 'smtp_email' ) { $value = sanitize_email( $value ); }
			else { $value = sanitize_text_field( $value ); }
		}
		return $options;
	}
} // End One_Planet_Living.

$oplbase = One_Planet_Living::init();
