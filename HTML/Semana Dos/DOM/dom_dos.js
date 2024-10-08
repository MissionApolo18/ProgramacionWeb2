//Seleccionar elementos por clase
const clase = document.getElementsByClassName('fondo');
console.log(clase);

const clase_no = document.getElementsByClassName('fondo2')
console.log(clase_no);

//Seleccionar formulario
const formulario = document.getElementById('f0')
console.log(formulario);

const formulario_no = document.getElementById('f1')
console.log(formulario_no);

//querySelector para clases (el primero que encuentre)
const selector = document.querySelector('.fondo');
console.log(selector);
//querySelector id
const form_dos = document.querySelector('.fondo #f0');
console.log(form_dos);
//querySelector por etiqueta
const etiqueta = document.querySelector('img');
console.log(etiqueta);
//querySelectorAll
const todo = document.querySelectorAll('img');
console.log(todo);

const todo_no = document.querySelectorAll('imgs');
console.log(todo_no);

