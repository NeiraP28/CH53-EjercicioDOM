
//doument es el objeto que nos permite acceder a todos el cuerpo del DOM


let btnMostrar = document.getElementById("btnMostrar");
let encabezado1 = document.getElementById("encabezado1");
let encabezado2 = document.getElementById("encabezado2");
let listas = document.getElementsByTagName("ul");
let txtRFC = document.getElementById("txtRFC");
let txtCURP = document.getElementById("txtCURP");
let txtTelefono = document.getElementById("txtTelefono");

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
    /* let element3 = element.cloneNode(true);
    listas.item(0).append(element);
    listas.item(0).after(element3); */

    /* //afterbegin inserta elemento al principio de la lista 
    listas.item(1).insertAdjacentElement("afterbegin", element);
    //beforeen inserta elemento alfinal de la lista
    listas.item(1).insertAdjacentElement("beforeend", element2); */


    //esto inserta elemento directamente sin necesidad de clonarlos 
        listas.item(1).insertAdjacentHTML("beforebegin", 
        `<li class = "list-group-item">Before End item</li>`);

        listas.item(1).insertAdjacentHTML("afterend", 
            `<li class = "list-group-item">Before End item</li>`);

        listas.item(1).insertAdjacentHTML("afterbegin", 
                `<li class = "list-group-item">Before End item</li>`);


        listas.item(1).insertAdjacentHTML("beforeend", 
        `<li class = "list-group-item">Before End item</li>`);

});//btnMostrar

//Se ejecuta cuando termina de cargar todos los elementos de la página 
window.addEventListener("load", function(event){
    console.log("se termino de cargar la página");
    
}); //load

//esto seria llamar evento por evento con su funcion
/* //blur = cuando se sale del campo, value es el texto que ingresamos y que podemos reasignar 
txtRFC.addEventListener("blur", function(event){
    event.preventDefault();
    txtRFC.value = txtRFC.value.toUpperCase(); //touUpperCase para convertir a mayusculas, junto con el blur cuando se sale del 
    //campo el RFC se convertira en mayusculas 
});


txtCURP.addEventListener("blur", function(event){
    event.preventDefault();
    txtCURP.value = txtCURP.value.toUpperCase();
}); */

//podemos optimizarlo creando una sola funcion y reutilizandola asi 
function txtToUpper (event){
    event.preventDefault();
    //el target hace referencia al evento.
    event.target.value = event.target.value.trim().toUpperCase();
};
//y ahora solo llamamos al evento pasando como parametro la funcion
txtRFC.addEventListener("blur", txtToUpper);
txtCURP.addEventListener("blur", txtToUpper);

txtTelefono.addEventListener("blur", function(event){
    event.preventDefault();
    //trim quita espacios, slice define el numero de campos para el numero, osea solo 10 
    txtTelefono.value = txtTelefono.value.trim().slice(0,10);
});
