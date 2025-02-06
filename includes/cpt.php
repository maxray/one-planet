<?php
// Create OPL CPTs
function principles_post_type() {
	register_post_type(
		'principles',
		array(
			'labels'        => array(
				'name'          => __( 'Principles' ),
				'singular_name' => __( 'Principle' ),
			),
			'public'        => true,
			'show_in_rest'  => true,
			'supports'      => array( 'title', 'editor', 'page-attributes', 'thumbnail', 'custom-fields' ),
			'has_archive'   => true,
			'rewrite'       => array( 'slug' => 'principles' ),
			'menu_position' => 5,
			'menu_icon'     => 'dashicons-share-alt',
		// 'taxonomies' => array('principles', 'post_tag') // this is IMPORTANT
		)
	);
}

function actions_post_type() {
	register_post_type(
		'actions',
		array(
			'labels'        => array(
				'name'          => __( 'Actions' ),
				'singular_name' => __( 'Action' ),
			),
			'public'        => true,
			'show_in_rest'  => true,
			'supports'      => array( 'title', 'editor', 'page-attributes', 'thumbnail', 'custom-fields' ),
			'has_archive'   => true,
			'rewrite'       => array( 'slug' => 'actions' ),
			'menu_position' => 6,
			'menu_icon'     => 'dashicons-universal-access',
		// 'taxonomies' => array('actions', 'post_tag') // this is IMPORTANT
		)
	);
}

function tools_post_type() {
	register_post_type(
		'tools',
		array(
			'labels'        => array(
				'name'          => __( 'Tools' ),
				'singular_name' => __( 'Tool' ),
			),
			'public'        => true,
			'show_in_rest'  => true,
			'supports'      => array( 'title', 'editor', 'page-attributes', 'thumbnail', 'custom-fields' ),
			'has_archive'   => true,
			'rewrite'       => array( 'slug' => 'tools' ),
			'menu_position' => 7,
			'menu_icon'     => 'dashicons-hammer',
		// 'taxonomies' => array('tools', 'post_tag') // this is IMPORTANT
		)
	);
}

add_action( 'init', 'principles_post_type' );
add_action( 'init', 'actions_post_type' );
add_action( 'init', 'tools_post_type' );
