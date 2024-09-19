var displaybox = document.getElementById("display");
var todoinput = document.getElementById("input");

function add() {
  var inputvalue = todoinput.value;
  if (inputvalue == "") {
    alert("entter value");
    return;
  }
  var p = document.createElement("p");
  p.innerText = inputvalue;
  displaybox.appendChild(p);
}
