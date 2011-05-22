plugin.tx_mootoolspackager_pi1 {
	files := addToList(Stack/HtmlTables)
}

plugin.tx_mootoolspackager_pi1.domready {
	myHtmlTables = HtmlTables
	myHtmlTables {
		params = $$('table')
	}
}