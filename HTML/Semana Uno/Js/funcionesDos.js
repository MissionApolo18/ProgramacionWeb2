InputDeviceInfo();

function inicio(){
    console.log('Se empieza ...');
    f_2
}

function f_2() {
    console.log ('Se llama otra función ....');
    f_3(3423);
}

function f_3(cuenta) {
    console.log('Cuenta de alumno ...')
    console.log(`Cuenta encontrada ${cuenta}`)
}