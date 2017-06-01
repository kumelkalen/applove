/*
 * Archivo principal de funcionalidad de JS
 */

 var padre = document.getElementById("work");
 var titulo = document.createElement("h2");
 var textLorem = document.createTextNode("work")

 textLorem.setAttribute("class", "text-uppercase");

 titulo.appendChild(textLorem);
 padre.appendChild(titulo);