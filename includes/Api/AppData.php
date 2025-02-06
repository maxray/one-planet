<?php
/**
 * AppData REST API Handler for WordPress.
 *
 * This class defines the REST API endpoints for managing AppData, specifically for fetching and sanitizing principles
 * data. It includes methods for registering routes, sanitizing titles and descriptions, and retrieving principles with
 * their associated actions and tools. Each method ensures data integrity and security for REST API interactions.
 *
 * @package OPL\Api
 */

namespace OPL\Api;

use WP_REST_Controller;
use WP_Query;
/**
 * REST_API Handler.
 */
class AppData extends WP_REST_Controller {

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
			'/principles',
			array(
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_principles' ),
					'permission_callback' => '__return_true',
				),
			)
		);
	}

	/**
	 * Sanitizes a title by removing all HTML tags and decoding HTML entities.
	 *
	 * @param string $title The title to be sanitized.
	 * @return string The sanitized title, safe for display or storage.
	 */
	private function sanitize_title( $title ) {
		return html_entity_decode( wp_strip_all_tags( $title ) );
	}

	/**
	 * Sanitizes content descriptions.
	 *
	 * Cleanses the input content by allowing only a predefined set of HTML tags and attributes. Intended for
	 * sanitizing principle and action descriptions to ensure safe output in HTML context. Applies WordPress content filters
	 * and decodes HTML entities in the sanitized result.
	 *
	 * @param string $content The content to be sanitized.
	 * @return string Sanitized content, safe for output.
	 */
	private function sanitize_description( $content ) {
		$allowed_tags = array(
			'p'      => array(),
			'br'     => array(),
			'em'     => array(),
			'strong' => array(),
			'a'      => array(
				'href' => array(),
			),
		);
		return html_entity_decode( wp_kses( apply_filters( 'the_content', $content ), $allowed_tags ) );
	}

	/**
	 * Retrieves and sanitizes principles data.
	 *
	 * Fetches principles posts and related actions and tools data, applying sanitization to titles and descriptions. Each principle includes details
	 * like color, video, image, and icon, along with associated actions, each action including related tools. Sanitization ensures safe text
	 * output for titles and descriptions.
	 *
	 * @return array Returns an array of sanitized principles, including details and associated actions and tools.
	 */
	public function get_principles() {
		$principles = array();
		$query = new WP_Query( array( 
				'post_type' => 'principles',
				'orderby' => 'menu_order',
				'order' => 'ASC' // or 'DESC' for descending order
		) );

		while ( $query->have_posts() ) {
			$query->the_post();
			$principle_id          = get_the_ID();
			$principle_title       = $this->sanitize_title( get_the_title() );
			$principle_description = $this->sanitize_description( get_the_content() );
			$principle_strapline = $this->sanitize_description( get_field( 'strapline', $principle_id ) );
			$principle_color       = get_field( 'principle_color', $principle_id );
			$principle_video       = get_field( 'video', $principle_id );
			$principle_image       = get_field( 'image', $principle_id );
			$principle_icon        = get_field( 'icon', $principle_id );

			$actions_posts = get_field( 'actions', $principle_id );
			$actions_data  = array();

			if ( is_array( $actions_posts ) || is_object( $actions_posts ) ) {
				foreach ( $actions_posts as $action_post ) {
					// Fetch the action post content.
					$action_id           = $action_post->ID;
					$action_post_content = get_post_field( 'post_content', $action_id );
					$action_title        = $this->sanitize_title( get_the_title( $action_post->ID ) );
					$action_description  = $this->sanitize_description( $action_post_content );
					$action_image        = get_field( 'image', $action_id );
					$action_intro        = get_field( 'intro', $action_id );

					$tools_query = new WP_Query(
						array(
							'post_type'  => 'tools',
							'fields'     => 'ids',
							'meta_query' => array(
								array(
									'key'     => 'actions',
									'value'   => '"' . $action_id . '"',
									'compare' => 'LIKE',
								),
							),
						)
					);

					$tools_data = array();
					foreach ( $tools_query->posts as $tool_id ) {
						// Fetch the tool post content.
						$tool_post_content = get_post_field( 'post_content', $tool_id );
						$tool_title        = $this->sanitize_title( get_the_title( $tool_id ) );
						$tool_description  = $this->sanitize_description( $tool_post_content );

						$tools_data[] = array(
							'id'          => $tool_id,
							'title'       => $tool_title,
							'description' => $tool_description,
						);
					}
					wp_reset_postdata();

						$actions_data[] = array(
							'id'          => $action_id,
							'title'       => $action_title,
							'image'       => $action_image,
							'intro'       => $action_intro,
							'description' => $action_description,
							'tools'       => $tools_data,
						);
				}
			}

			$principles[] = array(
				'id'          => $principle_id,
				'title'       => $principle_title,
				'description' => $principle_description,
				'strapline' => $principle_strapline,
				'color'       => $principle_color,
				'video'       => $principle_video,
				'image'       => $principle_image,
				'icon'        => $principle_icon,
				'actions'     => $actions_data,
			);
		}
		wp_reset_postdata();

		return array( 'principles' => $principles );
	}
}
