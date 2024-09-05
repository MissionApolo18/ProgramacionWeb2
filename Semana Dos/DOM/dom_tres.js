//modificar elementos
const texto = document.querySelector('.fondo h1');
console.log(texto);

//en caso de tener un CSS con visibility: hidden no lo muestra
console.log(texto.innerText);

console.log(texto.textContent);
console.log(texto.innerHTML);

texto.innerText = "Cambiando el texto"
//Con imagenes
const img = document.querySelector('#img');
console.log(img);
img.src = "img/fes.png"
//Para el estilo
const h1 = document.querySelector('.fondo h1');
console.log(h1.style)

h1.style.backgroundColor = 'blue'
h1.style.fontfamily = 'Courier New'

h1.classList.add('clase-uno','clase-dos')
h1.classList.remove('tag')