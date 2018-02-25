// Lab 1.5 Dynamic HTML
function addName() {
  var name = document.getElementById("nameInput").value;
  var list = document.getElementById("list");
  list.innerHTML += "<br>" + name;
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


var video = document.getElementById("video");

function togglePlayVideo() {
  return video.paused ? video.play() : video.pause()
};

function setVolumeVideo() {
  video.volume = document.getElementById("volume2").value;
}










