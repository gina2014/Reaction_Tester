// Variables
//var shape = document.getElementById("shape");

var dt = new Date( "December 25, 1995 23:15:20" );
console.log(dt);
var startTime = dt.getTime();
console.log(startTime);
var endTime;
var timeTaken;
var shape = document.getElementById("shape");
var timeOut;

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
  var shapeWidth = document.getElementById('shape').offsetWidth;
  var shapeHeight = document.getElementById('shape').offsetHeight;
  console.log("Shape Width : ", shapeWidth);
  console.log("Shape Height : ", shapeHeight);
  var yPosition = getRandomXYPosition(550);
  var xPosition = getRandomXYPosition(950);
  shape.style.top = yPosition + 'px';
  shape.style.left = xPosition + 'px';
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
