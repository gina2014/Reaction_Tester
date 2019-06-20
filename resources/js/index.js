// Variables
//var shape = document.getElementById("shape");
var shape = document.createElement("div");
var shapeVisible = false;
var xPosition = getRandomNumber();
var yPosition = getRandomNumber();
createShape();
// Random position, random colour and random shape(square/circle)


// Functions

// Create Shape Functions
function createShape() {
  //  var shape = document.createElement("div");

  // Set Elements Attributes
  shape.setAttribute("id", "shape");

  shape.style.top = xPosition + 'px';
  console.log("xPosition :", xPosition);
  shape.style.left = yPosition + 'px';
  console.log("yPosition :", yPosition);
  // Add element to the main Div
  var element = document.getElementById("main");
  element.appendChild(shape);
  console.log("in the createShape function");
}

// onClick Function
// When shape is clicked it will disappear
shape.onclick = function() {
  shape.style.display = "none";
  shapeVisible = false;
}

function getRandomNumber() {
  var x = Math.floor((Math.random() * 1000) + 1);
  console.log(x);
  return x;
}
