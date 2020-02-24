"use strict";

/*****************

Something is Wrong on the Internet
Aniesha Sangarapillai

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

$(document).ready(setup);

let insect;
let place;
let liquid;
let noun;
let verb;
let container;
let lyrics;
let surpriseEgg;
let $egg;

// let $eggOpen;
//let egg = document.getElementById("egg");

function setup(){
  $.getJSON("data/replace.json", dataLoaded);
  voiceCommands();
  $egg = $('#egg_closed');

  //egg.style.background = "red";
} // end of setup

function dataLoaded(data) {
  // defined variables for words to replace in lyrics
  insect = getRandomElement(data.insect);
  place = getRandomElement(data.place);
  liquid = getRandomElement(data.liquid);
  noun = getRandomElement(data.noun);
  verb = getRandomElement(data.verb);
  container = document.getElementById("lyrics_display");
  lyrics = document.createTextNode("Itsy-bitsy " + insect + " climbed up " + place + "," + " Down came the " + liquid + " and washed the " +
  insect + " Out" + "," + " Out came the " + noun + " and " + verb + " up all the " + liquid + "," + " And the itsy-bitsy " + insect + " climbed up " + place + " again.");

  container.appendChild(lyrics);

  surpriseEgg = getRandomElement(data.surprise);
  console.log(surpriseEgg);

  /*  console.log(insect);
  console.log(place);
  console.log(liquid);
  console.log(noun);
  console.log(verb);
  console.log(lyrics);
  console.log("surpriseEgg");*/

} // end of dataLoaded

function voiceCommands(){

  if (annyang) {
    // let egg = document.getElementById("egg");

    let sayLyrics = {
      '*lyrics': function() {
        //'*insect':function(){
        console.log(insect);
        $egg.attr("src", surpriseEgg);
        console.log("saying lyrics");
      }

    }; // end of repeat

    console.log("annyang working");
    annyang.addCommands(sayLyrics);
    annyang.start();
  }
} // end of voiceCommands

// Get a random element from the array
function getRandomElement(array){
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
}
