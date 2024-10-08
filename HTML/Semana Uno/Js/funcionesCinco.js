//Funciones con valores
const f = {
    valor: ' ',
    f1: dato => console.log(`Dato ${dato}`),
    f2: () => console.log('Realizar otra cosa ...'),
    f3: dato => console.log(`Otra funcionalidad para dato: ${dato}`),
    f4: matricula => console.log(`Buscando en BD ${matricula}`),
    f5: nombre => console.log(`Buscando en BD ${nombre}`),

    set cambiarValor(valor){
        this.valor = valor;
        console.log(`Cambiando valor ${valor}`)
    },

    get obtenerValor() {
        console.log(`${this.valor}`)
    }
}
f.f_1(1)
f.f_2()
/*   1. Abrir el puerto 80 de Apache, como no soy de Linux ni de Infinitum tengo que ver cómo hacerlo
    2. VEr cómo hacerlo con Windows y Totalplay para el jueves 29*/