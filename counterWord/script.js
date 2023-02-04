const textareaEl=document.getElementById("textarea");

const totalCounterEl=document.getElementById("increment");

const remainingCounterEl=document.getElementById("decrement");

const nameEl=document.getElementById("right");
// keyup is used to represent that the key is pressed

nameEl.innerText=`Remaining Letter :${textareaEl.getAttribute("maxlength")}`

textareaEl.addEventListener("keyup", ()=>{
     updateCounter()
    
})

function updateCounter()
{
    // based on value.length we get number of character that is entered into the textarea
   totalCounterEl.innerText=textareaEl.value.length

   nameEl.innerText=`Remaining Letter :${textareaEl.getAttribute("maxlength")-textareaEl.value.length}`           
}

