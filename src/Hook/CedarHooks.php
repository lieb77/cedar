<?php

namespace Drupal\cedar\Hook;

use Drupal\Core\Hook\Attribute\Hook;
use Drupal\media\Entity\Media;
use Drupal\file\Entity\File;
use Drupal\Core\Form\FormStateInterface;

/**
 * Modern ThemeHooks class for Drupal 11.3.
 */
class CedarHooks {
	/**
	* You can also use Attributes for standard hooks.
	*/
	#[Hook('preprocess_page')]
	public function preprocessPage(array &$variables): void {	
		// Set the path to the background image
		$variables['site_bg_url'] = theme_get_setting("image_path");
	}


    /**
     *
     */
    #[Hook('form_system_theme_settings_alter')]
    public function formSystemThemeSettingsAlter(array &$form, FormStateInterface $form_state): void {

        if ($form_state->getBuildInfo()['args'][0] == 'cedar') {
           $form['header_image'] = [
                '#type'  => "details",
                '#title' => "Background Image",
                '#open'  => true,
                'settings' => [
                    '#type' => 'container',
                    'image_path' => [
                        '#type' 		 => 'textfield',
                        '#title' 		 => 'Path to image',
                        '#default_value' => theme_get_setting("image_path"),
                    ],
                    'image_upload' => [
                        '#type' => "file",
                        '#title' => "Upload background image",
                        '#upload_validators' => [
                            'FileExtension' => [
                                'extensions' => "png jpg jpeg",
                            ],
                        ],
                    ],
                ],
            ];
        }
	}

}
