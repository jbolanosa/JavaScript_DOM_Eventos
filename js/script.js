
//querySelector
const heading = document.querySelector('.header__texto h2');
//heading.textContent = "Nuevo texto";
//heading.classList.add('nueva-clase');
console.log(heading);


//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);

// enlaces[0].href = 'https://www.google.com/';
// enlaces[0].textContent = 'Nuevo texto para enlace';


//getElementById, ya no se utiliza tanto
// const heading2 = document.getElementById('heading');


//Generar un nuevo enlace
const nuevoEnlace = document.createElement('A');

//Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

//agregar el texto
nuevoEnlace.textContent = 'Un nuevo enlace';

//agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

//Agregarlo al documento
const navegacion = document.querySelector('.navegacion');

navegacion.appendChild(nuevoEnlace);

//eventos
// console.log(1);

// window.addEventListener('load', function() {
//     console.log(2);
// })

// window.onload = function() {
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function() {
//     console.log(4);
// })

// console.log(5);

// window.onscroll = function() {
//     console.log('scrolling');
// }

//seleccionar elementos y asociales un evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento) {
//     console.log(evento);
//     evento.preventDefault();
//     console.log('Quiero mostrarte algo');
// })
//Eventos de los inputs y textarea




const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

function leerTexto(campo, datos) {
    campo.addEventListener('input', e => {
        datos[e.target.id] = e.target.value;

        console.log(datos);
    })
}

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    //validar el formulario

    const {nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === ''){
        //alert('No debe haber campos vacios');
        mostrarError('Todos los campos son obligatorios.')

        return;
    }

    mostrarMensaje('Mensaje enviado correctamente');
})

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 5000);
    
}

leerTexto(nombre, datos);
leerTexto(email, datos);
leerTexto(mensaje, datos);