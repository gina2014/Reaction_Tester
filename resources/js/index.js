// Variables
//var shape = document.getElementById("shape");

var dt = new Date( "December 25, 1995 23:15:20" );
console.log(dt);
var startTime = dt.getTime();
console.log(startTime);
var endTime;
var timeTaken;
var timeOut;

// Shape Variables
var shape = document.getElementById("shape");
var maxShapeWidth = document.getElementById('shape').offsetWidth;
var maxShapeHeight = document.getElementById('shape').offsetHeight;
var shapeColors = ["blue", "red", "green", "yellow", "white", "lime", "gold", "violet", "aqua", "black", "blueviolet"];
var previousColor = "red";
var currentColor = previousColor;

// Time taken to click
function addTimeTaken(time) {
  console.log("time taken: ", time);
}

// Create Shape Function
function createShape() {
  // Set Elements Attributes
  console.log("In the Create Shape Function");
  shape.style.position = 'relative';
  shape.style.display = 'block';
  randomizeShapeAppearance();
}

function randomizeShapeAppearance() {
  var shapeWidth = Math.floor((Math.random() * maxShapeWidth));

  // If shape width is too small (under 40px) then recalculate until bigger than 40px
  while (shapeWidth < 40)
  {
    var shapeWidth = Math.floor((Math.random() * maxShapeWidth));
  }

  console.log("Shape Width : ", shapeWidth);

  // Base X Position of shape in div based on Div Width and width of shape
  var maxXPosition = document.getElementById('main').offsetWidth - shapeWidth;

  // Base Y Position of shape in div based on Div Height and height of shape
  var maxYPosition = document.getElementById('main').offsetHeight - shapeWidth;

  console.log("maxXPosition : ", maxXPosition);
  console.log("maxYPosition : ", maxYPosition);

  // Get Random X and Y Positions using max X and Y Positions as a base so the shape does not go outside the containing Div
  var yPosition = getRandomXYPosition(maxYPosition);
  var xPosition = getRandomXYPosition(maxYPosition);

  // Set Positions for the shape
  shape.style.top = yPosition + 'px';
  shape.style.left = xPosition + 'px';
  shape.style.width = shapeWidth + 'px';
  shape.style.height = shapeWidth + 'px';

  // Get Random Color from array for shapeWidth
  var color = getRandomColor();

  console.log("Color is: ", color);
  //var colorString = color.toString();
  //console.log("colorString : ", colorString);
  shape.style.backgroundColor = color;
}

// onClick Function
// When shape is clicked it will disappear
shape.onclick = function() {
  shape.style.display = "none";
  endTime = new Date().getTime();
  timeTaken = endTime - startTime;
  console.log("Time take to click is:", timeTaken);
  addTimeTaken(timeTaken);
  timeOutToCreateShape();
}

function timeOutToCreateShape() {
  timeOut = setTimeout(createShape, 2000);
}

function getRandomXYPosition(seed) {
  var x = Math.floor((Math.random() * seed) + 1); // - ($('main').width() - $('shape').width());
  console.log(x);
  return x;
}

function getRandomColor() {
  var random = Math.floor((Math.random() * 10));
  console.log("Random Number is : ", random);

  var color = shapeColors[random];
  console.log("random color from array is : ", color);

  while(color == previousColor)
  {
    var random = Math.floor((Math.random() * 10));
    var color = shapeColors[random];
  }

  currentColor = color;
  previousColor = color;

  return color;
}
