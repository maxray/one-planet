<?php
/**
 * Plugin Name: One Planet Living
 * Plugin URI: https://github.com/maxray/one-planet
 * Description: An interactive tool to help you create your own One Planet Living Action Plan.
 * Version: 1.1
 * Author: Sush Kelly
 * Author URI: https://sushkelly.co.uk
 * License: GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: textdomain
 * Domain Path: /languages
 * GitHub Plugin URI: maxray/one-planet
 * Primary Branch: main
 *


 * @package OPL
 */

/**
 * Copyright (c) 2023 Sush Kelly. All rights reserved.
 *
 * Released under the GPL license
 * http://www.opensource.org/licenses/gpl-license.php
 *
 * This is an add-on for WordPress
 * http://wordpress.org/
 *
 * Inspired by: https://github.com/tareq1988/vue-wp-starter
 *
 * **********************************************************************
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 * **********************************************************************
 */

// don't call the file directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * One_Planet_Living class
 *
 * @class One_Planet_Living The class that holds the entire One_Planet_Living plugin
 */
final class One_Planet_Living {

	/**
	 * Plugin version
	 *
	 * @var string
	 */
	public $version = '1.0';

	/**
	 * Holds various class instances
	 *
	 * @var array
	 */
	private $container = array();

	/**
	 * Constructor for the One_Planet_Living class
	 *
	 * Sets up all the appropriate hooks and actions
	 * within our plugin.
	 */
	public function __construct() {

		$this->define_constants();

		register_activation_hook( __FILE__, array( $this, 'activate' ) );
		register_deactivation_hook( __FILE__, array( $this, 'deactivate' ) );

		add_action( 'plugins_loaded', array( $this, 'init_plugin' ) );
		add_action( 'after_setup_theme', array( $this, 'wpd_hide_admin_bar_for_non_admins' ) );
		// add_action( 'wp_loaded', array( $this, 'wpd_hide_admin_bar_for_subscribers' ) );
		add_action( 'show_user_profile', array( $this, 'add_ward_field_to_user_profile' ) );
		add_action( 'edit_user_profile', array( $this, 'add_ward_field_to_user_profile' ) );
		add_action( 'personal_options_update', array( $this, 'save_ward_field_in_user_profile' ) );
		add_action( 'edit_user_profile_update', array( $this, 'save_ward_field_in_user_profile' ) );
		add_action( 'phpmailer_init', array( $this, 'configure_smtp' ) );
		add_action( 'admin_menu', array( $this, 'opl_add_admin_menu' ) );
		add_action( 'admin_init', array( $this, 'opl_settings_init' ) );
	}

	/**
	 * Initializes the One_Planet_Living() class
	 *
	 * Checks for an existing One_Planet_Living() instance
	 * and if it doesn't find one, creates it.
	 */
	public static function init() {
		static $instance = false;

		if ( ! $instance ) {
			$instance = new One_Planet_Living();
		}

		return $instance;
	}

	/**
	 * Magic getter to bypass referencing plugin.
	 *
	 * This method allows for accessing properties indirectly. It first checks if the property
	 * exists in the `$container` array and returns it if available. If not found, it attempts to
	 * return the property directly from the object.
	 *
	 * @param string $prop The name of the property being accessed.
	 *
	 * @return mixed Returns the value of the property if it exists, either from the `$container`
	 *               array or directly from the object's properties.
	 */
	public function __get( $prop ) {
		if ( array_key_exists( $prop, $this->container ) ) {
			return $this->container[ $prop ];
		}

		return $this->{$prop};
	}

	/**
	 * Magic isset to bypass referencing plugin.
	 *
	 * Checks if a property is set either directly on the object or within the `$container` array.
	 * This method enhances the default property check by also considering the custom storage
	 * in `$container`.
	 *
	 * @param string $prop The name of the property being checked.
	 *
	 * @return bool Returns true if the property is set, false otherwise.
	 */
	public function __isset( $prop ) {
		return isset( $this->{$prop} ) || isset( $this->container[ $prop ] );
	}

	/**
	 * Define the constants
	 *
	 * @return void
	 */
	public function define_constants() {
		define( 'OPLBASE_VERSION', $this->version );
		define( 'OPLBASE_FILE', __FILE__ );
		define( 'OPLBASE_PATH', dirname( OPLBASE_FILE ) );
		define( 'OPLBASE_INCLUDES', OPLBASE_PATH . '/includes' );
		define( 'OPLBASE_URL', plugins_url( '', OPLBASE_FILE ) );
		define( 'OPLBASE_ASSETS', OPLBASE_URL . '/assets' );
	}

	/**
	 * Load the plugin after all plugis are loaded
	 *
	 * @return void
	 */
	public function init_plugin() {
		$this->includes();
		$this->init_hooks();
	}

	/**
	 * Placeholder for activation function
	 *
	 * Nothing being called here yet.
	 */
	public function activate() {

		$installed = get_option( 'oplbase_installed' );

		if ( ! $installed ) {
			update_option( 'oplbase_installed', time() );
		}

		update_option( 'oplbase_version', OPLBASE_VERSION );
	}

