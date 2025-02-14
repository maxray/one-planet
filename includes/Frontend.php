<?php
namespace OPL;

/**
 * Frontend Pages Handler
 */
class Frontend {

	public function __construct() {
		add_shortcode( 'one-planet-living', array( $this, 'render_frontend' ) );
	}


	/**
	 * Render frontend app
	 *
	 * @param  array  $atts
	 * @param  string $content
	 *
	 * @return string
	 */
	public function render_frontend( $atts, $content = '' ) {
		wp_enqueue_style( 'oplbase-frontend' );
		wp_enqueue_style( 'oplbase-style' );
		wp_enqueue_style( 'oplbase-vendor' );
		wp_enqueue_script( 'oplbase-frontend' );

			// Generate a nonce for REST API requests
		$nonce = wp_create_nonce( 'wp_rest' );

		$content .= '<script type="text/javascript">window.oplbaseNonce = "' . esc_js( $nonce ) . '";</script>';

		// $content .= '<div id="oplbase-frontend-app"></div>';
		$content .= '<div id="oplbase-frontend-app"></div>';

		return $content;
	}
}
