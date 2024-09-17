const buscar = document.querySelector('#f0');
// Evento que ejecuta todo menos blur, input
//Todo; keydown, keyup, click fuera del blur, copy, paste, cut
buscar.addEventListener('input',(evt) => {
    console.log('Evento que se ejecuta')
    console.log(evt)
    console.log(evt.type)
    console.log(evt.target)
    console.log(evt.target.value)
    if (evt.target.value == 'a'){
        console.log("AAAAAAAAAAAAAAAAAA")
    }

})

f.addEventListener('submit', (evt) => {
    console.log(evt.target.method)
    console.log(evt.target.action)
    console.log(evt)
})

f.addEventListener('submit', eventos)

/**
 * Crear un formulario y dentro del formulario solicitar:
 * nombre, apellido paterno, correo, celular, sexo (femenino, masculino, indistinto)
 * Investigar listas desplegables
 * 
 * 5 imagenes para un carrito de compra, crear la vista
 */