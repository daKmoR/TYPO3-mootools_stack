plugin.tx_mootoolspackager_pi1 {
	files := addToList(More/HtmlTable.Sort)
}

plugin.tx_mootoolspackager_pi1.domready {
	myHtmlTables {
		options {
			sortable = true
		}
	}
}