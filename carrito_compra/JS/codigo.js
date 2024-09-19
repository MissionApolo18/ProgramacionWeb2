const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoB = document.querySelector('#vaciar-carrito');
const listaLibros = document.querySelector('#lista-libros');
let itemsCarrito = [];

registrarListener ();

function registrarListener(){
    listaLibros.addEventListener('click', agregarLibro)
}

function agregarLibro(evt){
    console.log(evt.target)
}
/**
 * Rehacer la página del carrito, pero la propia, esta dejarla así
 */