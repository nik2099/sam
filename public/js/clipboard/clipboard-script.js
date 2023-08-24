(function($) {
	"use strict";
	var clipboard = new ClipboardJS('.btn-clipboard');
	clipboard.on('success', function(e) {
	    alert("Text wurde kopiert");
	    e.clearSelection();
	});
	clipboard.on('error', function(e) {
	
	});

	var clipboard = new ClipboardJS('.btn-clipboard-cut');
	clipboard.on('success', function(e) {
		alert("Text wurde ausgeschnitten");
		e.clearSelection();
	});
	clipboard.on('error', function(e) {

	});
})(jQuery);
