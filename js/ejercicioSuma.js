/* Ejercicio 1 */

const opciones = [`Módulo1`, `Módulo2`, `Módulo3`, `Módulo4`];

const generarListaOrdenada = vec =>
{
    let s = ``;
    /* Funcion para dar inicio a la lista */
    function comienzo() 
    {
        s = `<ol>`;
    }
    /* Funcion para darle fin a la lista, se le agrega para cerrarla */
    function fin() 
    {
        s += `</ol>`;
    }

    /* Abre la lista para empezar */
    comienzo();

    /* Se crea un for para agregar elementos dentro de la lista */
    vec.forEach(element =>
    {
        s += `<li> ${element} </li>`;
    })

    /* Fin de la lista */
    fin();

    return s;
}

let primerDiv = document.getElementById(`div1`);

primerDiv.innerHTML = generarListaOrdenada(opciones);

/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

/* Ejercicio 2 */

const arrayNumeros = [2, 4, 6, 8, 10, 12];
const array1 = document.getElementById(`array1`);

const mostrarNumeros = (arrayNum, elemento) =>
{
    arrayNum.forEach(element=>
    {
        elemento.innerHTML += `<div>${element}</div>`
    })
}

mostrarNumeros(arrayNumeros, array1);


/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

/* Ejercicio 3 */

const calcular = () =>
{
    let num1 = +document.getElementById(`num1`).value;
    let num2 = +document.getElementById(`num2`).value;
    if (validar(num1, num2))
    {
        let resultado = num1 + num2;
        document.getElementById(`resultado`).value = resultado 
    }
    else alert(`Ingrese los dos numeros`)
}


const validarN = n =>
{
    return (n1 > 0)
}
/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

/* Ejercicio 4 */

let calculadora = document.getElementById(`calculadora`);
let result;



const validar = (n1, n2) =>
{
    return (n1.length>=1 && n2.length>=1)
}
const suma = ()=>
{
    let numero1 = document.getElementById(`numero1`).value;
    let numero2 = document.getElementById(`numero2`).value;
    (validar(numero1, numero2)) ? result = parseFloat(numero1) + parseFloat(numero2) : alert(`Espacios vacios`)
}
const resta = ()=>
{
    let numero1 = document.getElementById(`numero1`).value;
    let numero2 = document.getElementById(`numero2`).value;
    (validar(numero1, numero2)) ? result = parseFloat(numero1) - parseFloat(numero2) : alert(`Espacios vacios`)
}
const dividir = ()=>
{
    let numero1 = document.getElementById(`numero1`).value;
    let numero2 = document.getElementById(`numero2`).value;
    if (validar(numero1, numero2)) 
    {
        numero1 = parseFloat(numero1);
        numero2 = parseFloat(numero2);
        (numero2 > 0) ? result = (numero1 / numero2).toFixed(2) : alert(`El divisor debe ser diferente a 0`);
    }
    else alert(`Espacios vacios`);

}
const multiplicar = ()=>
{
    let numero1 = document.getElementById(`numero1`).value;
    let numero2 = document.getElementById(`numero2`).value;
    (validar(numero1, numero2)) ? result = parseFloat(numero1) * parseFloat(numero2) : alert(`Espacios vacios`)
}

const resultar = ()=>
{
    (isNaN(result)) ? alert(`No ha hecho ninguna operación`) : calculadora.value = result
}



/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

/* Para recordar */

/* Window.onload funciona para ejecutar una función al cargar la ventana, así proteger los datos */
window.onload = () =>
{
    document.querySelector("#botonSuma").onclick = suma;
    document.querySelector("#botonResta").onclick = resta;
    document.querySelector("#botonDiv").onclick = dividir;
    document.querySelector("#botonMult").onclick = multiplicar;
    document.querySelector("#botonResult").onclick = resultar;
    document.querySelector("#botonRegresivo").onclick = enviarNumero;

    let imagenes = document.querySelectorAll('.imagen-img');
    imagenes.forEach(imagen =>
        {
            imagen.addEventListener('click', () =>
            {
                cambioImagen(imagen);
            })
        });
}

/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

/* Ejercicio 5 */

/* setTimeout() funciona para generar un tiempo de espera */
let resultadoRegresivo = document.getElementById(`resultadoRegresivo`);
let numeroRegresivo;

