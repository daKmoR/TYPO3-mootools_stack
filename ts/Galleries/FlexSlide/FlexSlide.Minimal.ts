page.includeCSS.flexslide = EXT:mootools_stack/res/Settings/Galleries/FlexSlide/Minimal/FlexSlide.Setting.Minimal.css
plugin.tx_mootoolspackager_pi1.files := addToList(Stack/FlexSlide, Stack/FlexSlide.Transitions)

plugin.tx_mootoolspackager_pi1.domready {
	myFlexSlide = FlexSlide
	myFlexSlide {
		params = $$('.flexSlide')[0]
	}
}