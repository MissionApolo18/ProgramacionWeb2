var navegar = document.querySelector('#base')
console.log(navegar)
console.log(navegar.childNodes)
console.log(navegar.children[5].src = 'img/fes_2.png')

console.log(navegar.children[5].nodeType)

//avanzar al siguiente elemento
const siguiente = navegar.children[0]
console.log(siguiente.nextElementSibling)
siguiente.nextElementSibling.innerText = 'Hola Web 2'
//para el elemento anterior
console.log(navegar.children[5].previousElementSibling)
//para eliminar un elemento desde el padre
navegar.removeChild(navegar.children[6])