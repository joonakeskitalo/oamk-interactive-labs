

// Lab 1.5 Dynamic HTML
  function addName() {

    var name = document.getElementById("nameInput").value;

    var list = document.getElementById("list");
    list.innerHTML += "<br>" + name;
  }