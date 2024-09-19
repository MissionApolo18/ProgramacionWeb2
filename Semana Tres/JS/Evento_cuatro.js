//Evento Bubbling 
const card = document.querySelector('#card')
const info = document.querySelector('#info')
const clase = document.querySelector('#clase')

card.addEventListener('click',evt=> {
    console.log('click en card')
})
info.addEventListener('click',evt=> {
    console.log('click en info')
})
clase.addEventListener('click',evt=> {
    console.log('click en clase')
})

card.addEventListener('click',e=>{
    e.stopPropagation()
    console.log('click en card')
})
info.addEventListener('click',e=>{
    e.stopPropagation()
    console.log('click en info')
})
clase.addEventListener('click',e=>{
    e.stopPropagation()
    console.log('click en clase')
})