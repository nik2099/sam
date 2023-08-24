
	var windowWidth = jQuery(window).width();
	console.log('ready');
	//alert(windowWidth);
	
	jQuery(window).resize(function(){
		var windowWidth = jQuery(window).width();
		var windowHeight = jQuery(window).height();
	});
	
	jQuery(window).scroll(function(){
		var windowWidth = jQuery(window).width();
		var windowHeight = jQuery(window).height();
	});
	
	/* ------------------------------------------------------------------- App Info */
	$('.app-info-trigger-wrapper')
		.mouseout(function(){
			var thisDataID = $(this).attr('data-id');
	  		$('#' + thisDataID + ' .app-info-wrapper').fadeOut(250);
		})
		.mouseover(function(){
			var thisDataID = $(this).attr('data-id');
			$('#' + thisDataID + ' .app-info-wrapper').removeAttr('style');
	});
	/* ------------------------------------------------------------------- Modal switch */
	$('.btn-abo-wechsel').click(function(){
		$('#exampleModalUpgrade').modal('hide');
		$('#exampleModalAboWechsel').modal('show');
	});
	$('.btn-abo-wechsel-delete').click(function(){
		$('#exampleModalUpgrade').modal('hide');
		$('#exampleModalAboDelete').modal('show');
	});
	$('.btn-abo-wechsel-downgrade').click(function(){
		$('#exampleModalUpgrade').modal('hide');
		$('#exampleModalAboDowngrade').modal('show');
	});
	/* ------------------------------------------------------------------- Form validate */
	(function () {
	'use strict'
	const forms = document.querySelectorAll('.requires-validation')
	Array.from(forms)
	.forEach(function (form) {
	form.addEventListener('submit', function (event) {
	if (!form.checkValidity()) {
	    event.preventDefault()
	    event.stopPropagation()
	}
	
	  form.classList.add('was-validated')
	}, false)
	})
	})();

	(function () {
	  'use strict'
	  var forms = document.querySelectorAll('.needs-validation')

	  Array.prototype.slice.call(forms)
	    .forEach(function (form) {
	      form.addEventListener('submit', function (event) {
	        if (!form.checkValidity()) {
	          event.preventDefault()
	          event.stopPropagation()
	        }
	
	        form.classList.add('was-validated')
	      }, false)
	    })
	})()
	/* ------------------------------------------------------------------- href-bubbling */
	var bubblingHrefWrapper = jQuery('.bubbling-href-wrapper');
	bubblingHrefWrapper.onclick = function(event) {
		event.target.style.backgroundColor = 'yellow';
		
		// chrome needs some time to paint yellow
		setTimeout(() => {
		alert("target = " + event.target.tagName + ", this=" + this.tagName);
		event.target.style.backgroundColor = ''
		}, 0);
	};

