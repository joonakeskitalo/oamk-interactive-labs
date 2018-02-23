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
