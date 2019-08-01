// Variables
var startTime = new Date().getTime();
//console.log(startTime);
var endTime;
var timeTaken;
var timeOut;

// Shape Variables
var shape = document.getElementById("shape");
var maxShapeWidth = document.getElementById('shape').offsetWidth;
var maxShapeHeight = document.getElementById('shape').offsetHeight;
var shapeColors = ["aquamarine", "crimson", "deeppink", "yellow", "aliceblue", "lime", "coral", "violet", "aqua", "pink", "blueviolet"];
var previousColor = "red";
var shapeTypes = ["square", "circle"];

// Add time taken to click to web page display
function addTimeTaken(time) {
  //console.log("time taken: ", time);
  document.getElementById("timeTaken").innerHTML = time + "s";
}

// Create Shape Function
function createShape() {
  // Set Elements Attributes
  //console.log("In the Create Shape Function");
  
  shape.style.position = 'relative';
  shape.style.display = 'block';
  randomizeShapeAppearance();
  startTime = new Date().getTime();
}

// Randomize the shape appearance
function randomizeShapeAppearance() {
  //Shape width
  var shapeWidth = Math.floor((Math.random() * maxShapeWidth));

  // If shape width is too small (under 40px) then recalculate until bigger than 40px
  while (shapeWidth < 40)
  {
    var shapeWidth = Math.floor((Math.random() * maxShapeWidth));
  }

  //console.log("Shape Width : ", shapeWidth);

  // Base X Position of shape in div based on Div Width and width of shape
  var maxXPosition = document.getElementById('main').offsetWidth - shapeWidth;

  // Base Y Position of shape in div based on Div Height and height of shape
  var maxYPosition = document.getElementById('main').offsetHeight - shapeWidth;

  //console.log("maxXPosition : ", maxXPosition);
  //console.log("maxYPosition : ", maxYPosition);

  // Get Random X and Y Positions using max X and Y Positions as a base so the shape does not go outside the containing Div
  var yPosition = getRandomXYPosition(maxYPosition);
  var xPosition = getRandomXYPosition(maxXPosition);

  // Set Positions for the shape
  shape.style.top = yPosition + 'px';
  shape.style.left = xPosition + 'px';
  shape.style.width = shapeWidth + 'px';
  shape.style.height = shapeWidth + 'px';

  // Get Random Color from array for shapeWidth
  var color = getRandomColor();

  //console.log("Color is: ", color);

  // set shape color
  shape.style.backgroundColor = color;

  // select random shape (currently square or circle)
  var shapeType = randomShapeType();

  // Set the border radius for type of shape
  if(shapeType == "square") {
    shape.style.borderRadius = "0";
  }
  else {
    shape.style.borderRadius = "50%";
  }
}

// onClick Function
// When shape is clicked it will disappear
shape.onclick = function() {
  shape.style.display = "none";

  // get time shape is clicked
  endTime = new Date().getTime();

  // To get time taken for shape to be clicked minus endTime from StartTime
  timeTaken = (endTime - startTime) / 1000;

  //console.log("Time taken to click is:", timeTaken);

  addTimeTaken(timeTaken);

  timeOutToCreateShape();
}

// random time to wait before creating next shape
function timeOutToCreateShape() {
  timeOut = setTimeout(createShape, Math.random() * 2000);
}

// Random X or Y Position for shape positioning
function getRandomXYPosition(seed) {
  var x = Math.floor((Math.random() * seed) + 1); // - ($('main').width() - $('shape').width());
  //console.log(x);
  return x;
}

// Select random color from color array
function getRandomColor() {
  var random = Math.floor((Math.random() * 10));
  //console.log("Random Number is : ", random);

  var color = shapeColors[random];
  //console.log("random color from array is : ", color);

  while(color == previousColor)
  {
    var random = Math.floor((Math.random() * 10));
    var color = shapeColors[random];
  }

  previousColor = color;

  return color;
}

// Get Random Shape type from shape array
function randomShapeType() {
  var random = Math.floor((Math.random() * 2));
  //console.log("Random Shape number:", random);

  var shapeType = shapeTypes[random];
  //console.log("Shape Type is :", shapeType);

  return shapeType;
}
