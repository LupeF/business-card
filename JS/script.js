const button = document.querySelector(".button-container");
// const backSide = document.querySelector(".card");
const backSide = document.querySelector(".card");
// const profile = document.querySelector("section");
const backButton =document.querySelector(".back-button");
button.addEventListener('click',()=>{
    backSide.classList.toggle("flip-back");
    profile.classList.toggle("flip-back")
    // backSide.classList.toggle("flip-front");
})

backButton.addEventListener('click',()=>{
    backSide.classList.toggle("flip-back");
    backSide.classList.toggle("flip-front");
})
// const reverse = document.querySelector('card')

