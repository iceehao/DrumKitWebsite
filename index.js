//detecting button pressed?
var numberOfButtons = document.querySelectorAll(".drum").length; // gets a number 1-7

for (i = 0; i < numberOfButtons; i++) { // for loop to use the true value to add an event listener (click and mouse )
  document.querySelectorAll(".drum")[i].addEventListener("click", function() { // we select all buttons with the id button to add an eventlistener whenever its clicked as the INPUT and then the second
    // second input is the functoin which is the switch statement that gets produced as the output ( OUTPUT)

    var buttonInnerHTML = this.innerHTML; // identity or identifier which button got clicked with the mouse.
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML); // same input but to different function

  });

} // DETECTS key board presses      //this function should = whatever pressed?
document.addEventListener("keydown", function(event) { // add an event listener to the entire document using the keydown (keyboard inputs)
//uses "Keydown " to detect the button pressed which is W
//Then we take "w" to a function
  makeSound(event.key); // w.key = key which represents "w" and then goes into the main function

buttonAnimation(event.key); // same input but different function " pressed w"

});

function makeSound(key) {
  switch (key) { // when clicked first , it identifies which button got clicked then plays the proper sound that is equal to it already
    case "w":

      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentkey){ // new function to remove and add the shadow whenver ever pressed
  var activeButton=document.querySelector("."+currentkey) // .whateverletter and created new variable to store the selector which are the keys 
  activeButton.classList.add("pressed");// use the classlist and add method to add the css " pressed"

  setTimeout(function(){ // function to timeout except in reverse
    activeButton.classList.remove("pressed");
  },100 );
}


//var audio = new Audio("sounds/tom-1.mp3");
//audio.play();
