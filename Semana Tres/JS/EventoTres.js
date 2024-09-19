window.addEventListener('scroll', evento)
/**
function evento (evt) {
    evt.preventDefault();
    console.log('scroll);
    console.los(window)
    }
 */
function evento(evt) {
    const imagen = document.querySelector('#img')
    const ubicacion = imagen.getBoundingClientRect();

    if(ubicacion.top<685) {
        console.log('Ya estamos en el elemento')
    } else {
        console.log('Todavía no llegamos')
    }
}
