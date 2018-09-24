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

// window.addEventListener('keydown', playSound);



// Separate action on keydown for specified letters. Now I need to get translate transition working for G and another for other letters!

// window.addEventListener('keydown', function drumTranslate(e) {
//    if (e.keyCode == 71) {
//        console.log("You pressed 'G'.");
//    } else {
//      if (e.keyCode == 65 || e.keyCode == 83 || e.keyCode == 68 || e.keyCode == 70 || e.keyCode == 72 || e.keyCode == 74 || e.keyCode == 75) {
//        console.log("You pressed a key not G");
//      }
//    };
// })


// Do I need to write a single function that calls the two keydown functions at the same time? ie:

function drumTranslate(e) {
   if (e.keyCode == 71) {
       console.log("You pressed 'G'.");
   } else {
     if (e.keyCode == 65 || e.keyCode == 83 || e.keyCode == 68 || e.keyCode == 70 || e.keyCode == 72 || e.keyCode == 74 || e.keyCode == 75) {
       console.log("You pressed a key not G");
     }
   };
}

function combineFunctions(e) {
  playSound(e);
  drumTranslate(e);
};

window.addEventListener('keydown', combineFunctions);