	/**
	 * Placeholder for deactivation function
	 *
	 * Nothing being called here yet.
	 */
	public function deactivate() {
	}

	/**
	 * Include the required files
	 *
	 * @return void
	 */
	public function includes() {

		require_once OPLBASE_INCLUDES . '/Assets.php';

		// if ( $this->is_request( 'admin' ) ) {
		// require_once OPLBASE_INCLUDES . '/Admin.php';
		// }

		if ( $this->is_request( 'frontend' ) ) {
			require_once OPLBASE_INCLUDES . '/Frontend.php';
		}

		require_once OPLBASE_INCLUDES . '/Api.php';

		// ADD CPTs.
		require_once OPLBASE_INCLUDES . '/cpt.php';

		// Include ACF.
		require_once OPLBASE_INCLUDES . '/acf.php';
	}

	/**
	 * Initialize the hooks
	 *
	 * @return void
	 */
	public function init_hooks() {

		add_action( 'init', array( $this, 'init_classes' ) );

		// Localize our plugin.
		add_action( 'init', array( $this, 'localization_setup' ) );
	}

	/**
	 * Instantiate the required classes
	 *
	 * @return void
	 */
	public function init_classes() {

		// if ( $this->is_request( 'admin' ) ) {
		// $this->container['admin'] = new OPL\Admin();
		// }

		if ( $this->is_request( 'frontend' ) ) {
			$this->container['frontend'] = new OPL\Frontend();
		}

		$this->container['api']    = new OPL\Api();
		$this->container['assets'] = new OPL\Assets();
	}

