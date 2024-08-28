//funciones arrow
const f = function() {
    console.log ('JavaScript');
}

const f1 = () => {
    console.log('JavaScript')
}

const f2 = () => console.log('JavaScript')

//Retornar un valor
const f3 = () => 'JavaScript';

//Nueva 
const f_0 = (dato) => console.log(`valor ${dato}`)
f('JavaScript')
const f_1 = (dato) => console.log(`valor ${dato}`)
f_1('JavaScript')
//con multiiples parametros 
const f_2 = (dato1, dato2) => console.log(`valores ${dato1} y ${dato2}`)
f_2(1, 'ES');

// Anotaciones JSON
/*
Sirven para ayudar a traer la información desde una BDD y poder procesarlos
*/
const alumno = [
    {nombre: 'Alan', matricula: 1},
    {nombre: 'Pedro', matricula: 2},
    {nombre: 'Tomás', matricula: 3},
    {nombre: 'Alfonso', matricula: 4},
    {nombre: 'Samuel', matricula: 5},
    {nombre: 'Raúl', matricula: 6}]

const arr1 = alumno.map(
    dato => `Alumno ${dato.nombre} Cuenta: ${dato.matricula}` 
)

alumno.forEach (dato => console.log(`Alumno: ${dato.nombre} Cuenta: ${dato.matricula}`))

console.log(arr1);