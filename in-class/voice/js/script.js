"use strict";

/********************************************************************

Voices
Aniesha Sangarapillai

*********************************************************************/

$(document).ready(setup);

function setup() {
  $(document).on('click', talk);
}

function talk(){
  responsiveVoice.speak("Hello world", "UK English Male", {
    pitch: 0.001,
    rate: 2,
    volume: 1
  });
}

// let speech = ["Make", "America", "Great", "Again"]
// let
//
// $(document).ready(setup);
//
// function setup() {
//   responsiveVoice.speak("Hello world", "UK English Male", {
//     onstart: showSpeaking,
//     onend: hideSpeaking
//   });
// }
// function showSpeaking() {
//   $('body').css('background-color', 'green');
// }
// function hideSpeaking() {
//   $('body').css('background-color', 'white');
// }
