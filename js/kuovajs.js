function socialBtns(){

// Seleccionamos los botones de redes sociales mediante sus clases
		var btnFace = $(".btnkFace");
		var btnTwit = $(".btnkTwitter");
		var btnBeha = $(".btnkBehance");

//hacemos un reccorrido sobre los botones encontrados y agregamos la acción de abrir una URL
		(function faceLink(){
			for (f = 0; f < btnFace.length; f++) {
					btnFace[f].addEventListener("click", function(){
					window.open("http://facebook.com/kuovadigital");					
				});	
			}
		})();
		
		(function TwitLink(){
					for (t = 0; t < btnTwit.length; t++) {
					btnTwit[t].addEventListener("click", function(){
					window.open("http://twitter.com/kuovadigital");
				});	
			}
		})();

		(function BehaLink(){
					for (b = 0; b < btnBeha.length; b++) {
					btnBeha[b].addEventListener("click", function(){
					window.open("http://behance.net/carlosedmundohg");
				});	
			}
		})();
}

function backTop(){
	var offset = 220;
	    var duration = 700;
	    jQuery(window).scroll(function() {
	        if (jQuery(this).scrollTop() > offset) {
	            jQuery('.topBtn').fadeIn(duration);
	        } else {
	            jQuery('.topBtn').fadeOut(duration);
	        }
	    });
	    
	    jQuery('.topBtn').click(function(event) {
	        event.preventDefault();
	        jQuery('html, body').animate({scrollTop: 0}, duration);
	        return false;
	    });
}



function showPage(){
	load=$("#load").css("display", "none")
	contenido=$("#contenido");
	contenido.css("display","block");
	body=document.querySelector("body");
	body.classList.remove("bgNaranja");
}


function formValidate(){
	$('#formulario').validate({
		submitHandler: function(form) {
			$(form).ajaxSubmit({ 
				url: 'php/send.php', success: function() {
					$('#formulario').hide(); $('#respuesta').append("<p>Gracias, pronto nos pondremos en contacto</p>")
				}	}); } });
}

$(document).ready(function(){

	formValidate();
	socialBtns();
	backTop();
	showPage();
	console.log("javascript listo!!");
})



