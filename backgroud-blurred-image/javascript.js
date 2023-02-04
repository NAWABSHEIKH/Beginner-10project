const containerEl=document.querySelector(".container");
const btnEl=document.querySelector(".btn");
const popupcontainerEl=document.querySelector(".popup-container");
const crossEl=document.querySelector(".cross");


btnEl.addEventListener("click",()=>{
    containerEl.classList.add("active");
    popupcontainerEl.classList.remove("active")
})

crossEl.addEventListener("click",()=>{
    containerEl.classList.remove("active");
    popupcontainerEl.classList.add("active")
})