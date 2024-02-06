let timeout;

window.addEventListener("keydown", checkKeyPressed, false);
window.addEventListener("keydown", checkKeyPressed, false);
window.addEventListener("keydown", checkKeyPressed, false);
window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {
  if(evt.keyCode == "38"){
    document.getElementById("sonic").src="sonic/sonic_up.jpg"
  myFunction()}
  
  
}



function myFunction() {
  timeout = setTimeout(next, 500);
}

function next()
{
  document.getElementById("sonic").src="sonic/sonic_reg.jpg"
}