const arrow_1 = document.querySelector(".quest-img-1");
const arrow_2 = document.querySelector(".quest-img-2");
const arrow_3 = document.querySelector(".quest-img-3");


arrow_1.addEventListener("click", ()=>{
    let mostar = arrow_1.parentElement.parentElement.lastElementChild;
    console.log(mostar);
    mostar.classList.toggle("hide--active");
    arrow_1.classList.toggle("img--rotate");

});

arrow_2.addEventListener("click", ()=>{
    let mostar = arrow_2.parentElement.parentElement.lastElementChild;
    console.log(mostar);
    mostar.classList.toggle("hide--active");
    arrow_2.classList.toggle("img--rotate");

});

arrow_3.addEventListener("click", ()=>{
    let mostar = arrow_3.parentElement.parentElement.lastElementChild;
    console.log(mostar);
    mostar.classList.toggle("hide--active");
    arrow_3.classList.toggle("img--rotate");

});

/*const arrow_1 = document.querySelector(".arrow-1");
const arrow_2 = document.querySelector(".arrow-2");
const arrow_3 = document.querySelector(".arrow-3");
const arrow_4 = document.querySelector(".arrow-4");

console.log(arrow_1);
console.log(arrow_2);
console.log(arrow_3);
console.log(arrow_4);

arrow_1.addEventListener("click", ()=>{
    scale = arrow_1.parentElement.parentElement;
    scale.classList.toggle("scale");
    
});

arrow_2.addEventListener("click", ()=>{
    scale = arrow_2.parentElement.parentElement;
    scale.classList.toggle("scale");
    
});

arrow_3.addEventListener("click", ()=>{
    scale = arrow_3.parentElement.parentElement;
    scale.classList.toggle("scale");
    
});

arrow_4.addEventListener("click", ()=>{
    scale = arrow_4.parentElement.parentElement;
    scale.classList.toggle("scale");
    
});*/