const button = document.querySelector(".button-container");
const backSide = document.querySelector(".card");
const backButton =document.querySelector(".back-button")
button.addEventListener('click',()=>{
    backSide.classList.toggle("flip-back");
})

// backButton.addEventListener('click',()=>{
//     backSide.classList.toggle("flip-back");
//     backSide.classList.toggle("flip-front");
// })
// const reverse = document.querySelector('card')

