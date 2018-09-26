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

// window.addEventListener('keydown', function drumTranslate(e) {
function drumTranslate(e) {

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

   if (e.keyCode == 71) {

     // console.log("You pressed G"); // kick

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

       // console.log("You pressed A"); // hihat

       cymbalhihat.classList.add('moveDown');
       cymbalhihat.addEventListener('animationend', function() {
         cymbalhihat.classList.remove('moveDown');
       })

     } else if (e.keyCode == 83) {

         // console.log("You pressed S"); // openhat

         cymbalopenhat.classList.add('moveDown');
         cymbalopenhat.addEventListener('animationend', function() {
           cymbalopenhat.classList.remove('moveDown');
         })

       } else if (e.keyCode == 68) {

           // console.log("You pressed D"); // snare

           drumsnare.classList.add('moveDown');
           drumsnare.addEventListener('animationend', function() {
             drumsnare.classList.remove('moveDown');
           })


         } else if (e.keyCode == 70) {

             // console.log("You pressed F"); // tom

             drumtom.classList.add('moveDown');
             drumtom.addEventListener('animationend', function() {
               drumtom.classList.remove('moveDown');
             })


           } else if (e.keyCode == 72) {

               // console.log("You pressed H"); // tom2

               drumtom2.classList.add('moveDown');
               drumtom2.addEventListener('animationend', function() {
                 drumtom2.classList.remove('moveDown');
               })


             } else if (e.keyCode == 74) {

                 // console.log("You pressed J"); // ride

                 cymbalride.classList.add('moveDown');
                 cymbalride.addEventListener('animationend', function() {
                   cymbalride.classList.remove('moveDown');
                 })


               } else if (e.keyCode == 75) {

                   // console.log("You pressed K"); //boom

                   drumboom.classList.add('moveDown');
                   drumboom.addEventListener('animationend', function() {
                     drumboom.classList.remove('moveDown');
                   })

                 } // closes final else if

} // closes function drumTranslate
// }) // closes window.eventListener / function drumTranslate (has extra bracket)

function combineFunctions(e) {
  playSound(e);
  drumTranslate(e);
};

window.addEventListener('keydown', combineFunctions);



// Is there a way to combine all this into a shorter/ neater function??
// Same with CSS animations...



// Is it best to write a single function combineFunctions that calls the two keydown functions at the same time?? Or is this an unnecessary extra step?


// To test keyCodes are wired up, with multiple conditions in one if statement (do not forget brackets around the if || conditions!)

// function drumTranslate(e) {
//    if (e.keyCode == 71) {
//        console.log("You pressed 'G'.");
//    } else {
//      if (e.keyCode == 65 || e.keyCode == 83 || e.keyCode == 68 || e.keyCode == 70 || e.keyCode == 72 || e.keyCode == 74 || e.keyCode == 75) {
//        console.log("You pressed a key not G");
//      }
//    };
// }
