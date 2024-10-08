/*
Dom: sirve para eventos con objetos
Los objetos se parecen mucho a los JSON
*/
const alumno = {
    nombre: "Pedro",
    matricula: "12312",
    semestre: 1
}
console.log(alumno);
console.log(alumno.nombre);
console.log(alumno['matricula']);
/**
 * JavaScript permite agregar más cosas una vez declarados los tributos, así mismo 
 * también permite eliminar atributos permitiendo que el código resulte más dinámico
 */
//Agregar atributo
alumno.beca = true;
console.log(alumno);
//Eliminar atributo
delete alumno.beca;
console.log(alumno)
/**
 * ''Destructuring'' sirve para hacer individual los atributos de un objeto
 */
const valor = alumno.nombre;
console.log(valor);
const {nombre} = alumno;
console.log (nombre);
//se deben llamar igual
const{matricula} = alumno;
console.log(nombre, matricula);