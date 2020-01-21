"use strict";

/********************************************************************

Raving Redactionist
Aniesha Sangarapillai

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

$(document).ready(setup);

function setup() {
  setInterval(update, 500);
}


function update(){
  console.log('Update!');
  $('span').each(updateSpan);
}

function updateSpan(){
  let random = Math.random();
  console.log('Updating Span!');
  console.log('random');

if (random < 0.1) {
  $(this).removeClass('redacted');
  $(this).addClass('revealed');
  }
}
