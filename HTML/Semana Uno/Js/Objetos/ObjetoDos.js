/**
 * A un elemento se le pueden agregar más elementos, lo que puede hacer más interesante el objeto
 * ya que permite una mejor descripción con sus atributos
 */
const alumno2 = {
    nombre: "Kai",
    matricula: "12312",
    semestre: 1,
    materias : {
        calculo : 7,
        programacion : 8
    }
}

console.log(alumno2);
console.log(alumno2.nombre);
console.log(alumno2.materias.calculo);
console.log(alumno2.materias.programacion);

const {nombre, semestre, materias:{programacion}} = alumno2;
console.log(nombre, semestre, programacion);

//reaccionar valores en objetos
alumno2.nombre = "Juan"

/**
 * En ocasiones los objetos ya no deben de ser modificados se puede recurrir
 * a la siguiente notación
 */
Object.freeze(alumno2);
/**
 * Para poder modificar los atributos, pero no se pueden agregar o eliminar
 */
Object.seal(alumno2);
alumno2.nombre = "Bruno"
console.log(alumno2);

console.log(Object.isSealed(alumno2));

const servicio = {
    tipo:  "Aspociado",
    empresa: "Telmex",
    horas: 6
}
const union = Object.assign(alumno2, servicio);
console.log(union)
//rest operador
const unionDos = {...alumno2, ...servicio};
console.log(unionDos);