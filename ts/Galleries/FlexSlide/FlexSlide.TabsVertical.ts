page.includeCSS {
	tabsVertical = EXT:mootools_stack/res/Settings/Galleries/FlexSlide/TabVertical/FlexSlide.Setting.TabVertical.css
}

plugin.tx_mootoolspackager_pi1 {
	files := addToList(Stack/FlexSlide, Stack/FlexSlide.Transitions, Stack/FlexSlide.Setting.TabVertical)
}

plugin.tx_mootoolspackager_pi1.domready {
	tabsVertical = FlexSlide
	tabsVertical {
		params = $$('.tabs')[0]
		options {
			setting = 'FlexSlide.TabVertical'
		}
	}
}