const enviarNumero = () =>
{
    numeroRegresivo = +document.getElementById(`numeroRegresivo`).value;
    cuentaRegresiva()
}

const cuentaRegresiva = () =>
{
    resultadoRegresivo.value = numeroRegresivo
    numeroRegresivo -= 1
    if (numeroRegresivo >= 0) setTimeout(cuentaRegresiva, 1000)
}

/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

/* Ejercicio 7 */

/* Primera forma de hacerlo llamandolo desde el html */
/* const cambiarColor = () =>
{
    let selector = document.getElementById("selector");
    let indColor = document.getElementById("indColor");
    let hexaColor = document.getElementById("hexaColor");
    let color = document.getElementById("color");

    indColor.value = selector.selectedIndex;
    hexaColor.value = selector.value;
    color.value = selector.value;
} */

/* Segunda forma de hacerlo con addEvenListener*/
let selector = document.getElementById("selector");

let indColor = document.getElementById("indColor");
let hexaColor = document.getElementById("hexaColor");
let color = document.getElementById("color");

indColor.value = selector.selectedIndex;
hexaColor.value = selector.value;
color.value = selector.value;

const cambiarColor = () =>
{
    indColor = document.getElementById("indColor");
    hexaColor = document.getElementById("hexaColor");
    color = document.getElementById("color");
    
    indColor.value = selector.selectedIndex;
    hexaColor.value = selector.value;
    color.value = selector.value;
}

selector.addEventListener('change', cambiarColor);

/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

/* Ejercicio 7 */

let enviarDescription = document.getElementById("enviarDescription");

const controlarCaracteres = (event) =>
{
    event.preventDefault();
    let description = document.getElementById("description");

    if(description.value.length == 0) alert("Descripción vacia")
    else if(description.value.length > 10) alert("Cantidad de caracteres excedido, 10max");
}

enviarDescription.addEventListener("click", controlarCaracteres);


/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

/* EXPRESIONES REGULARES */

/* PATRON SE CREA CON SLASH INICIA ^ FINALIZA $ */
/* let patron = /[a-zA-Z]/
let patroFinaliza = /[a-zA-Z]$/
let patronInicia = /^[a-zA-Z]/ */

/* EJERCICIO 1 */
let patronStartLet = /^[a-zA-Z]/;
let patronVocales = /[aeiouAEIOUáéíóú]/;
let alertTexto = document.getElementById(`alertTexto`);

let textoAfirmar = "Ha ingresado los caracteros correctamente";
let textoNegar = "Los caracteres no están correctos";

const validarCaracteres = () =>
{
    let textoExp = document.getElementById(`textoExp`).value;
    
    if(patronStartLet.test(textoExp) && patronVocales.test(textoExp))
    {
        alertTexto.innerHTML = textoAfirmar;
        
        alertTexto.classList.remove("text-danger")
        alertTexto.classList.add("text-success")
    }
    else
    {
        alertTexto.innerHTML = textoNegar;
        alertTexto.classList.remove("text-success")
        alertTexto.classList.add("text-danger")
    }
}

/* EJERCICIO 2 DE EXPRESIONES REGULARES */

let patronNumLet = /^[a-zA-Z0-9]*$/
let patronNumeros = /[0-9]{1}/

let alertTexto2 = document.getElementById(`alertTexto2`);

const validarNumeros = () =>
{
    let textoVali = document.getElementById(`textoVali`).value;
    
    if(patronNumLet.test(textoVali) && patronNumeros.test(textoVali))
    {
        alertTexto2.innerHTML = textoAfirmar;

        alertTexto2.classList.remove("text-danger")
        alertTexto2.classList.add("text-success")
    }
    else
    {
        alertTexto2.innerHTML = textoNegar;
        alertTexto2.classList.remove("text-success")
        alertTexto2.classList.add("text-danger")
    }
}

/* EJERCICIO 3 DE EXPRESIONES REGULARES */

let patronLet = /[a-zA-Z]/
let patronTelf = /^607[0-9]{7}$/

let alertTexto3 = document.getElementById(`alertTexto3`);

const validarTel = () =>
{
    let textVald = document.getElementById(`textVald`).value;
    
    if( patronTelf.test(textVald))
    {
        alertTexto3.innerHTML = textoAfirmar;
        
        alertTexto3.classList.remove("text-danger")
        alertTexto3.classList.add("text-success")
    }
    else
    {
        alertTexto3.innerHTML = textoNegar;
        alertTexto3.classList.remove("text-success")
        alertTexto3.classList.add("text-danger")
    }
}

