const imagen = document.createElement('img');
imagen.textContent = 'imagen nueva';
imagen.src = 'img/fes.png'
imagen.onclick = funcion;
console.log(imagen)

const donde = document.querySelector('#base');
console.log(donde.children)

donde.appendChild(imagen)
function funcion(){
    alert('Evento a la imagen')
}
//en el lugar que se desea
donde.insertBefore(imagen,donde.children[1]);
//Agregar un div nuevo
const div = document.createElement('div');
const imagen_1 = document.createElement ('img');
imagen_1.src = 'img/fes.png';
imagen_1.classList.add("clase-uno");

const imagen_2 = document.createElement('img');
imagen_2.src = 'img/fes.png';
div.appendChild(imagen_1);
div.appendChild(imagen_2);

const ubicacion = document.querySelector('#cuerpo');
ubicacion.appendChild(div);