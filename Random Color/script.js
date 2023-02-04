const containerEl=document.querySelector(".container");


// 30(box container)

for (let index = 0; index < 30; index++) {
   const colorEl=document.createElement("div");
   colorEl.classList.add("color");
   containerEl.appendChild(colorEl);
    
    
}

const colorContainerEls = document.querySelectorAll(".color")

generateColors();

function generateColors(){
    colorContainerEls.forEach((colorContainerEl)=>{
         const newColorCode=randomColor();
        //  console.log(newColorCode);
        colorContainerEl.style.backgroundColor="#"+newColorCode;
        colorContainerEl.innerText="#"+newColorCode;
    })
}

function randomColor(){
    const chars="0123456789abcdef";
    const colorCodeLength=6;
    let colorCode="";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum=Math.floor(Math.random() * chars.length );
        //console.log(randomNum);
        colorCode +=chars.substring( randomNum, randomNum + 1);
        
    }
    return colorCode;
}