<?php
namespace OPL;

use WP_REST_Controller;

/**
 * REST_API Handler
 */
class Api extends WP_REST_Controller {

	/**
	 * [__construct description]
	 */
	public function __construct() {
		$this->includes();

		add_action( 'rest_api_init', array( $this, 'register_routes' ) );
	}

	/**
	 * Include the controller classes
	 *
	 * @return void
	 */
	private function includes() {
		if ( ! class_exists( __NAMESPACE__ . '\Api\User' ) ) {
			require_once __DIR__ . '/Api/User.php';
		}

		if ( ! class_exists( __NAMESPACE__ . '\Api\AppData' ) ) {
			require_once __DIR__ . '/Api/AppData.php';
		}
	}

	/**
	 * Register the API routes
	 *
	 * @return void
	 */
	public function register_routes() {
		( new Api\User() )->register_routes();
		( new Api\AppData() )->register_routes();
	}
}
