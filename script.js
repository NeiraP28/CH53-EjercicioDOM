
//doument es el objeto que nos permite acceder a todos el cuerpo del DOM


let btnMostrar = document.getElementById("btnMostrar");
let encabezado1 = document.getElementById("encabezado1");
let encabezado2 = document.getElementById("encabezado2");
let listas = document.getElementsByTagName("ul");

let elementos = document.getElementsByClassName("list-group-item");

let otroElemento = document.querySelector("ul>li"); //trae el primero que encuentra

let otrosElementos = document.querySelectorAll("ul>li"); //todos
console.log(otrosElementos.length);
console.log("otroElemento:" , otroElemento);

console.log(listas.length);//2
//console.log(listas[0]);
console.log(listas.item(1));


let contador = 0;
function modifica (){
encabezado1.innerHTML = "<em>Ejercicio</em> DOM"; //diferencia entre text y html, html 
//hace cambios en el documento y no los muestra, text si. 
encabezado2.innerText = "DOMM ejercicio";
} //modifica

/* console.log(encabezado1.innerText); //innerText me permite modificar la propiedad dentro del documento 
console.log(encabezado2.innerText);
 */


btnMostrar.addEventListener("click", function(event){
    event.preventDefault(); //no hagas lo que haces por defecto 
    console.log("botón btnModificar presionado");
    
    let element = document.createElement("li");
    element.innerText = "Another item"; //esto hara un <li>Another ithem</li>
    
//para poder mostrar ambos elementos (before y prepend) podemos clonar uno y 
//asi apareceran ambos en sus correspondientes partes con cloneNode
    let element2 = element.cloneNode(true);

    /* listas.item(0).before(element);
    listas.item(0).prepend(element2); */
    let element3 = element.cloneNode(true);
    listas.item(0).append(element);
    listas.item(0).after(element3);

});

