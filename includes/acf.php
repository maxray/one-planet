<?php

// Check if ACF Pro is already active before including ACF from the plugin.
if ( ! class_exists('ACF') ) {
// Define path and URL to the ACF plugin.
define( 'MY_ACF_PATH', plugin_dir_path( __FILE__ ) . 'acf-master/' );
define( 'MY_ACF_URL', plugins_url() . '/one-planet-living/includes/acf-master/' );

// Include the ACF plugin.
require_once MY_ACF_PATH . 'acf.php';

// Customize the url setting to fix incorrect asset URLs.
add_filter( 'acf/settings/url', 'my_acf_settings_url' );
function my_acf_settings_url( $url ) {
	return MY_ACF_URL;
}

// (Optional) Hide the ACF admin menu item.
add_filter('acf/settings/show_admin', '__return_false');

// When including the PRO plugin, hide the ACF Updates menu
add_filter('acf/settings/show_updates', '__return_false', 100);

// function my_acf_json_save_point( $path ) {
// return MY_ACF_PATH . '/acf-json';
// }
// add_filter( 'acf/settings/save_json', 'my_acf_json_save_point' );
}

add_action(
	'acf/include_fields',
	function() {
		if ( ! function_exists( 'acf_add_local_field_group' ) ) {
			return;
		}

	acf_add_local_field_group(
    array(
        'key'                   => 'group_6554e32f46785',
        'title'                 => 'Actions',
        'fields'                => array(
            array(
                'key'               => 'field_6554e32f3344b',
                'label'             => 'Image',
                'name'              => 'image',
                'aria-label'        => '',
                'type'              => 'image',
                'instructions'      => '',
                'required'          => 0,
                'conditional_logic' => 0,
                'wrapper'           => array(
                    'width' => '',
                    'class' => '',
                    'id'    => '',
                ),
                'return_format'     => 'array',
                'library'           => 'all',
                'min_width'         => '',
                'min_height'        => '',
                'min_size'          => '',
                'max_width'         => '',
                'max_height'        => '',
                'max_size'          => '',
                'mime_types'        => '',
                'preview_size'      => 'medium',
            ),
            array(
                'key'               => 'field_6554e32f5678c',
                'label'             => 'Intro',
                'name'              => 'intro',
                'aria-label'        => '',
                'type'              => 'textarea',
                'instructions'      => '',
                'required'          => 0,
                'conditional_logic' => 0,
                'wrapper'           => array(
                    'width' => '',
                    'class' => '',
                    'id'    => '',
                ),
                'default_value'     => '',
                'placeholder'       => '',
                'maxlength'         => '',
                'rows'              => '',
                'new_lines'         => '', // 'wpautop' for <p> tags, 'br' for <br> tags
            ),
        ),
        'location'              => array(
            array(
                array(
                    'param'    => 'post_type',
                    'operator' => '==',
                    'value'    => 'actions',
                ),
            ),
        ),
        'menu_order'            => 0,
        'position'              => 'normal',
        'style'                 => 'default',
        'label_placement'       => 'top',
        'instruction_placement' => 'label',
        'hide_on_screen'        => '',
        'active'                => true,
        'description'           => '',
        'show_in_rest'          => 0,
    )
	);


		acf_add_local_field_group(
			array(
				'key'                   => 'group_6554d8f86e0a2',
				'title'                 => 'Principles',
				'fields'                => array(
						array(
                'key'               => 'field_6554e32f4555c',
                'label'             => 'Strapline',
                'name'              => 'strapline',
                'aria-label'        => '',
                'type'              => 'text',
                'instructions'      => 'Enter a brief strapline for this action.',
                'required'          => 0,
                'conditional_logic' => 0,
                'wrapper'           => array(
                    'width' => '',
                    'class' => '',
                    'id'    => '',
                ),
                'default_value'     => '',
                'placeholder'       => 'Your strapline here',
                'prepend'           => '',
                'append'            => '',
                'maxlength'         => 255,
            ),
					array(
						'key'               => 'field_6554d8f8b6194',
						'label'             => 'Video',
						'name'              => 'video',
						'aria-label'        => '',
						'type'              => 'oembed',
						'instructions'      => '',
						'required'          => 0,
						'conditional_logic' => 0,
						'wrapper'           => array(
							'width' => '',
							'class' => '',
							'id'    => '',
						),
						'width'             => '',
						'height'            => '',
					),
					array(
						'key'               => 'field_6554d90eb6195',
						'label'             => 'Image',
						'name'              => 'image',
						'aria-label'        => '',
						'type'              => 'image',
						'instructions'      => '',
						'required'          => 0,
						'conditional_logic' => 0,
						'wrapper'           => array(
							'width' => '',
							'class' => '',
							'id'    => '',
						),
						'return_format'     => 'array',
						'library'           => 'all',
						'min_width'         => '',
						'min_height'        => '',
						'min_size'          => '',
						'max_width'         => '',
						'max_height'        => '',
						'max_size'          => '',
						'mime_types'        => '',
						'preview_size'      => 'medium',
					),
					array(
						'key'               => 'field_6554d91bb6196',
						'label'             => 'icon',
						'name'              => 'icon',
						'aria-label'        => '',
						'type'              => 'image',
						'instructions'      => '',
						'required'          => 0,
						'conditional_logic' => 0,
						'wrapper'           => array(
							'width' => '',
							'class' => '',
							'id'    => '',
						),
						'return_format'     => 'array',
						'library'           => 'all',
						'min_width'         => '',
						'min_height'        => '',
						'min_size'          => '',
						'max_width'         => '',
						'max_height'        => '',
						'max_size'          => '',
						'mime_types'        => '',
						'preview_size'      => 'medium',
					),

					array(
						'key'               => 'field_6554d91bb6210',
						'label'             => 'Principle color',
						'name'              => 'principle_color',
						'aria-label'        => '',
						'type'              => 'color_picker',
						'instructions'      => 'Please select a color',
						'required'          => 0,
						'conditional_logic' => 0,
						'wrapper'           => array(
							'width' => '',
							'class' => '',
							'id'    => '',
						),
						'return_format'     => 'string',
						'library'           => 'all',
						'min_width'         => '',
						'min_height'        => '',
						'min_size'          => '',
						'max_width'         => '',
						'max_height'        => '',
						'max_size'          => '',
						'mime_types'        => '',
						'preview_size'      => 'medium',
					),

					array(
						'key'                  => 'field_6554d928b6197',
						'label'                => 'Actions',
						'name'                 => 'actions',
						'aria-label'           => '',
						'type'                 => 'relationship',
						'instructions'         => '',
						'required'             => 0,
						'conditional_logic'    => 0,
						'wrapper'              => array(
							'width' => '',
							'class' => '',
							'id'    => '',
						),
						'post_type'            => array(
							0 => 'actions',
						),
						'post_status'          => array(
							0 => 'publish',
						),
						'taxonomy'             => '',
						'filters'              => array(
							0 => 'search',
							1 => 'post_type',
							2 => 'taxonomy',
						),
						'return_format'        => 'object',
						'min'                  => '',
						'max'                  => '',
						'elements'             => '',
						'bidirectional'        => 0,
						'bidirectional_target' => array(),
					),
				),
				'location'              => array(
					array(
						array(
							'param'    => 'post_type',
							'operator' => '==',
							'value'    => 'principles',
						),
					),
				),
				'menu_order'            => 0,
				'position'              => 'normal',
				'style'                 => 'default',
				'label_placement'       => 'top',
				'instruction_placement' => 'label',
				'hide_on_screen'        => '',
				'active'                => true,
				'description'           => '',
				'show_in_rest'          => 0,
			)
		);

		acf_add_local_field_group(
			array(
				'key'                   => 'group_6554e1de85713',
				'title'                 => 'Tools & Support',
				'fields'                => array(
					array(
						'key'               => 'field_6554e1df86a87',
						'label'             => 'image',
						'name'              => 'image',
						'aria-label'        => '',
						'type'              => 'image',
						'instructions'      => '',
						'required'          => 0,
						'conditional_logic' => 0,
						'wrapper'           => array(
							'width' => '',
							'class' => '',
							'id'    => '',
						),
						'return_format'     => 'array',
						'library'           => 'all',
						'min_width'         => '',
						'min_height'        => '',
						'min_size'          => '',
						'max_width'         => '',
						'max_height'        => '',
						'max_size'          => '',
						'mime_types'        => '',
						'preview_size'      => 'medium',
					),
					array(
						'key'                  => 'field_6554e20286a88',
						'label'                => 'actions',
						'name'                 => 'actions',
						'aria-label'           => '',
						'type'                 => 'relationship',
						'instructions'         => '',
						'required'             => 0,
						'conditional_logic'    => 0,
						'wrapper'              => array(
							'width' => '',
							'class' => '',
							'id'    => '',
						),
						'post_type'            => array(
							0 => 'actions',
						),
						'post_status'          => '',
						'taxonomy'             => '',
						'filters'              => array(
							0 => 'search',
							1 => 'post_type',
							2 => 'taxonomy',
						),
						'return_format'        => 'object',
						'min'                  => '',
						'max'                  => '',
						'elements'             => '',
						'bidirectional'        => 0,
						'bidirectional_target' => array(),
					),
					array(
						'key'               => 'field_6554e2c01e18c',
						'label'             => 'video',
						'name'              => 'video',
						'aria-label'        => '',
						'type'              => 'oembed',
						'instructions'      => '',
						'required'          => 0,
						'conditional_logic' => 0,
						'wrapper'           => array(
							'width' => '',
							'class' => '',
							'id'    => '',
						),
						'width'             => '',
						'height'            => '',
					),
				),
				'location'              => array(
					array(
						array(
							'param'    => 'post_type',
							'operator' => '==',
							'value'    => 'tools',
						),
					),
				),
				'menu_order'            => 0,
				'position'              => 'normal',
				'style'                 => 'default',
				'label_placement'       => 'top',
				'instruction_placement' => 'label',
				'hide_on_screen'        => '',
				'active'                => true,
				'description'           => '',
				'show_in_rest'          => 0,
			)
		);
	}
);
