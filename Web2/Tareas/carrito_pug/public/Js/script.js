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

