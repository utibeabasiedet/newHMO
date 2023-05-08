const hamburger = document.querySelector(".hamburger")
const bars = document.querySelector(".fa-bars") 
const xmark = document.querySelector(".fa-xmark")
const listNav =document.querySelector('.list-nav')
const register =document.querySelector('.register')

hamburger.addEventListener("click", function(){

    bars.classList.toggle('toggle')
    xmark.classList.toggle('toggleblock')
    listNav.classList.toggle('activeone')
    register.classList.toggle('activeone')
    
})



// bars.addEventListener("click", function(){
//         bars.classList.toggle('toggleblock')
        
        
// })
// xmark.addEventListener("click", function(){
   
//     xmark.classList.toggle('toggle')
    
// })