	/**
	 * Initialize plugin for localization
	 *
	 * @uses load_plugin_textdomain()
	 */
	public function localization_setup() {
		load_plugin_textdomain( 'oplbase', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
	}

	/**
	 * What type of request is this?
	 *
	 * @param  string $type admin, ajax, cron or frontend.
	 *
	 * @return bool
	 */
	private function is_request( $type ) {
		switch ( $type ) {
			case 'admin':
				return is_admin();

			case 'ajax':
				return defined( 'DOING_AJAX' );

			case 'rest':
				return defined( 'REST_REQUEST' );

			case 'cron':
				return defined( 'DOING_CRON' );

			case 'frontend':
				return ( ! is_admin() || defined( 'DOING_AJAX' ) ) && ! defined( 'DOING_CRON' );
		}
	}

	/**
	 * Hide admin bar for non-admin users
	 */
	public function wpd_hide_admin_bar_for_non_admins() {
		add_filter(
			'show_admin_bar',
			function ( $show ) {
				if ( ! current_user_can( 'administrator' ) && ! is_admin() ) {
					return false;
				}
				return $show;
			}
		);
	}

	/**
	 * Method to display the 'ward' field on the user profile page in the admin area.
	 *
	 * This function adds a custom field to the user's profile that allows for input and display
	 * of the 'ward' metadata associated with the user. It retrieves the current 'ward' value using
	 * the get_user_meta function, then displays an input field pre-populated with this value, if it exists.
	 *
	 * @param WP_User $user A WP_User object containing the user's data and metadata.
	 *
	 * @return void This function does not return a value but outputs HTML directly.
	 */
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

	/**
	 * Method to save the 'ward' field to the user profile in the admin area.
	 *
	 * This function updates the 'ward' user meta data with the value submitted from the profile page.
	 * It first checks if the current user has the capability to edit the target user profile.
	 * If the user does not have the appropriate permissions, the function returns false and does not update.
	 * Otherwise, it updates the 'ward' meta data for the user.
	 *
	 * @param int $user_id The user ID of the profile being saved.
	 *
	 * @return bool|void Returns false if the current user does not have permission to edit the target user,
	 *                   otherwise, it does not return a value but updates the user meta data directly.
	 */
	public function save_ward_field_in_user_profile( $user_id ) {
		if ( ! current_user_can( 'edit_user', $user_id ) ) {
			return false;
		}

		update_user_meta( $user_id, 'ward', $_POST['ward'] );
	}

	/**
	 * Configures PHPMailer with SMTP settings.
	 *
	 * Sets up PHPMailer to use SMTP with authentication, secure transport layer, sender information, and optional debug output.
	 *
	 * @param PHPMailer\PHPMailer\PHPMailer $phpmailer The PHPMailer instance to configure.
	 */
	public function configure_smtp( PHPMailer\PHPMailer\PHPMailer $phpmailer ) {
		$options = get_option( 'opl_smtp_settings' );

		$phpmailer->isSMTP();
    // @codingStandardsIgnoreStart
		$phpmailer->Host       = isset( $options['host'] ) ? $options['host'] : 'default_host';
		$phpmailer->SMTPAuth   = true;
		$phpmailer->Username   = isset( $options['username'] ) ? $options['username'] : 'default_username';
		$phpmailer->Password   = isset( $options['password'] ) ? $options['password'] : 'default_password';
		$phpmailer->SMTPSecure = 'tls';
		$phpmailer->Port       = isset( $options['port'] ) ? $options['port'] : 587; // Common ports: 25, 465 (SSL), 587 (TLS).

		// Sender information.
		$phpmailer->From     = 'website@ecobirmingham.com';
		$phpmailer->FromName = 'From Name';
    // @codingStandardsIgnoreEnd

		// Optional: SMTP Debug information.
		// $phpmailer->SMTPDebug = 2; // Enables detailed debug output.
	}

	/**
	 * Display OPL settings page
	 */
	public function opl_settings_page() {
		?>
	<div class="wrap">
		<h2>One Planet Living Settings</h2>
		<form method="post" action="options.php">
			<?php
			settings_fields( 'opl_settings_group' ); // Option group.
			do_settings_sections( 'opl-settings' ); // Page slug.
			submit_button();
			?>
		</form>
	</div>
		<?php
	}

	/**
	 * Create settings page and register with WordPress
	 */
	public function opl_add_admin_menu() {
		add_menu_page(
			'One Planet Living Settings', // Page title.
			'OPL Settings', // Menu title.
			'manage_options', // Capability.
			'opl-settings', // Menu slug.
			array( $this, 'opl_settings_page' ), // Function to display the settings page.
			'dashicons-admin-generic', // Icon.
			100 // Position.
		);
	}

	/**
	 * Register OPL sections and fields
	 */
	public function opl_settings_init() {
		// Register a new setting for "opl" page.
		register_setting( 'opl_settings_group', 'opl_smtp_settings', 'opl_sanitize_smtp_settings' );

		// Register a new section.
		add_settings_section(
			'opl_smtp_section',
			'SMTP Settings',
			array( $this, 'opl_smtp_section_callback' ),
			'opl-settings'
		);

		// Register a new field for the "opl_smtp_section" section.
		add_settings_field(
			'opl_smtp_host',
			'SMTP Host',
			array( $this, 'opl_smtp_host_render' ),
			'opl-settings',
			'opl_smtp_section'
		);

		add_settings_field(
			'opl_smtp_port',
			'SMTP Port',
			array( $this, 'opl_smtp_port_render' ),
			'opl-settings',
			'opl_smtp_section'
		);

		add_settings_field(
			'opl_smtp_username',
			'SMTP Username',
			array( $this, 'opl_smtp_username_render' ),
			'opl-settings',
			'opl_smtp_section'
		);

		add_settings_field(
			'opl_smtp_password',
			'SMTP Password',
			array( $this, 'opl_smtp_password_render' ),
			'opl-settings',
			'opl_smtp_section'
		);
	}

	/**
	 * Render SMTP instructions.
	 */
	public function opl_smtp_section_callback() {
		echo 'Enter your SMTP settings below.';
	}

	/**
	 * Render SMTP host field.
	 */
	public function opl_smtp_host_render() {
		$options = get_option( 'opl_smtp_settings' );
		?>
	<input type='text' name='opl_smtp_settings[host]' value='<?php echo esc_attr( $options['host'] ); ?>'>
		<?php
	}

	/**
	 * Render SMTP port field.
	 */
	public function opl_smtp_port_render() {
		$options = get_option( 'opl_smtp_settings' );
		?>
	<input type='text' name='opl_smtp_settings[port]' value='<?php echo esc_attr( $options['port'] ); ?>'>
		<?php
	}

	/**
	 * Render SMTP username field.
	 */
	public function opl_smtp_username_render() {
		$options = get_option( 'opl_smtp_settings' );
		?>
	<input type='text' name='opl_smtp_settings[username]' value='<?php echo esc_html( $options['username'] ); ?>'>
		<?php
	}

	/**
	 * Render SMTP password field.
	 */
	public function opl_smtp_password_render() {
		$options = get_option( 'opl_smtp_settings' );
		?>
	<input type='password' name='opl_smtp_settings[password]' value='<?php echo esc_attr( $options['password'] ); ?>'>
		<?php
	}
	// Repeat render functions for SMTP password and other fields as needed.

	/**
	 * Sanitize SMTP settings.
	 *
	 * @param array $options An associative array of SMTP settings where keys are the option names
	 *                       and values are the setting values to be sanitized. This can include settings
	 *                       such as 'smtp_email' for the SMTP email address, and other SMTP configuration
	 *                       options that require sanitization.
	 *
	 * @return array Returns the sanitized array of SMTP settings.
	 */
	public function opl_sanitize_smtp_settings( $options ) {
		foreach ( $options as $key => &$value ) {
			if ( $key === 'smtp_email' ) {
				// Use sanitize_email for email fields.
				$value = sanitize_email( $value );
			} else {
				// Default sanitization.
				$value = sanitize_text_field( $value );
			}
		}
		// Additional validation can go here.
		return $options;
	}
} // One_Planet_Living.

$oplbase = One_Planet_Living::init();
