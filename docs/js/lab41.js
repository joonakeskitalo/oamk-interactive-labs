var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
var pos = { x: 0, y: 0 };
canvas.addEventListener('mousedown', setStart);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', setEnd);

function getCoords(e) {
    var rect = canvas.getBoundingClientRect();
    pos.x = e.clientX - rect.left;
    pos.y = e.clientY - rect.top;
}

function setStart(e) {
    getCoords(e);
    ctx.moveTo(pos.x, pos.y);
    ctx.beginPath();
}

function setEnd(e) {
    // ctx.stroke();
    ctx.closePath();
}

function draw(e) {
    if (e.buttons !== 1) return
    ctx.lineTo(pos.x, pos.y);
    getCoords(e);
    ctx.stroke();
}