// Displaying slider value in HTML
const slider = document.querySelector(".slider");

function getSliderVal(){
     const gridSize = document.querySelector(".grid-size");
     gridSize.textContent = `${slider.value} x ${slider.value}`;
    const thumbSize = `${slider.value}px`;
     slider.style.setProperty("--thumbSize", thumbSize);

     return setCanvasStyle();
    }

    // Adding adjusts appropriate amount of rows and cols in canvas.

    function setCanvasStyle(){
        const sliderVal = slider.value;
        const canvas = document.querySelector(".canvas");
        
        // Adding rows and cols.
        canvas.style.setProperty( "--divs", `repeat(${sliderVal}, 1fr)`);
        
    addDivs();
    }

    // Adding appropriate amount of divs inside canvas.
 
   function addDivs(){
        const sliderVal = slider.value * slider.value;
        const canvas = document.querySelector(".canvas");

        // If divs are less than slidervalue then add divs
        if (canvas.childElementCount < sliderVal){
        for(let i = canvas.childElementCount; i < sliderVal; i++){
        let emptyDiv = document.createElement("div");
        emptyDiv.classList.add("empty-div");
        canvas.appendChild(emptyDiv);
        }  
    }

        // IF divs are more than slidervalue then remove divs
        let divsToRemove = canvas.lastElementChild;
        if(canvas.childElementCount > sliderVal){
            for(let j = sliderVal; j < canvas.childElementCount; j++){
                canvas.removeChild(divsToRemove);
                divsToRemove = canvas.lastElementChild;
            }
        }
   
   }



   
   