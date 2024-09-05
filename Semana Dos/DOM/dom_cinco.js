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