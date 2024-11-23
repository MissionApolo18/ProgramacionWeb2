document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggleButton');
  const formContainer = document.getElementById('formContainer');

  toggleButton.addEventListener('click', function () {
    console.log("Botón de usuario fue presionado");

    // Alterna directamente el display del formulario
    if (formContainer.style.display === '' || formContainer.style.display === 'none') {
        formContainer.style.display = 'block';  // Muestra el formulario
    } else {
        formContainer.style.display = 'none';  // Oculta el formulario
    }
  });

  // Muestra el estado del formulario después del toggle
  console.log("Estado del formulario después de toggle: ", formContainer.classList);

  function showGamesForCompany() {
    const company = document.getElementById('platform').value;  // Obtiene el valor de la plataforma seleccionada
    const cardContainer = document.querySelector('.card-container');  // Contenedor de las tarjetas

    if (company) {
      fetch(`/games/${company}`)
        .then(response => response.json())
        .then(data => {
          cardContainer.innerHTML = ''; // Limpiar contenido previo

          // Verificar si la respuesta tiene juegos
          if (data.games && data.games.length > 0) {
            data.games.forEach(game => {
              const card = `
                <div class="card">
                  <img src="/images/${game.image}" alt="${game.title}">
                  <h3>${game.title}</h3>
                  <p>Precio: $${game.price}</p>
                  <button>Comprar Ahora</button>
                </div>
              `;
              cardContainer.innerHTML += card;
            });
          } else {
            cardContainer.innerHTML = '<h2>No hay juegos disponibles para esta plataforma.</h2>';
          }
        })
        .catch(error => {
          console.error('Error al obtener los juegos:', error);
          cardContainer.innerHTML = '<h2>Error al cargar los juegos.</h2>';
        });
    } else {
      cardContainer.innerHTML = '<h2>Selecciona una plataforma para ver los videojuegos.</h2>';
    }
  }
});

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
// Traer los juegos de la base de datos



function showGamesForCompany() {
  const platform = document.getElementById('platform').value;
  const cardContainer = document.querySelector('.card-container');
  
  if (platform) {
    fetch(`/games/${platform}`)
      .then(response => response.json())
      .then(data => {
        cardContainer.innerHTML = ''; // Limpia el contenedor antes de mostrar nuevos juegos

        if (data.games.length > 0) {
          data.games.forEach(game => {
            const card = `
              <div class="card">
                <img src="/images/${game.image}" alt="${game.title}">
                <h3>${game.title}</h3>
                <p>Precio: $${game.price}</p>
                <button>Comprar Ahora</button>
              </div>
            `;
            cardContainer.innerHTML += card;
          });
        } else {
          cardContainer.innerHTML = '<h2>No hay juegos disponibles para esta plataforma.</h2>';
        }
      })
      .catch(error => {
        console.error('Error al obtener los juegos:', error);
        cardContainer.innerHTML = '<h2>Error al cargar los juegos. Inténtalo nuevamente más tarde.</h2>';
      });
  } else {
    cardContainer.innerHTML = '<h2>Selecciona una plataforma para ver los juegos disponibles.</h2>';
  }
}
