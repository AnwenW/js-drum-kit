function playSound(e) {

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if(!audio) return; // stops the function from running altogether
  audio.currentTime = 0; // rewind sound to the start, when same key is hit repeatedly
  audio.play();
  key.classList.add('playing');

}

function removeTransition(e) {

  if(e.propertyName !== 'transform') return; // skip it if not a transform
  // console.log(e.propertyName);

  // console.log(this); // cheap and dirty way to find out what 'this' is!! Here, it's the key
  this.classList.remove('playing');

}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);



// Separate action on keydown for specified letters. Now I need to get translate transition working for G and another for other letters!

const drumkick = document.querySelector('.drum-kick');
const drumbeater = document.querySelector('.drum-beater');
const drumpedal = document.querySelector('.drum-pedal');

const drumtom = document.querySelector('.drum-tom');
const drumsnare = document.querySelector('.drum-snare');
const drumtom2 = document.querySelector('.drum-tom2');
const drumboom = document.querySelector('.drum-boom');
const cymbalhihat = document.querySelector('.cymbal-hihat');
const cymbalopenhat = document.querySelector('.cymbal-openhat');
const cymbalride = document.querySelector('.cymbal-ride');


window.addEventListener('keydown', function drumTranslate(e) {

   // Key G = kick drum, pedal & beater
   if (e.keyCode == 71) {

       // console.log("You pressed 'G'.");

       drumkick.classList.add('moveUp');
       drumkick.addEventListener('animationend', function() {
         drumkick.classList.remove('moveUp');
       })
       drumpedal.classList.add('pedalDown');
       drumpedal.addEventListener('animationend', function() {
         drumpedal.classList.remove('pedalDown');
       })
       drumbeater.classList.add('beaterHit');
       drumbeater.addEventListener('animationend', function() {
         drumbeater.classList.remove('beaterHit');
       })

   } else if (e.keyCode == 65) {
       console.log("You pressed A"); // hihat


   } else if (e.keyCode == 83) {
       console.log("You pressed S"); // openhat


   } else if (e.keyCode == 68) {
       console.log("You pressed D"); // snare


   } else if (e.keyCode == 70) {
       console.log("You pressed F"); // tom


   } else if (e.keyCode == 72) {
       console.log("You pressed H"); // tom2


   } else if (e.keyCode == 74) {
       console.log("You pressed J"); // ride


   } else if (e.keyCode == 75) {
       console.log("You pressed K"); //boom


   } // closes else

}) // closes window.eventListener + function drumTranslate


// Is there a way to combine all this into a shorter/ neater function??
// Same with CSS animations...



// Do I need to write a single function that calls the two keydown functions at the same time? ie:

// function drumTranslate(e) {
//    if (e.keyCode == 71) {
//        console.log("You pressed 'G'.");
//    } else {
//      if (e.keyCode == 65 || e.keyCode == 83 || e.keyCode == 68 || e.keyCode == 70 || e.keyCode == 72 || e.keyCode == 74 || e.keyCode == 75) {
//        console.log("You pressed a key not G");
//      }
//    };
// }
//
// function combineFunctions(e) {
//   playSound(e);
//   drumTranslate(e);
// };
//
// window.addEventListener('keydown', combineFunctions);
