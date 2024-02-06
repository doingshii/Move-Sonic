let timeout;

window.addEventListener("keydown", checkKeyPressed, false);
window.addEventListener("keydown", checkKeyPressed, false);
window.addEventListener("keydown", checkKeyPressed, false);
window.addEventListener("keydown", checkKeyPressed, false);

window.addEventListener("keyup", release, false);


function checkKeyPressed(evt) {
  if(evt.keyCode == "38"){
    document.getElementById("sonic").src="sonic/sonic_up.jpg"
  myFunction()}
  else if(evt.keyCode == "40")
  {
  document.getElementById("sonic").src="sonic/sonic_down.jpg"

  }
}

function release(evt)
  {
    if(evt.keyCode=="40")
  document.getElementById("sonic").src="sonic/sonic_reg.jpg"
  }

function myFunction() {
  timeout = setTimeout(next, 500);
}

function next()
{
  document.getElementById("sonic").src="sonic/sonic_reg.jpg"
}