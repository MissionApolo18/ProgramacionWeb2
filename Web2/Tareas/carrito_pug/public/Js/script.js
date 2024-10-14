function showGamesForCompany() {
    const company = document.getElementById('company').value;
    const cardContainer = document.getElementById('card-container');
  
    if (company) {
      fetch(`/games/${company}`)
        .then(response => response.json())
        .then(data => {
          cardContainer.innerHTML = ''; // Limpiar contenido previo
  
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
        })
        .catch(error => {
          console.error('Error fetching games:', error);
        });
    } else {
      cardContainer.innerHTML = '<h2>Selecciona una compañía para ver sus videojuegos.</h2>';
    }
  }
  