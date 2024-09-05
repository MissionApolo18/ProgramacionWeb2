const arreglo_uno = [10, 23, 11, 34, 134];
console.log(arreglo_uno);

const arreglo_dos = new Array ("Uno", "Dos", "Tres");
console.log(arreglo_dos);

const arreglo_tres = [10, "Demos", {
    nombre: "Bruno",
    matricula:  34342}, [23, 56, 454, 234, 454, 454] ]

console.log(arreglo_tres);
console.log(arreglo_tres[2].nombre);
console.log(arreglo_tres[3][1]);

const datos = ['dato1', 'dato2', 'dato3', 'dato4', 'dato5', ];

const datosDos = [
    {id : 1, nombre: 'Manuel'},
    {id : 2, nombre: 'Pedro'},
    {id : 3, nombre: 'Saul'},
    {id : 4, nombre: 'Rebecca'},
]

datos.forEach(d=>{
    if(d === 'dato3'){
        console.log("Si se encuentra");
    }
})

const resultado = datos.includes('dato5');
console.log(resultado)

const r = datosDos.some( d=>{
    return d.nombre === 'Rebecca';
})
console.log(r);

const r2 = datos.some(d => {
    return d.nombre === 'dato4';
})
console.log(r2)

datos.forEach((d,i) => {
    console.log(d);
    console.log(i)
    if(d === 'dato5'){
        console.log(i)
    }
})
//Otra manera de hacerlo
const indice = datos.findIndex(d =>{
    return d === 'dato2';
})
console.log(indice);

const indiceDos = datosDos.findIndex(d => {
    return d.id === 3;
})
console.log(indiceDos);