window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {
    if (evt.keyCode == "38") {
        alert("You pressed 'up'.");
    }
}