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
function canvasColorInput() {
    // Making use user clicks and drags to paint.
  let mouseDown = false;
  document.querySelector(".canvas").addEventListener("mousedown", () => mouseDown = true);
  document.querySelector(".canvas").addEventListener("mouseup", () => mouseDown = false);

    const emptyDiv = document.querySelectorAll(".empty-div");
    emptyDiv.forEach((item) =>
      item.addEventListener(
        "mouseover", () => { if (mouseDown === true){
            item.style.backgroundColor = hex}
        }
      )
    );
  }


// Color picker button function below:

const allSelectors = document.querySelectorAll(".selector");

allSelectors.forEach((item) => item.addEventListener("click", () => hex = item.value));

// This is for when user selects a different color using custom color picker.
 const custombtn = document.querySelector(".custom");
custombtn.addEventListener("input", () => hex = custombtn.value)





canvasColorInput();