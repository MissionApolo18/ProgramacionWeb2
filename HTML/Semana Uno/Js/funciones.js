opr(); 

function opr() {
    console.log("Realizó una operación")
}

f();
const f = function() {
    console.log(3+3);
}

dato = 2
console.log(dato.toString());
console.log(parseInt("2"));

function f(matricula,nombre) {
    console.log(`Hola ${nombre} ${matricula}`)
}
f(2342,'Trejo');

function f_2(matricula = 11, nombre = 'sin nombre') {
    console.log(`Hola ${nombre} ${matricula}`)
}
f_2();