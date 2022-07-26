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

// For slider to add new rows and columns in our canvas.
function setCanvasStyle() {
  const sliderVal = slider.value;
  canvas.style.setProperty("--divs", `repeat(${sliderVal}, 1fr)`);
}


// Adding appropriate amount of divs inside canvas.
function addDivs() {
  const sliderValSquared = slider.value * slider.value;
  const canvas = document.querySelector(".canvas");

  // If divs are less than slider value then add divs
  if (canvas.childElementCount < sliderValSquared) {
    for (let i = canvas.childElementCount; i < sliderValSquared; i++) {
      let emptyDiv = document.createElement("div");
      emptyDiv.classList.add("empty-div");
      canvas.appendChild(emptyDiv);
    }
  }
  // If divs are more than slidervalue then remove divs
  if (sliderValSquared < canvas.childElementCount) {
    for (let j = canvas.childElementCount; j > sliderValSquared; j--) {
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
// Making sure that click also adds color
document.addEventListener("click", (e) => { 
  if(e.target.matches(".empty-div")){
    e.target.style.backgroundColor = hex;
  }
})

 // Making use user clicks and drags to paint.
  document.addEventListener("mouseover", function colorDiv(e){
      if(e.target.matches(".empty-div")){
        if (mouseDown == true){
          e.target.style.backgroundColor = hex;
        }
      }
    })
    
  




// Adding listeners to each button.
 const customBtn = document.querySelector(".custom");
 const blackBtn = document.querySelector(".black");
 const eraserBtn = document.querySelector(".eraser");
 const rainbowBtn = document.querySelector(".rainbow");


  //RAINBOW BUTTON
rainbowBtn.addEventListener("click", () => rainbowGen());

// This function triggers when you click rainbow function and makes pen draw rainbow colors on the canvas
function rainbowGen() {
  const rainbowArr = ["#EE82EE", "#4B0082", "#0000FF", "#008000", "#FFFF00", "#FFA500", "#FF0000" ];

// Function for mousedown and drag
 canvas.addEventListener("mouseover", rainbowColors);
 let i = 1; // Have to declare i outside so that it doesn't get changed every time user hovers a new div.
 function rainbowColors(e){
  if(e.target.matches(".empty-div")){
    if (mouseDown == true){
      // To add new rainbow color each time we use variable i.
      hex = rainbowArr[i];
      e.target.style.backgroundColor = hex;
      i++;
    } 
    if (i == 7){ // Resetting rainbow colors when we reach violet
      i = 0;
    } 
  }
}

// Function for click
canvas.addEventListener("mousedown", clickRainbow);
function clickRainbow(e){
  if(e.target.matches(".empty-div")){
    e.target.style.backgroundColor =  rainbowArr[0];
    hex = rainbowArr[0];
    mouseDown = true; // For drag feature to work after clicking.
    i = 1; // making sure every time user clicks it produces new rainbow pattern.
  }
}

// Making other buttons remove the event listener installed by rainbowGen function.
blackBtn.addEventListener("click", () => {
  canvas.removeEventListener("mouseover", rainbowColors);
  canvas.removeEventListener("mousedown", clickRainbow)});
eraserBtn.addEventListener("click", () => {
  canvas.removeEventListener("mouseover", rainbowColors);
  canvas.removeEventListener("mousedown", clickRainbow)});
customBtn.addEventListener("click", () => {
  canvas.removeEventListener("mouseover", rainbowColors);
  canvas.removeEventListener("mousedown", clickRainbow)});
}



// BLACK BUTTON
blackBtn.addEventListener("click", () =>{
  hex = blackBtn.value;
  // click and drag listener
  canvas.addEventListener("mousedown", (e) => {
    if (e.target.matches(".empty-div")){
      e.target.style.backgroundColor = hex;
      mouseDown = true;
    }
  })
});
 
// ERASER BUTTON
eraserBtn.addEventListener("click", () => {
  hex = eraserBtn.value;
  // click and drag listener
  canvas.addEventListener("mousedown", (e) => {
    if (e.target.matches(".empty-div")){
      e.target.style.backgroundColor = hex;
      mouseDown = true;
    }
  })
});

//  CUSTOM BUTTON
customBtn.addEventListener("input", () => {
  hex = customBtn.value;
  canvas.addEventListener("mousedown", (e) => {
    if (e.target.matches(".empty-div")){
      e.target.style.backgroundColor = hex;
      mouseDown = true;
    }
  })
});










