function cuerpo(){
		var cuerpo = document.getElementsByTagName("body")[0];
		cuerpo.style.background="#000";
		h1=document.querySelector("h1");
		h1.innerHTML="<h1>BIENVENIDO</h1>";	
	}

function socialBtns(){

// Seleccionamos los botones de redes sociales mediante su clases
		var btnFace = document.getElementsByClassName("btnkFace");
		var btnTwit = document.getElementsByClassName("btnkTwitter");
		var btnBeha = document.getElementsByClassName("btnkBehance");

//hacemos un reccorrido sobre los botones encontrados y agregamos la acción de abrir una URL
		
		

		function faceLink(){
			for (f = 0; f < btnFace.length; f++) {
					console.log(btnFace[f]);
					btnFace[f].addEventListener("click", function(){
					window.open("http://facebook.com/kuovadigital");					
				});
			}
		}
		
		function TwitLink(){
					for (t = 0; t < btnTwit.length; t++) {
						console.log();
					btnTwit[t].addEventListener("click", function(){
					window.open("http://twitter.com/kuovadigital");
				});	
			}
		}

		function BehaLink(){
					for (b = 0; b < btnBeha.length; b++) {
						console.log();
					btnBeha[b].addEventListener("click", function(){
					window.open("http://behance.net/carlosedmundohg");
				});	
			}
		} 
		faceLink();
		TwitLink();
		BehaLink();
}
var contenido=document.getElementById("contenido");
var btnOcultar=document.getElementById("ocultar");
var btnMostrar=document.getElementById("mostrar");
btnOcultar.classList.add("btn-k");
btnMostrar.classList.add("btn-k", "hidden");


var toggleRemoveContenido = function(visible){
	if(visible){
		contenido.classList.add("hidden");
		btnMostrar.classList.remove("hidden");
		btnOcultar.classList.add("hidden");
	}else {
		contenido.classList.remove("hidden");
		btnMostrar.classList.add("hidden");
		btnOcultar.classList.remove("hidden");
	}
}

btnOcultar.addEventListener("click", function(){
	toggleRemoveContenido(true);
})

btnMostrar.addEventListener("click", function(){
	toggleRemoveContenido(false);
})
 var hola;
console.log(typeof hola);

document.addEventListener("DOMContentLoaded", function(event){
	cuerpo();
	socialBtns();
	
});


