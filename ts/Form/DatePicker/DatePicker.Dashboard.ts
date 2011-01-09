plugin.tx_mootoolspackager_pi1 {
	files := addToList(Stack/DatePicker)
}

page.includeCSS {
	datepicker = EXT:mootools_stack/res/Settings/Form/DatePicker/Dashboard/DatePicker.Setting.Dashboard.css
}

plugin.tx_mootoolspackager_pi1.domready {
	myDatePicker = DatePicker
	myDatePicker {
		params = '.date.dashboard'
		options {
			pickerClass = 'datepicker_dashboard'
			inputOutputFormat = 'd-m-Y'
			days = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']
			months = ['Jänner', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December']
		}
	}
}