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
document.getElementById('toggleButton').addEventListener('click', function () {
  const formContainer = document.getElementById('formContainer');
  formContainer.classList.toggle('hidden');
});

