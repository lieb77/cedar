<?php 

namespace Drupal\cedar\Hook;

use Drupal\Core\Hook\Attribute\Hook;
use Drupal\media\Entity\Media;
use Drupal\file\Entity\File;

/**
 * Modern ThemeHooks class for Drupal 11.3.
 */
class CedarHooks {
	/**
	* You can also use Attributes for standard hooks.
	*/
	#[Hook('preprocess_page')]
	public function preprocessPage(array &$variables): void {		
		$myConfigPage = \Drupal\config_pages\Entity\ConfigPages::config('site_settings');
		$config = $myConfigPage->toArray();		
		$media_id = $config['field_background_image'][0]['target_id'];
		if ($media_id) {
		    $media = Media::load($media_id);
    			if ($media && $media->bundle() === 'image') {
    				// Get the file entity from the media "image" field (usually named 'field_media_image')
					$fid = $media->getSource()->getSourceFieldValue($media);
					$file = File::load($fid);
					
					if ($file) {
						$variables['site_bg_url'] = \Drupal::service('file_url_generator')
					    ->generateString($file->getFileUri());
					}
    			}
		}		
	}
}