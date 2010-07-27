<?php
if (!defined ("TYPO3_MODE")) 	die ("Access denied.");

t3lib_extMgm::addTypoScript($_EXTKEY, 'setup', '
	plugin.tx_mootoolspackager_pi1 {
		manifests {
			50 = EXT:mootools_stack/res/
		}
	}
', 43);

?>