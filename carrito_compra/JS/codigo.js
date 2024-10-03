const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoB = document.querySelector('#vaciar-carrito');
const listaLibros = document.querySelector('#lista-libros');
let itemsCarrito = [];

registrarListener ();

function registrarListener(){
    listaLibros.addEventListener('click', agregarLibro)
    carrito.addEventListener('click', eliminarLibro)
    vaciarCarritoB.addEventListener('click',()=> {
        itemsCarrito = [];
        HtmlCarrito();
    })
}

function agregarLibro(evt){
    evt.preventDefault()
    if(evt.target.classList.contains('agregar-carrito')) {
        const libroSeleccionado = evt.target.parentElement.parentElement;
        leerLibro(libroSeleccionado)
    }
}
function eliminarLibro(evt) {
    evt.preventDefault()
    if (evt.target.classList.contains('borrar-curso')) {
        const libroId = evt.target.getAttribute('data-id')
        itemsCarrito = itemsCarrito.filter(libro => libro.id !== libroInfo.id)
        HtmlCarrito()
    }
}

function leerLibro(libro){
    const libroInfo = {
        imagen: libro.querySelector('img').src,
        nombre: libro.querySelector('h4').textContent,
        precio: libro.querySelector('.precio span').textContent,
        id: libro.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    const existe = itemsCarrito.some(lib)

    if (existe){
        const items = itemsCarrito.map(libro=>{
            if(libro.id == libroInfo) {
                libro.cantidad++;
                return libro;
            } else {
                return libro
            }
        });
        itemsCarrito = [...items]
    } else {
        itemsCarrito = [...itemsCarrito, libroInfo]
    }
    console.log(itemsCarrito);
    HtmlCarrito();
}

function HtmlCarrito() {
    limpiarHTML()
    itemsCarrito.forEach(libros => {
        const {imagen, nombre, precio, cantidad, id} = libros;
        const fila = document.createElement('tr');
        fila.innerHTML=`
        <td>
            <img src ="${imagen}" width = "100">
        </td>
        <td>${nombre}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
            <a href = "#" class = "borrar-curso"
            data-id = "${libros.id}">'(x)' </a>
        </td>
        `;
        contenedorCarrito.appendChild(fila);
    });
}

function limpiarHTML() {
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

/**
 * 3 - Octubre
 * Una tienda online de videojuegos piensa vender videojuegos de 3 plataformas diferentes:
 * Xbos
 * Psp
 * Nintendo
 * los administradores quieren lo siguiente:
 * diseñar una pag web para registrar las ventas de los 3 tipos de videojuegos que se tienen
 * y se propone el sig diseño
 */