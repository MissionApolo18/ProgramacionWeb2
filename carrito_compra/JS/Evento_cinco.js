//Con eventos anidados
const card = document.querySelector('#card')

card.addEventListener('click',evt=>{
    if(evt.target.classList.contains('info')){
        console.log('info')
    }
    if(evt.target.classList.contains('clase')){
        console.log('clase')
    }
    if(evt.target.classList.contains('card')){
        console.log('card')
    }
})