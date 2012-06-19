<?php
if (!defined ("TYPO3_MODE")) 	die ("Access denied.");

t3lib_extMgm::addTypoScript($_EXTKEY, 'setup', '
plugin.tx_mootoolsessentials {
	settings {
		manifests {
			Stack = EXT:mootools_stack/Resources/Public/Manifests/Stack/
			MooTools-DatePicker = EXT:mootools_stack/Resources/Public/Manifests/MootoolsDatepicker/
			Slide = EXT:mootools_stack/Resources/Public/Manifests/Slide/
			PopUp = EXT:mootools_stack/Resources/Public/Manifests/PopUp/
			MooGooMaps = EXT:mootools_stack/Resources/Public/Manifests/MooGooMaps/
			Movie = EXT:mootools_stack/Resources/Public/Manifests/Movie/
		}
	}
}
', 43);

?>