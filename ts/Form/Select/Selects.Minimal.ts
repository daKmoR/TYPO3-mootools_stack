plugin.tx_mootoolspackager_pi1 {
	files := addToList(Stack/Selects)
}

page.includeCSS {
	selects = EXT:mootools_stack/res/Settings/Form/Select/Minimal/Select.Setting.Minimal.css
}

plugin.tx_mootoolspackager_pi1.domready {
	mySelect = Selects
	mySelect {
		params = $$('select')
	}
}