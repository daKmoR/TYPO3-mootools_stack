page.includeCSS.flexSlideMinimal = EXT:mootools_stack/res/Settings/Galleries/FlexSlide/Minimal/FlexSlide.Setting.Minimal.css
page.includeCSS.flexSlideTab = EXT:mootools_stack/res/Settings/Galleries/FlexSlide/Tab/FlexSlide.Setting.Tab.css

plugin.tx_mootoolspackager_pi1.files := addToList(Stack/FlexSlide, Stack/FlexSlide.Transitions, Stack/FlexSlide.Setting.Tab)

plugin.tx_mootoolspackager_pi1.domready {
	tabs = FlexSlide
	tabs {
		params = $$('.tabs')[0]
		options {
			setting = 'FlexSlide.Tab'
		}
	}
}