let timeout;

window.addEventListener("keydown", checkKeyPressed, false);
window.addEventListener("keydown", checkKeyPressed, false);
window.addEventListener("keydown", checkKeyPressed, false);
window.addEventListener("keydown", checkKeyPressed, false);

window.addEventListener("keyup", release, false);

let times = 0;


function checkKeyPressed(evt) {
  if(evt.keyCode == "38")//jump
  {
    document.getElementById("sonic").src="sonic/sonic_up.jpg"
    times++;
    console.log(times);
    if(times>5)
    {
      fall();
    }
    else{
  myFunction()
    }
  }
  else if(evt.keyCode == "40")//down
  {
  document.getElementById("sonic").src="sonic/sonic_down.jpg"
  }
  else if(evt.keyCode == "37")//left 
  {
  document.getElementById("sonic").src="sonic/sonic_left.jpg"
   times++;
    console.log(times);
   
  }
  else if(evt.keyCode == "39")//right
  {
document.getElementById("sonic").src="sonic/sonic_right.jpg"
    times++;
    console.log(times);
    
  }

  
}

function release(evt)
  {
    if(evt.keyCode=="40" || evt.keyCode=="37" || evt.keyCode=="39"){
      if(times>5)
      {
        fall();
      }
      else
      {
  document.getElementById("sonic").src="sonic/sonic_reg.jpg"
      }
    }
  }

function myFunction() {
  timeout = setTimeout(next, 500);
}

function next()
{
  document.getElementById("sonic").src="sonic/sonic_reg.jpg"
}


function fall() {
  timeout = setTimeout(falldown, 500);
  times=0;
}

function falldown()
{
  document.getElementById("sonic").src="sonic/sonic_fall.jpg"
  timeout = setTimeout(floor, 400);
}

function floor()
{
  document.getElementById("sonic").src="sonic/sonic_land.jpg"
}