/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* EJERCICIO 1 DE EVENTOS DEL TECLADO */

let textoDelP = document.getElementById(`textoDelP`);
let textoTeclado = document.getElementById(`textoTeclado`);

textoDelP.innerHTML = `Faltan: ${10 - textoTeclado.value.length } palabras`

textoTeclado.addEventListener("input", function ()
{
    if(textoTeclado.value.length == 10) alert('Ya tiene 10 caracteres');
    textoDelP.innerHTML = `Faltan: ${10 - textoTeclado.value.length } palabras`
})


/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* EJERCICIO DOCUMENT IMAGE MODEL */

/* let imagenes = document.querySelectorAll('.imagen-img'); */

const cambioImagen = imagen =>
{
    contenedorImagen = document.getElementById('contenedorImagen');
    contenedorImagen.innerHTML = `<img src="${imagen.src}" class="imagenContenido">`
}

/* imagenes.forEach(imagen =>
{
    imagen.addEventListener('click', () =>
    {
        cambioImagen(imagen);
    })
}); */


/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* EJERCICIO PARA EL DOCUMENT OBJECT MODEL DUPLICAR, CREAR Y ELIMINAR */

/* creamos un nodo de tipo texto */
const nuevoElemento = document.createElement("p");

const texto = `Insertando nuevo texto - coex`;

const nuevoTexto = document.createTextNode(texto)
/* Creamos un texto nodo con el contenido Insertando nuevo texto - coex */

const nuevoNodo = nuevoElemento.appendChild(nuevoTexto);

/* FUNCION PARA CREAR ELEMENTO NODO, SOLO UNO */
const fnCrear = () =>
{
    let contenedor = document.getElementById(`nuevoTexto`);
    contenedor.appendChild(nuevoElemento);
}

let botonCrear = document.getElementById(`btnCrear`);
botonCrear.addEventListener(`click`, fnCrear);

/* FUNCION PARA CREAR ELEMENTO NODO, SOLO UNO */
const fnDuplicar = () =>
{
    let textoCreado = document.getElementById(`nuevoTexto`);
    copia = textoCreado.cloneNode(true);
    document.getElementById(`copia`).appendChild(copia)
}

let botonDuplicar = document.getElementById(`btnDuplicar`);
botonDuplicar.addEventListener(`click`, fnDuplicar);


/* FUNCION ELIMINAR NODOS, ELIMINA TODOS LOS NODOS */
const fnEliminar = () =>
{
    let eliminarNodo = document.getElementById(`nuevoTexto`);
    eliminarNodo.parentNode.removeChild(eliminarNodo);
}

let btnEliminar = document.getElementById(`btnEliminar`);
btnEliminar.addEventListener(`click`, fnEliminar);


/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* EJERCICIO PARA CREAR ELEMENTOS A PARTIR DE UN INPUT */

let elemento = document.getElementById(`elemento`);

/* preventDefault() = Hace que no se recargue la página */

const fnAgregar = (event) =>
{
    event.preventDefault();
    // capturar el valor de la caja de texto
    let newElement = document.getElementById("textElement").value;
    // crear un nuevo elemento de lista li
    let li = document.createElement("li");
    // crear un nuevo elemento de botón
    let btnDelete = document.createElement("button");
    //    
    // agregar elementos a las clases
    li.className = "list-group-item";
    btnDelete.className = "btn btn-light btn-outline-danger btn-sm float-end delete"

    // agregar el nodo de textoNode    
    li.appendChild(document.createTextNode(newElement));
    btnDelete.appendChild(document.createTextNode("X"));

    elemento.appendChild(li);
    li.appendChild(btnDelete);
}

function fnEliminarElemento(evento) {
    // comprobar los elementos de la clase 'delete'
    if (evento.target.classList.contains("delete")) {
        // mostrar en pantalla mensaje de confirmación
        if (confirm("¿Seguro de eliminar Elemento?")) {
            let li = evento.target.parentElement;
            listaElementos.removeChild(li);
        }
    }

}

let listaElementos = document.querySelector("#elementos");
listaElementos.addEventListener("click", fnEliminarElemento);
document.getElementById('botonAgregar').addEventListener('click', fnAgregar);