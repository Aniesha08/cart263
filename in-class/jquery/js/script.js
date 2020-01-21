"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

$(document).ready(setup);
function setup() {
//  let $divs = $('div');
//  $divs.hide();
//  $divs.fadeIn(2000);
//$('div').hide().fadeIn(2000);

$('div').css({
  color: 'red',
  backgroundColor: 'green',
  fontSize: '2em',
  //transform: 'rotate(45deg)'
});

// $('div').slideToggle(5000, slideToggleCompleted);

// $('div').on('click',divClicked);

$('div').click(divClicked); // Add a click listener to ever div
}

// function slideToggleCompleted(){
// $('div').fadeIn(2000);
// }

function divClicked() {
  $(this).fadeOut(); // Tell the div cliked to fade out
}
