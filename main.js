// ARRAY VISUALIZER

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let myArray = [400, 200, 200, 400, 200, 200, 200, 400, 200, 200, 200, 200, 400];

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
  // Logic
  let barWidth = cnv.width / myArray.length;

  // Drawing
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Draw Bar Graph
  ctx.fillStyle = "orange";
  ctx.strokeStyle = "grey";
  for (let i = 0; i < myArray.length; i++) {
    ctx.fillRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
    ctx.strokeRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
  }

  // Request another Animation Frame
  requestAnimationFrame(draw);
}

// Key Events
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
  console.log(event.code);

  for (let i = 0; i < myArray.length; i++) {
    if ((event.code = "Digit1")) {
      if (myArray.includes(400)) {
        let position = myArray.indexOf(400);
        myArray.splice(position, 1);
      }
    }
  }

  for (let i = 0; i < myArray.length; i++) {
    if ((event.code = "Digit2")) {
      if (myArray.includes(200)) {
        let position = myArray.indexOf(200);
        myArray.splice(position, 1);
      }
    }
  }
}
