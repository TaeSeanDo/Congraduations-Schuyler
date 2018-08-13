var noiseMakerAudio = new Audio("party.wav");
var msg1 = new SpeechSynthesisUtterance("Let me show you how you're wrong");
var msg2 = new SpeechSynthesisUtterance("Ostensibly correct. The best kind of correct");
// alert("asdf");
function celebrationNoise() {
  var randNum = Math.floor(Math.random() * 3);
  // alert(randNum);
  switch (randNum) {
    case 0:
      noiseMakerAudio.play();
      break;
    case 1:
      window.speechSynthesis.speak(msg1);
      break;
    case 2:
      window.speechSynthesis.speak(msg2);
      break;
    default:
      alert("Something's wrong.")
  }
}

// var shimmer = require("shimmer");
var colors = ["lightsalmon", "coral", "lemonchiffon", "palegreen", "lightblue", "plum"]//[[255, 0, 0], [255, 165, 0], [255, 255, 0],
    //[0, 128, 0], [0, 0, 255], [75, 0, 130], [238, 130, 238]];
var index;
function changeColor() {
  if (index == null || index >= colors.length - 1) {
    index = 0;
  } else {
    index++;
  }
  document.body.style.backgroundColor = colors[index];
  // rgba(colors[index][0], colors[index][1], colors[index][2], 0.5);
}
// alert("hello");
// changeColor();
setInterval(changeColor, 500);
