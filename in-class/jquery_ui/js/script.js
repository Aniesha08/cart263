"use strict";

/********************************************************************

Jquery UI
Aniesha Sangarapillai

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

$(document).ready(setup);

// function setup() {
//   $('.square').draggable({
//   axis: 'x'
//   });
// }

// Draggable only once
// function setup() {
//   $('.square').draggable({
//     stop: function () {
//       $(this).draggable('disable');
//     }
//   });
// }

// function setup() {
//   const ANIMATION_TIME = 5000;
//   $('.square').animate({
//     backgroundColor: 'green',
//     width: '500px',
//     height: '500px',
//     borderRadius: '10%'
//   }, {
//     duration: ANIMATION_TIME,
//   });
// }

function setup() {
  $('#question').dialog({
  buttons: {
    "Red": makeItRed,
    "Green": makeItGreen
  }
});
}

function makeItRed(){
  $('body').css('backgroundColor', 'red');
}

function makeItGreen(){
   $('body').css('backgroundColor', 'green');
}
