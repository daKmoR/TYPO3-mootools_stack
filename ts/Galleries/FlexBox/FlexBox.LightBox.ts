page.includeCSS {
	overlay = EXT:mootools_stack/res/Settings/Visual/Overlay/Default/Overlay.Setting.Default.css
	flexslide = EXT:mootools_stack/res/Settings/Galleries/FlexSlide/Minimal/FlexSlide.Setting.Minimal.css
	flexbox = EXT:mootools_stack/res/Settings/Galleries/FlexBox/Minimal/FlexBox.Setting.Minimal.css
	flexboxLightbox = EXT:mootools_stack/res/Settings/Galleries/FlexBox/LightBox/FlexBox.Setting.LightBox.css
}

plugin.tx_mootoolspackager_pi1 {
	files := addToList(Stack/FlexBox, Stack/FlexSlide.Transitions, Stack/Setting.FlexBox.LightBox)
}

plugin.tx_mootoolspackager_pi1 {
	domready {
		myFlexBox = FlexBox
		myFlexBox {
			params = $$('.FlexBox')
			options {
				setting = 'FlexBox.LightBox'
			}
		}
	}
}