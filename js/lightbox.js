const imagenes = document.querySelectorAll(".img-galeria");
const imagenesLight= document.querySelector(".agregar-img");
const contenedorLight= document.querySelector(".img-light");
const hamburger1= document.querySelector('.hamburger');


imagenes.forEach(imagen => {
    imagen.addEventListener("click",()=>{
        aparecerImg(imagen.getAttribute("src"))
    })
}) 
contenedorLight.addEventListener("click", e => {
    if(e.target !==  imagenesLight ){
        contenedorLight.classList.toggle("show");
    imagenesLight.classList.toggle("show-img");
    hamburger1.style.opacity= "1";
    }
})
const aparecerImg=(imagen)=>{
    imagenesLight.src= imagen 
    contenedorLight.classList.toggle("show");
    imagenesLight.classList.toggle("show-img");
    hamburger1.style.opacity= "0";

}