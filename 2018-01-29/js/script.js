// var canvas = document.getElementById("drawCanvas");
// var drawingContext = canvas.getContext("2d");
// drawingContext.rect(60,60,30,30);
// drawingContext.stroke();
function canvasClicked(event) {
  var canvas = document.getElementById("drawCanvas");
  var context = canvas.getContext("2d");
  context.lineWidth = 4;
  context.strokeStyle = "rgb(200,0,0)";
  context.rect(event.offsetX, event.offsetY, 50, 50);
  context.stroke();
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function drawSomething() {
  var canvas = document.getElementById("drawCanvas");
  var context = canvas.getContext("2d");
  context.beginPath();
  var x = getRandomNumber(300);
  var y = getRandomNumber(300);
  var size = getRandomNumber(60);
  context.rect(x, y, size, size);
  context.stroke();
  context.closePath();
}


// Lab 4 part 1 - Drawing application with lines
function drawLine() {
  var canvas = document.getElementById("drawCanvas");
  var context = canvas.getContext("2d");


  canvas.addEventListener('mousemove', onMouseMove, false);
  canvas.addEventListener('click', onClick, false);



  // var start = event.offsetX, event.offsetY;
  // var startY =
  // var end = event.offsetX, event.offsetY;

}











function start() {
  window.setInterval(drawSomething, 300);
}