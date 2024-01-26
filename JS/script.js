const card = document.querySelector(".card");
const button = document.querySelector(".button-container");
const backButton =document.querySelector(".back-button");

button.addEventListener('click',()=>{
    card.classList.toggle("flip-back");
})

backButton.addEventListener('click',()=>{
    card.classList.toggle("flip-back");
    
})


