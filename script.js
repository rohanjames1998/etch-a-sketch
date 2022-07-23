// Displaying slider value in HTML
const slider = document.querySelector(".slider");

function getSliderVal(){
     const gridSize = document.querySelector(".grid-size");
     gridSize.textContent = `${slider.value} x ${slider.value}`;
    const thumbSize = `${slider.value}px`;
     slider.style.setProperty("--thumbSize", thumbSize);
   
        
    }


