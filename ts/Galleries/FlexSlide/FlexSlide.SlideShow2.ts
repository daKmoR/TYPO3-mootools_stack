<INCLUDE_TYPOSCRIPT: source="FILE: EXT:mootools_stack/ts/Galleries/FlexSlide/FlexSlide.Minimal.ts">

page.includeCSS.slideshow2 = EXT:mootools_stack/res/Settings/Galleries/FlexSlide/SlideShow2/FlexSlide.Setting.SlideShow2.css

plugin.tx_mootoolspackager_pi1.files := addToList(Stack/Setting.FlexSlide.SlideShow2)

plugin.tx_mootoolspackager_pi1.domready {
	myFlexSlide {
		options {
			setting = 'FlexSlide.SlideShow2'
		}
	}
}