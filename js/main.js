var config = document.querySelector('.filtering');
mixitup(config);

$(document).ready(function(){

	$('a').click(function(){
		if(this.hash !== ""){
			var hash = this.hash;


			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 900);
		}
	});

	$('.gellery-image').magnificPopup({
    			type : "image",
    			gallery : {
    				enabled : true
    			}
    	   });

});

			

    	