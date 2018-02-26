// Lab 1.5 Dynamic HTML
function addName() {
  var name = document.getElementById("nameInput").value;
  var list = document.getElementById("list");
  list.innerHTML += "<br>" + name;
}


// Lab 2.5

function addName() {
  var name = document.getElementById("nameInput").value;
  var list = document.getElementById("list");
  list.innerHTML += "<br>" + name;
}




// Lab 3.1 WebSocket Chat

var connection = new WebSocket("ws://obscure-waters-98157.herokuapp.com");

// Log errors
connection.onerror = function(error) {
  console.log('WebSocket Error ' + error);
};

// Log messages from the server
connection.onmessage = function(e) {
  console.log('Server: ' + e.data);
};

function sendMessage() {
  var myform = document.getElementById("chatForm").value;
  // console.log(myform);
  connection.send(myform);
}

window.console = {
  log: function(str) {
    var node = document.createElement("div");
    node.appendChild(document.createTextNode(str));
    document.getElementById("myLog").appendChild(node);
  }
}



// Lab 3.3 Audio player
// https://stackoverflow.com/questions/27368778/how-to-toggle-audio-play-pause-with-one-button-or-link
// https://stackoverflow.com/questions/32705989/audio-range-volume-slider-javascript-html5
var audio = document.getElementById("audio");

function togglePlay() {
  return audio.paused ? audio.play() : audio.pause();
};

function setVolumeAudio() {
  audio.volume = document.getElementById("volume1").value;
}


// Lab 3.4 Video player
var video = document.getElementById("video");

function togglePlayVideo() {
  return video.paused ? video.play() : video.pause()
};

function setVolumeVideo() {
  video.volume = document.getElementById("volume2").value;
}


// Lab 4.1
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
  ctx.closePath();
}

function draw(e) {
  if (e.buttons !== 1) return
    ctx.lineTo(pos.x, pos.y);
  getCoords(e);
  ctx.stroke();
}




// Lab 5.2
$(function() {
  $("#AddName").click(function(){
    $('#list_space').append("<br>" + $('#name_to_add').val());
  });
});





// Lab 5.3
function jsonCallback(json) {
  $.each(json, function(index, value) {
    console.log(value.name, value.email);
    document.getElementById("jsonContent").innerHTML +=
    "<a href='mailto:" + value.email + "'>" + value.name + "</a>" + "<br>";
  });
}

function parseJson() {
  $.ajax({
    url: "https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp",
    dataType: "jsonp",
  });
}


// Lab 6.0
$("#search").click(function() {
  document.getElementById("flickrResults").innerHTML = "";
  $("#results").empty();
  $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
    tags: $("#flickrSearch").val(),
    tagmode: "any",
    format: "json"
  },
  function(data) {
    $.each(data.items, function(i, item) {
      $("<img>").attr("src", item.media.m).appendTo("#flickrResults");
      if (i == 30) return false;
    });
  });
});