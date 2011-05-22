plugin.tx_mootoolspackager_pi1 {
	files := addToList(Stack/MooPath.Ellipse)
}

plugin.tx_mootoolspackager_pi1.domready {
	mooPathEllipse = MooPath.Ellipse
	mooPathEllipse {
		params = $$('.mooPathEllipse .item')
		options {
			show = 'random'
			factor = 0.6
		}
	}
}