
// Assuming you have an HTML element with the id "display" representing the input/display area
var display = document.getElementById("display");


 // This function is for increasing the value
function solve(number) {  

  display.value += number;
}

// for deteleing value one by one 
function detele(){
    display.value =  display.value.toString().slice(0, -1);
}

// This function is to erase anything in my this display
function empty(){
  display.value = "";
}