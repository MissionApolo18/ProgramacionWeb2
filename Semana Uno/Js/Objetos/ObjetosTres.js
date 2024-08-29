/**
 * También podemos tener atributos con funciones
 */
const alumno2 = {
    nombre: "Kai",
    matricula: "12312",
    semestre: 1,
    materias : {
        calculo : 7,
        programacion : 8
    },
    mostrarDatos: function(){
        console.log(`Nombre: ${this.nombre}, Matricula: ${this.matricula}`);
    }
}
//Para construirlo de otra manera:
function Alumno(nombre,matricula) {
    this.nombre = nombre;
    this.matricula = matricula;
    this.mostrarDatos = function() {
        console.log(`Nombre ${this.nombre}, Matricula: ${this.matricula}`);
    }
}

alumno2.mostrarDatos();

const objeto = new Alumno("Rosa", 232123);
console.log(objeto);
objeto.mostrarDatos();
/**
 * Existen otras maneras de acceder a información del objeto
 */
console.log(Object.keys(alumno2)); //Sirve para el nombre de los atributos como arreglo
console.log(Object.values(alumno2)); //Muestra solo los valores pero no da un índice
console.log(Object.entries(alumno2)); //Muestra toda la colección y permite que puedas acceder y conocer el índice de los atributos

