// Movement
const card = document.querySelector('.card');
const container = document.querySelector('.container');



container.addEventListener('mousemove', (e)=>{
    let xAxis = (window.innerWidth / 2 - e.pageX) / 45;
    let yAxis = (window.innerHeight / 2 - e.pageY)/ 45;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
// animate in
container.addEventListener("mouseenter", (e)=>{
    
    card.style.transition = "none";
    title.style.transform = "translateZ(100px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
    description.style.transform = "translateZ(100px)";
    
    
});
// animate out
container.addEventListener("mouseleave", (e)=>{
    card.style.transition = "all 1s ease";

    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0px)"
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)"
    description.style.transform = "translateZ(0px)";
});


const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

