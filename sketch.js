// declare xPos globally with a value of 25
let xPos = 25;
function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
  
  //Set background to black
  background(0)
  //Set the color to green
  fill(0, 255, 0);
  // modify the ellipse function to take xPos as the x position. 
  ellipse(xPos, 250, 50, 50)
  //Adding the position by 3
  xPos += 3;
if(xPos > 525)
  xPos = -25;
 
}