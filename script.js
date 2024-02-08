let timeout;
//controlls sonic's movement
window.addEventListener("keydown", checkKeyPressed, false);
window.addEventListener("keyup", release, false);

let times = 0;


function checkKeyPressed(evt) {
  let help = document.getElementById("help");
  help.style.visibility="hidden";
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
  }
  else if(evt.keyCode == "39")//right
  {
document.getElementById("sonic").src="sonic/sonic_right.jpg"
  }

  
}

//can hold down these buttons only (not up)
function release(evt)
  {
    if(evt.keyCode=="40" || evt.keyCode=="37" || evt.keyCode=="39"){

  document.getElementById("sonic").src="sonic/sonic_reg.jpg"

    }
  }


function myFunction() {
  timeout = setTimeout(next, 500);
}

//reset
function next()
{
  document.getElementById("sonic").src="sonic/sonic_reg.jpg"
}

//sonic falling 
function fall() {
  timeout = setTimeout(falldown, 400);
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


//chaning background image
let clicked = 0;

function my()
{
  /*let colorChange = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
  
document.body.style.backgroundImage = "linear-gradient(" + colorChange + ", " + colorChange + ", " + colorChange + ")";
  clicked++;
  console.log("button was clicked " +clicked+" times")*/

const colormix =["red", "blue", "white", "black", "yellow", "chartreuse", "orange", "DarkOrchid", "pink", "DarkTurquoise", "DeepSkyBlue","DodgerBlue","DeepPink","HotPink","LightCoral","LimeGreen","Moccasin","PapayaWhip","DarkBlue","DarkGrey","Gray","Maroon"];

let thing = "linear-gradient(" + colormix[Math.floor(Math.random() * colormix.length)]+ "," + colormix[Math.floor(Math.random() * colormix.length)] + "," + colormix[Math.floor(Math.random() * colormix.length)] + ")";

document.body.style.backgroundImage = thing;
  console.log(thing);
  
} 

let radius = 0;

//changing border radius
function border()
{
  radius+=10;
  console.log(radius)
  if(radius>150)
  {
    radius=0;
  }
  let border = document.getElementById("sonic");
  border.style.borderRadius = radius + "px";
}

let showing = true;
//function hide buttons
function hide()
{
  let butt = document.getElementById("borderRad");
  let but = document.getElementById("change");
  let bu = document.getElementById("cust");
  if(showing)
  {
  butt.style.visibility = "hidden";
  but.style.visibility = "hidden";
  bu.style.visibility = "hidden";
  /*let butt = document.getElementsByClassName("press");
  butt.style.visibility = "hidden";*/
  document.getElementById("hide").innerHTML="Show Buttons";
    showing=false;
  }
  else
  {
    butt.style.visibility = "visible";
    but.style.visibility = "visible";
    bu.style.visibility = "visible";
    document.getElementById("hide").innerHTML="Hide Buttons";
    showing=true;
  }
}

//allows custom colors
function custom()
{
  let d = confirm("Only use the colors shown in the color box. If you use a color that is not in the box, the background will not change.\n Press cancel if you need to see the color box");
  if(d==true)
  {
    let color1 = prompt("Enter the top color");
    let color2 = prompt("Enter the middle color");
    let color3 = prompt("Enter the bottom color");
  document.body.style.backgroundImage = "linear-gradient(" + color1 + ", " + color2 + ", " + color3 + ")";
  }
}



