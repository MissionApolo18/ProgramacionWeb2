console.log(1);
document.addEventListener('DOMContentLoaded',() => {
    console.log('Documento descargado')
    console.assert.log(2);
})
console.log(3);

//Eventos Dos
const img = document.querySelector('#img');

/*img.addEventListener('mouseenter', () => {
    console.log('Evento de mouseenter en imágen');
})

img.addEventListener('mouseout', () => {
    console.log('Evento de mouseout en imágen');
})
*/
//Indicando un borde
img.addEventListener('mouseenter', () => {
    console.log('Evento de mouseenter en imágen');
    img.style.borderRadius = '60px';
})

img.addEventListener('mouseout', () => {
    console.log('Evento de mouseout en imágen');
    img.style.borderRadius = '30px';
})

//click y soltar
img.addEventListener('mouseup', () => {
    console.log('Evento de mouseup en imágen');
    img.style.borderRadius = '80px';
})

img.addEventListener('dbclick', () => {
    console.log('Evento de mouseout double en imágen');
    img.style.borderRadius = '60px';
})