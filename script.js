/* -------------------- */
// SLIDER/CANVAS FUNCTIONS
/* -------------------- */




// Displaying slider value in HTML
const slider = document.querySelector(".slider");
const canvas = document.querySelector(".canvas");

function getSliderVal() {
  const gridSize = document.querySelector(".grid-size");
  gridSize.textContent = `${slider.value} x ${slider.value}`;
  const thumbSize = `${slider.value}px`;
  slider.style.setProperty("--thumbSize", thumbSize);

  return setCanvasStyle(), addDivs()
}

// Adding adjusts appropriate amount of rows and cols in canvas.

function setCanvasStyle() {
  const sliderVal = slider.value;

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
let isRainbowOn = false;
document.addEventListener("mousedown", () => mouseDown = true);
document.addEventListener("mouseup", () => mouseDown = false);

 // Making use user clicks and drags to paint.


  document.addEventListener("mouseover", function colorDiv(e){
      if(e.target.matches(".empty-div")){
        if (mouseDown == true){
          e.target.style.backgroundColor = hex;
        }
      }
    })
    
  




// This is for when user selects a different color using custom color picker.
 const customBtn = document.querySelector(".custom");
 const blackBtn = document.querySelector(".black");
 const eraserBtn = document.querySelector(".eraser");
 const rainbowBtn = document.querySelector(".rainbow");

//  CUSTOM BUTTON
  customBtn.addEventListener("input", () => {
    hex = customBtn.value;
  });




  //RAINBOW BUTTON
rainbowBtn.addEventListener("click", () => rainbowGen());

// This function triggers when you click rainbow function and makes pen draw rainbow colors on the canvas
function rainbowGen() {
let red = "#FF0000";
let orange = "#FFA500";
let yellow = "#FFFF00";
let green = "#008000";
let blue = "#0000FF";
let indigo = "#4B0082";
let violet = "#EE82EE";
const rainbowArr = [red, orange, yellow, green, blue, indigo, violet];

//Checking if user is clicking and dragging on the canvas. If so we add rainbow color from rainbowArr to the background of the clicked div.
isRainbowOn = true;
 canvas.addEventListener("mouseover", rainbowColors);

 let i = 0;
  function rainbowColors(e){

  if(e.target.matches(".empty-div")){
    if (mouseDown == true){
      // To add new rainbow color each time we use variable i.
      hex = rainbowArr[i];
      e.target.style.backgroundColor = hex;
      i++;
    } 
    if(i == 7){ // Resetting rainbow colors when we reach violet
      i = 0;
    }
  }
  
}
blackBtn.addEventListener("click", () => canvas.removeEventListener("mouseover", rainbowColors));
eraserBtn.addEventListener("click", () => canvas.removeEventListener("mouseover", rainbowColors));
customBtn.addEventListener("click", () => canvas.removeEventListener("mouseover", rainbowColors));
}



// BLACK BUTTON
blackBtn.addEventListener("click", () =>{
  hex = blackBtn.value;
})
 
// ERASER BUTTON
eraserBtn.addEventListener("click()", () => {
  hex = eraserBtn.value;
})










