const btn_circle =  document.querySelector(".switch_btn .circle");
const plan_1 = document.querySelector(".bottom .plan-1");
const plan_2 = document.querySelector(".bottom .plan-2");

btn_circle.addEventListener("click", ()=>{

btn_circle.classList.toggle("switch_btn--active");
plan_1.classList.toggle("plan--active");
plan_2.classList.toggle("plan--active");

});
