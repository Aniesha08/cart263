"use strict";

/********************************************************************

Raving Redactionist
Aniesha Sangarapillai

*********************************************************************/

$(document).ready(setup);
let $spans;
let $secretsFound = 0;
let $secretsTotal;

function setup() {
  setInterval(update, 500);
  $spans = $('span');

  //calculate total number of secrets
   $secretsTotal = $('.secret').length;

  //display the total secrets
  $( "#total" ).text($secretsTotal);
  console.log($secretsTotal);

  // mouseover event handler for all secrets
  $('.secret').on( "mouseover", overSecret);

  $spans.click(spanClicked);
}

function update(){
//  console.log('Update!');
  $spans.each(updateSpan);
}

function updateSpan(){
  let random = Math.random();
//  console.log('Updating Span!');

if (random < 0.1) {
  $(this).removeClass('redacted');
  $(this).addClass('revealed');
  }
}

function spanClicked(){
  $(this).addClass('redacted');
  $(this).removeClass('revealed');

//  console.log('Span clicked!');
}

function overSecret(){
  //apply the css style to the secrets found on mouseover
  $(this).addClass("found");
  $(this).off("mouseover");
//  console.log($secretsFound);
  $secretsFound++;
  $("#found").text($secretsFound);
}
