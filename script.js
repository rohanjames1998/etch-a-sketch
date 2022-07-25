/* -------------------- */
// SLIDER/CANVAS FUNCTIONS
/* -------------------- */

// Displaying slider value in HTML
const slider = document.querySelector(".slider");

function getSliderVal() {
  const gridSize = document.querySelector(".grid-size");
  gridSize.textContent = `${slider.value} x ${slider.value}`;
  const thumbSize = `${slider.value}px`;
  slider.style.setProperty("--thumbSize", thumbSize);

  return setCanvasStyle(), addDivs(), canvasColorInput();
}

// Adding adjusts appropriate amount of rows and cols in canvas.

function setCanvasStyle() {
  const sliderVal = slider.value;
  const canvas = document.querySelector(".canvas");

  // Adding rows and cols.
  canvas.style.setProperty("--divs", `repeat(${sliderVal}, 1fr)`);
}

// Adding appropriate amount of divs inside canvas.

function addDivs() {
  const sliderVal = slider.value * slider.value;
  const canvas = document.querySelector(".canvas");

  // If divs are less than slidervalue then add divs
  if (canvas.childElementCount < sliderVal) {
    for (let i = canvas.childElementCount; i < sliderVal; i++) {
      let emptyDiv = document.createElement("div");
      emptyDiv.classList.add("empty-div");
      canvas.appendChild(emptyDiv);
    }
  }
  // If divs are more than slidervalue then remove divs
  if (sliderVal < canvas.childElementCount) {
    for (let j = canvas.childElementCount; j > sliderVal; j--) {
      let divsToRemove = canvas.lastElementChild;
      canvas.removeChild(divsToRemove);
    }
  }
}

/* -------------------- */
// COLOR FUNCTIONS
/* -------------------- */
//Tells canvasColorInput if the user is painting (i.e., rightclicked and hovering the canvas)

let hex ="#000"; /* this value can be dynamically changed using buttons in color palette. */
// This function applies the specified pen color (hex variable) to canvas when user interacts with it.
let mouseDown = false;
document.addEventListener("mousedown", () => mouseDown = true);
document.addEventListener("mouseup", () => mouseDown = false);

 // Making use user clicks and drags to paint.
function canvasColorInput() {
    // const emptyDiv = document.querySelectorAll(".empty-div");
    // emptyDiv.forEach((item) =>
    //   item.addEventListener(
    //     "mouseover", () => { if (mouseDown === true){
    //         item.style.backgroundColor = hex}
    //     }
    //   )
    // );

    document.addEventListener("mouseover", e => {
      if(e.target.matches(".empty-div")){
        if (mouseDown == true){
          e.target.style.backgroundColor = hex;
        }
      }
    } )
    
  }




// This is for when user selects a different color using custom color picker.
 const customBtn = document.querySelector(".custom");
  customBtn.addEventListener("input", () => hex = customBtn.value);

// Generating rainbow colors
const  rainbowBtn = document.querySelector(".rainbow");
rainbowBtn.addEventListener("click", () => rainbowGen());

function rainbowGen() {
let red = "#FF0000";
let orange = "#FFA500";
let yellow = "#FFFF00";
let green = "#008000";
let blue = "#0000FF";
let indigo = "#4B0082";
let violet = "#EE82EE";

const rainbowArr = [red, orange, yellow, green, blue, indigo, violet];
let i = 0;
document.addEventListener("mouseover", e => {
  if(e.target.matches(".empty-div")){
    if (mouseDown == true){
      e.target.style.backgroundColor = rainbowArr[i];
      i++;
    }
    if(i == 7){ // Resetting rainbow colors when we reach violet
      i = 0;
    }
  }
} )
}










canvasColorInput();