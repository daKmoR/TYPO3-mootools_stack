plugin.tx_mootoolspackager_pi1 {
	files := addToList(More/Locale.de-DE.Date)
}

plugin.tx_mootoolspackager_pi1.domready {
	myHtmlTables {
		before (
			Locale.use('de-DE');
			HtmlTable.Parsers.date.match = /^\d{2}[-\. ]\d{2}[-\. ]\d{2,4}$/;
		)
	}
}