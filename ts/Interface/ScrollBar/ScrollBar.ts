plugin.tx_mootoolspackager_pi1 {
	files := addToList(Stack/ScrollBars)
}

page.includeCSS {
	scrollbar = EXT:mootools_stack/res/Settings/Interface/ScrollBar/Default/ScrollBar.Setting.Default.css
}

plugin.tx_mootoolspackager_pi1 {
	domready {
		myScrollBars = ScrollBars
		myScrollBars {
			params = $$('.scrollBarBoth, .scrollBarVertical, .scrollBarHorizontal')
		}
	}
}