"use strict";

/*****************

Something is Wrong on the Internet
Aniesha Sangarapillai

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

$(document).ready(setup);

// GLOBAL VARIABLES
// lyrics variables
let insect;
let place;
let liquid;
let noun;
let verb;
let container;
let lyrics;
let firstLine;
let secondLine;
let thirdLine;

// surprise egg variables
let surpriseEgg;
let $egg;

function setup(){
  $.getJSON("data/replace.json", dataLoaded);
  $egg = $('#egg_closed');
} // end of setup

function dataLoaded(data){
  // defined variables for words to replace in lyrics
  insect = getRandomElement(data.insect);
  place = getRandomElement(data.place);
  liquid = getRandomElement(data.liquid);
  noun = getRandomElement(data.noun);
  verb = getRandomElement(data.verb);

  container = document.getElementById("lyrics_display");

  let lyrics_one = insect + " climbed up my " + place + "," + " Down came the " + liquid + " and washed the " +insect;
  firstLine = document.createTextNode("Itsy bitsy " +lyrics_one+" out.");
  container.appendChild(firstLine);

  let lyrics_two = noun + " and " + verb + " up all the " + liquid;
  secondLine = document.createTextNode(" Out came the " +lyrics_two+",");

  let lyrics_three =  insect + " climbed up my " + place;
  thirdLine = document.createTextNode(" And the itsy bitsy " +lyrics_three+" again.");

  surpriseEgg = getRandomElement(data.surprise);
  // console.log(surpriseEgg);

  voiceCommands(lyrics_one, lyrics_two, lyrics_three, container);

} // end of dataLoaded

function voiceCommands(lyrics_one, lyrics_two, lyrics_three, container){

  if (annyang) {

    let sayLyricsOne = {
      'itsy bitsy :insectA climbed up my :place Down came the :liquid and washed the :insectA out': function(insectA,place,liquid) {
        // console.log(insect);
        // console.log(place);
        // console.log(liquid);

        console.log("line one complete");
      }

    }; // end of sayLyricsOne

    let sayLyricsTwo = {
      'Out came the :noun and :verb up all the :liquid': function(noun,verb,liquid) {
        // console.log(noun);
        // console.log(verb);
        // console.log(liquid);

        console.log("line two complete");
      }

    }; // end of sayLyricsTwo

    let sayLyricsThree = {
      'And the itsy bitsy :insect climbed up my :place again': function(insect,place) {
        // console.log(insect);
        // console.log(place);
        console.log("line three complete");
        $egg.attr("src", surpriseEgg);
        //  console.log("saying lyrics");
        // responsiveVoice.speak("Wonderful! Say more to see more surprises!", "UK English Female", {pitch: 1});
      }

    }; // end of sayLyricsThree

    console.log("annyang working");
    annyang.addCommands(sayLyricsOne);
    annyang.addCommands(sayLyricsTwo);
    annyang.addCommands(sayLyricsThree);
    annyang.start();
  }
} // end of voiceCommands

// Get a random element from the array
function getRandomElement(array){
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
}
