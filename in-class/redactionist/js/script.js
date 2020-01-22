"use strict";

/********************************************************************

Raving Redactionist
Aniesha Sangarapillai

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

$(document).ready(setup);
let $spans;

function setup() {
  setInterval(update, 500);
  $spans = $('span');
  $spans.click(spanClicked);
}

function update(){
  console.log('Update!');
  $spans.each(updateSpan);
}

function updateSpan(){
  let random = Math.random();
  console.log('Updating Span!');

if (random < 0.1) {
  $(this).removeClass('redacted');
  $(this).addClass('revealed');
  }
}

function spanClicked(){
  $(this).addClass('redacted');
  $(this).removeClass('revealed');

  console.log('Span clicked!');
}
