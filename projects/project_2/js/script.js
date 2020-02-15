"use strict";

/*****************

Something is Wrong on the Internet
Aniesha Sangarapillai

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

$(document).ready(setup);

function setup(){
  $.getJSON("data/replace.json", dataLoaded);
} // end of setup

function dataLoaded(data) {
  // defined variables for words to replace in lyrics
  let insect = data.insect;
  let place = data.place;
  let liquid = data.liquid;
  let noun = data.noun;
  let verb = data.verb;

  console.log(insect);
  console.log(place);
  console.log(liquid);
  console.log(noun);
  console.log(verb);
} // end of dataLoaded
