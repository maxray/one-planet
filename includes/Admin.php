<?php
namespace OPL;

/**
 * Admin Pages Handler
 */
class Admin {

    public function __construct() {
        add_action( 'admin_menu', [ $this, 'admin_menu' ] );
    }

    /**
     * Register our menu page
     *
     * @return void
     */
    public function admin_menu() {
        global $submenu;

        $capability = 'manage_options';
        $slug       = 'one-planet-living';

        $hook = add_menu_page( __( 'One Planet Living', 'textdomain' ), __( 'One Planet Living', 'textdomain' ), $capability, $slug, [ $this, 'plugin_page' ], 'dashicons-layout' );

        if ( current_user_can( $capability ) ) {
            $submenu[ $slug ][] = array( __( 'App', 'textdomain' ), $capability, 'admin.php?page=' . $slug . '#/' );
            $submenu[ $slug ][] = array( __( 'Options', 'textdomain' ), $capability, 'admin.php?page=' . $slug . '#/options' );
        }

        add_action( 'load-' . $hook, [ $this, 'init_hooks'] );
    }

    /**
     * Initialize our hooks for the admin page
     *
     * @return void
     */
    public function init_hooks() {
        add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_scripts' ] );
    }

    /**
     * Load scripts and styles for the app
     *
     * @return void
     */
    public function enqueue_scripts() {
        wp_enqueue_style( 'oplbase-admin' );
        wp_enqueue_style( 'oplbase-style' );
        wp_enqueue_script( 'oplbase-admin' );
    }

    /**
     * Render our admin page
     *
     * @return void
     */
    public function plugin_page() {
        echo '<div class="wrap"><div id="oplbase-admin-app"></div></div>';
    }
}
