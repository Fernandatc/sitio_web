const hamburger= document.querySelector('.hamburger');
const menu= document.querySelector('.menu-hamburgesa');

hamburger.addEventListener("click", ()=>{
    // alert("click")
    menu.classList.toggle("spread");
})

window.addEventListener("click", e =>{
    if(menu.classList.contains("spread")&& e.target != menu &&  e.target != hamburger){
        menu.classList.toggle("spread");
    }

})
console.log("si funciona")