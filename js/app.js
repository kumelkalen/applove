/*
 * Archivo principal de funcionalidad de JS
 */
/*
 var padre = document.getElementById("work");
 var titulo = document.createElement("h2");
 var textLorem = document.createTextNode("work")

 textLorem.setAttribute("class", "text-uppercase");

 titulo.appendChild(textLorem);
 padre.appendChild(titulo);
 */
//creamos una función auto llamada
(function modal(){
	var divs = Array.from(document.getElementsByClassName("col-4")); //Llamamos los div que contienen las imágenes
	var seccion = document.getElementById("work"); //Llamomos a la sección
	var modal = document.createElement("div"); //creamos un div para el modal
	modal.setAttribute("class","modal");
	var bodyModal, close , img;
	divs.forEach(function(box){ //creamos una función para cada div que será recorrido
		box.addEventListener("click", function(){
			bodyModal = document.createElement("div");
			bodyModal.classList.add("modal-body");
			bodyModal.innerHTML = box.innerHTML;			
			modal.appendChild(bodyModal);

			close = document.createElement("div");
			close.classList.add("close");

			img = document.createElement("img");
			img.setAttribute("src", "");

			close.appendChild(img);
			modal.appendChild(close);
			seccion.appendChild(modal);

			close.addEventListener("click",function(){
				modal.classList.add("hide");
				seccion.removeChild(modal);

			});
		}); 
	});
})();
