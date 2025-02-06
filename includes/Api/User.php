<?php
/**
 * User REST API Handler for WordPress.
 *
 * This file defines the User class which extends the WP_REST_Controller class, providing
 * functionality for registering and logging in users through the WordPress REST API.
 * The User class includes methods for registering routes for user registration and login,
 * as well as the corresponding callback functions for these routes. The registration function
 * handles new user registrations, sanitizing inputs and creating new user accounts.
 * The login function authenticates users, setting authentication cookies upon successful login.
 * Both methods handle error conditions and return appropriate responses.
 *
 * @package OPL\Api
 */

namespace OPL\Api;

use WP_REST_Controller;

/**
 * REST_API Handler.
 */
class User extends WP_REST_Controller {


	/**
	 * [__construct description].
	 */
	public function __construct() {
		$this->namespace = 'vueapp/v1';
		$this->rest_base = 'base';
	}

	/**
	 * Register the routes.
	 *
	 * @return void
	 */
	public function register_routes() {

		// Register user.
		register_rest_route(
			$this->namespace,
			'/register',
			array(
				array(
					'methods'             => \WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'register_user' ),
					'permission_callback' => '__return_true',
				),
			)
		);
		// Login user.
		register_rest_route(
			$this->namespace,
			'/login',
			array(
				array(
					'methods'             => \WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'login_user' ),
					'permission_callback' => '__return_true',
				),
			)
		);
		// Logout user.
		register_rest_route(
			$this->namespace,
			'/logout',
			array(
				array(
					'methods'             => \WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'logout_user' ),
					'permission_callback' => '__return_true',
				),
			)
		);
		// Update user meta.
		register_rest_route(
			$this->namespace,
			'/update_user_meta',
			array(
				array(
					'methods'             => \WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'update_user_meta' ),
					'permission_callback' => '__return_true',
				),
			)
		);
		// Update user meta.
		register_rest_route(
			$this->namespace,
			'/get_user_meta',
			array(
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_user_meta' ),
					'permission_callback' => '__return_true',
				),
			)
		);

		register_rest_route(
			$this->namespace,
			'/send_email',
			array(
				array(
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'send_email' ),
					'permission_callback' => '__return_true',
				),
			)
		);
	}

	/**
	 * Registers a new user.
	 *
	 * This function handles the registration of a new user in a WordPress environment. It accepts a request array
	 * containing key details: username, password, and email. Each input is sanitized for security - username, password,
	 * and email are processed using `sanitize_user`, `sanitize_text_field`, and `sanitize_email` respectively.
	 * The function then validates these inputs and creates a new user account using `wp_insert_user`. If the registration
	 * process encounters any errors, it returns the error; otherwise, it indicates successful registration.
	 *
	 * @param array $request An associative array containing:
	 *                       'username' => The desired username of the new user.
	 *                       'password' => The password for the new account.
	 *                       'email'    => The email address for the new user.
	 *
	 * @return mixed An array indicating successful registration or a WP_Error object in case of an error.
	 *               Success array format: array( 'success' => true )
	 *               Error is returned as a WP_Error object.
	 */
	public function register_user( $request ) {
		if ( ! isset( $_SERVER['HTTP_X_WP_NONCE'] ) || ! wp_verify_nonce( wp_unslash( $_SERVER['HTTP_X_WP_NONCE'] ), 'wp_rest' ) ) {
			return new WP_Error( 'nonce_verification_failed', 'Nonce verification failed', array( 'status' => 403 ) );
		}

		$username = sanitize_user( $request['username'] );
		$password = sanitize_text_field( $request['password'] );
		$email    = sanitize_email( $request['email'] );
		$ward     = sanitize_text_field( $request['ward'] );
		// // More validation here...

		$user_data = array(
			'user_login' => $username,
			'user_pass'  => $password,
			'user_email' => $email,
		);

		$user_id = wp_insert_user( $user_data );

		if ( is_wp_error( $user_id ) ) {
			return $user_id;
		}

		// Store 'ward' as user meta data.
		if ( ! empty( $ward ) ) {
			update_user_meta( $user_id, 'ward', $ward );
		}

		return rest_ensure_response( array( 'success' => true ) );
	}

	/**
	 * Logs in user
	 *
	 * This function authenticates a user based on the provided username and password.
	 * It uses the WordPress `wp_signon` function for authentication and sets the user authentication
	 * cookies if the login is successful. In case of a failure, it returns the error message.
	 *
	 * @param WP_REST_Request $request A request object containing:
	 *                                 'username' => The username of the user attempting to log in.
	 *                                 'password' => The password of the user.
	 *
	 * @return array An associative array containing:
	 *               'success' => A boolean indicating the success or failure of the login.
	 *               'message' => A success message or error message.
	 *               'user'    => An array of user data including 'id' and 'username' (if login is successful).
	 */
	public function login_user( $request ) {

		$username = $request['username'];
		$password = $request['password'];

		$creds = array(
			'user_login'    => $username,
			'user_password' => $password,
			'remember'      => true,
		);

		$user = wp_signon( $creds, false );

		if ( is_wp_error( $user ) ) {
			return array(
				'success' => false,
				'message' => $user->get_error_message(),
			);
		} else {
			wp_clear_auth_cookie();
			wp_set_current_user( $user->ID ); // Set the current user detail.
			wp_set_auth_cookie( $user->ID ); // Set auth details in cookie.
			// Return user data upon successful login.
			return rest_ensure_response(
				array(
					'success' => true,
					'message' => 'Logged in successfully',
					'user'    => array(
						'id'       => $user->ID,
						'username' => $user->user_login,
					// Add other user data as needed...
					),
				)
			);
		}
	}

	/**
	 * Logout user.
	 *
	 * This function handles the user logout process. It clears the authentication cookies,
	 * ensuring the user is logged out of WordPress. It returns a success message upon completion.
	 *
	 * @param WP_REST_Request $request The request object.
	 *
	 * @return array An associative array containing:
	 *               'success' => A boolean indicating the success of the logout process.
	 *               'message' => A message indicating the logout status.
	 */
	public function logout_user( $request ) {
		wp_clear_auth_cookie(); // Clear the authentication cookies.

		return rest_ensure_response(
			array(
				'success' => true,
				'message' => 'Logged out successfully',
			)
		);
	}

	/**
	 * Updates a user's metadata.
	 *
	 * Handles updating of user metadata based on supplied user ID, meta key, and meta value. Validates presence of required parameters
	 * and user existence. If parameters are valid and the user exists, updates the specified metadata. Responses indicate success or
	 * failure of the update operation.
	 *
	 * @param WP_REST_Request $request Request object containing 'user_id', 'meta_key', and 'meta_value'.
	 * @return WP_REST_Response|\WP_Error Response object on success, or WP_Error on failure including missing parameters or update failure.
	 */
	public function update_user_meta( $request ) {
		$params = $request->get_json_params();

		$user_id  = isset( $params['user_id'] ) ? intval( $params['user_id'] ) : null;
		$meta_key = isset( $params['meta_key'] ) ? sanitize_text_field( $params['meta_key'] ) : null;
		$options  = isset( $params['options'] ) ? $params['options'] : null;

		if ( ! $user_id || ! get_userdata( $user_id ) ) {
			return new \WP_Error( 'invalid_user', 'Invalid user ID', array( 'status' => 400 ) );
		}

		if ( ! $meta_key ) {
			return new \WP_Error( 'missing_params', 'Missing meta key', array( 'status' => 400 ) );
		}

		// Check if the new data is different from the existing data.
		$existing_meta = get_user_meta( $user_id, $meta_key, true );
		if ( $existing_meta === $options ) {
			return new \WP_REST_Response( array( 'message' => 'No changes to update' ), 200 );
		}

		$result = update_user_meta( $user_id, $meta_key, $options );

		if ( false === $result ) {
			return new \WP_Error( 'update_failed', 'Failed to update user meta', array( 'status' => 500 ) );
		}

		return new \WP_REST_Response( array( 'success' => true ), 200 );
	}

	/**
	 * Retrieves user metadata based on a specified user ID and meta key.
	 *
	 * This function is designed to handle a request object and extract the user ID and meta key from it.
	 * It then uses these values to fetch the corresponding meta data for the user. If the user ID is not
	 * provided in the request, it returns a WP_Error indicating missing parameters. On successful retrieval
	 * of the meta data, it returns a WP_REST_Response object containing the meta value.
	 *
	 * @param WP_REST_Request $request The request object, expected to contain 'user_id' and 'meta_key'.
	 *
	 * @return WP_REST_Response|\WP_Error Returns WP_REST_Response with the meta value if successful, or WP_Error if parameters are missing or an error occurs.
	 */
	public function get_user_meta( $request ) {
		$user_id  = $request['user_id'];
		$meta_key = $request['meta_key'];

		if ( ! $user_id ) {
			return new \WP_Error( 'missing_params', 'Missing parameters', array( 'status' => 400 ) );
		}

		$options = get_user_meta( $user_id, $meta_key, true );

		return new \WP_REST_Response( array( 'options' => $options ), 200 );
	}

	/**
	 * Sends an email with the requestor's details.
	 *
	 * Processes an incoming request to extract the requestor's details, then constructs and sends an email
	 * containing their name, street, city, and postcode. The function uses WordPress's `wp_mail()` function
	 * for email delivery. It sanitizes input fields to ensure data safety.
	 *
	 * @param array $request Array containing the requestor's details: 'name', 'street', 'city', 'postcode'.
	 * @return WP_Error|\WP_REST_Response Returns WP_REST_Response on successful email send, or WP_Error on failure.
	 */
	public function send_email( $request ) {
		$name     = isset( $request['name'] ) ? sanitize_text_field( $request['name'] ) : '';
		$street   = isset( $request['street'] ) ? sanitize_text_field( $request['street'] ) : '';
		$city     = isset( $request['city'] ) ? sanitize_text_field( $request['city'] ) : '';
		$postcode = isset( $request['postcode'] ) ? sanitize_text_field( $request['postcode'] ) : '';

		// Prepare the email body with all the information.
		$body  = "Name: $name\n";
		$body .= "Street: $street\n";
		$body .= "City: $city\n";
		$body .= "Postcode: $postcode\n";

		$to      = 'rob@designwire.co.uk'; // Replace with your recipient email address.
		$email   = 'subs@designwire.co.uk';
		$subject = 'New Message from ' . $name;
		$headers = array( 'Content-Type: text/html; charset=UTF-8', 'From: ' . $name . ' <' . $email . '>' );

		// Send the email using wp_mail().
		$sent = wp_mail( $to, $subject, $body, $headers );

		if ( $sent ) {
			return rest_ensure_response(
				array(
					'success' => true,
					'message' => 'Email sent successfully',
				)
			);
		} else {
			return new \WP_Error( 'email_send_failed', 'Failed to send email', array( 'status' => 500 ) );
		}
	}
}
