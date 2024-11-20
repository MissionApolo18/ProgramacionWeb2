// Array para almacenar los productos en el carrito
const carrito = [];

// Función para mostrar los juegos de la consola seleccionada y ocultar el resto
function mostrarJuegos(consolaId) {
    // Ocultar todas las secciones de juegos
    const seccionesJuegos = document.querySelectorAll('.juegos');
    seccionesJuegos.forEach(seccion => seccion.style.display = 'none');
    
    // Mostrar solo la sección de juegos correspondiente a la consola seleccionada
    const seccionSeleccionada = document.getElementById(consolaId);
    seccionSeleccionada.style.display = 'flex';
}

// Seleccionar los botones de "Agregar al carrito" y agregar eventos
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const productoImagen = event.target.getAttribute('data-img');
        const productoNombre = event.target.previousElementSibling.getAttribute('alt');
        agregarAlCarrito(productoNombre, productoImagen);
    });
});

// Seleccionar la imagen del carrito y el contenedor del contenido
const carritoIcono = document.getElementById('carrito');
const carritoContenido = document.getElementById('carrito-contenido');
const contadorCarrito = document.getElementById('contador-carrito');

// Muestra y oculta el contenido del carrito al hacer clic en el icono
carritoIcono.addEventListener('click', () => {
    carritoContenido.classList.toggle('visible');
    carritoContenido.classList.toggle('oculto');
});

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, imagen) {
    const productoExistente = carrito.find(item => item.nombre === nombre);

    if (productoExistente) {
        // Incrementa la cantidad si el producto ya existe en el carrito
        productoExistente.cantidad += 1;
    } else {
        // Agrega el nuevo producto al carrito
        carrito.push({ nombre, imagen, cantidad: 1 });
    }

    actualizarCarrito();
}

// Función para actualizar el contenido del carrito y el contador
function actualizarCarrito() {
    const carritoItems = document.getElementById('carrito-items');
    carritoItems.innerHTML = ''; // Limpia el contenido actual del carrito

    // Actualiza el contador de productos en el carrito
    const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    contadorCarrito.textContent = totalCantidad;

    // Muestra los productos en el carrito
    carrito.forEach((producto, index) => {
        const div = document.createElement('div');
        div.classList.add('carrito-item');
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 50px; height: 50px;">
            <p>Nombre: ${producto.nombre}</p>
            <p>Cantidad: ${producto.cantidad}</p>
            <button class="remove-item" data-index="${index}">❌ Eliminar</button>
        `;
        carritoItems.appendChild(div);
    });

    agregarEventosEliminar(); // Agrega los eventos para eliminar productos
}

// Función para agregar eventos de eliminación a cada botón "Eliminar"
function agregarEventosEliminar() {
    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const index = parseInt(event.target.getAttribute('data-index'));

            // Elimina el producto del array 'carrito' y actualiza el carrito
            carrito.splice(index, 1);
            actualizarCarrito();
        });
    });
}