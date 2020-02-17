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
  voiceCommands();
} // end of setup

function dataLoaded(data) {
  // defined variables for words to replace in lyrics
  let insect = getRandomElement(data.insect);
  let place = getRandomElement(data.place);
  let liquid = getRandomElement(data.liquid);
  let noun = getRandomElement(data.noun);
  let verb = getRandomElement(data.verb);
  let container = document.getElementById("lyrics_display");
  let lyrics = document.createTextNode("Itsy-bitsy " + insect + " climbed up " + place + "," + " Down came the " + liquid + " and washed the " +
              insect + " Out" + "," + " Out came the " + noun + " and " + verb + " up all the " + liquid + "," + " And the itsy-bitsy " + insect + " climbed up " + place + " again.");

  container.appendChild(lyrics);

  console.log(insect);
  console.log(place);
  console.log(liquid);
  console.log(noun);
  console.log(verb);
  console.log(lyrics);
  console.log(container);

} // end of dataLoaded

function voiceCommands(){
  if (annyang) {

    console.log("annyang working");
    // annyang.addCommands(guess);
    annyang.start();
    }
} // end of voiceCommands

// Get a random element from the array
function getRandomElement(array){
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
 }
