"use strict";

/*****************

Itsy Bitsy
Aniesha Sangarapillai

Itsy Bitsy is a kids game which mimics the Itsy Bitsy Spider rhyme. Instead, the lyrics of the rhyme are changed
and make no sense, they are silly too! The user needs to say the lyrics of the rhuyme to pass each line.
At the end of the third line, the egg will reveal a surprise!

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
let sadEgg = "/assets/images/wrong.png";
let happyEgg = "/assets/images/egg_closed.gif";

// end of game variables
let $congrats;
let $playAgain;

let dataIn;

// The page will load the data from the json file
function setup(){
  $.getJSON("data/replace.json", dataLoaded);
  $egg = $('#egg_closed');

  $congrats = $("#congrats");
  $playAgain = $("#play_again");

  $playAgain.click(restartGame);
} // end of setup


// When the user clicks on the Play Again button, the game will restart by revealing a new set of lyrics
function restartGame(){
  console.log("button clicked");
  setupGame();
} // end of restartGame


function dataLoaded(data){
  dataIn = data;
  setupGame();
} // end of dataLoaded


function setupGame(){
  // get a random element from the variable's list
  insect = getRandomElement(dataIn.insect);
  place = getRandomElement(dataIn.place);
  liquid = getRandomElement(dataIn.liquid);
  noun = getRandomElement(dataIn.noun);
  verb = getRandomElement(dataIn.verb);

  container = document.getElementById("lyrics_display");

  let lyrics_one = insect + " climbed up my " + place + "," + " Down came the " + liquid + " and clean the " +insect;
  firstLine = document.createTextNode("Itsy bitsy " +lyrics_one+" out.");
  container.appendChild(firstLine);

  let lyrics_two = noun + " and " + verb + " up all the " + liquid;
  secondLine = document.createTextNode(" Out came the " +lyrics_two+",");

  let lyrics_three =  insect + " climbed up my " + place;
  thirdLine = document.createTextNode(" And the itsy bitsy " +lyrics_three+" again.");

  surpriseEgg = getRandomElement(dataIn.surprise);

  voiceCommands(lyrics_one, lyrics_two, lyrics_three, container);

  $congrats.hide();
  $playAgain.hide();

} // end of setupGame


// Code for annyang voiceCommands: Through annyang commands, the following code will enable the user
// to move on to the next line if they say part of the lyric correctly or try again if they don;t say it correctly
function voiceCommands(lyrics_one, lyrics_two, lyrics_three, container){

  if (annyang) {

    let sayLyricsOne = {
      '*tag Down came the :liquidA and clean the :insectA out': function(tag,liquidA,insectA) {
        console.log("insect:: "+insectA);

        //'itsy bitsy :insectA climbed up my :placeA Down came the :liquidA and clean the :insectA out': function(insectA,placeA,liquidA) {
        // console.log(insect);
        // console.log(place);
        // console.log(liquid);

        if(insect.toLowerCase() === insectA.toLowerCase() || liquid.toLowerCase() === liquidA.toLowerCase()){
          $egg.attr("src", happyEgg);
          $(container).empty();
          container.appendChild(secondLine);
          console.log("line one complete");
        }

        else{
          $egg.attr("src", sadEgg);
          console.log("WRONG");
        }

      }

    }; // end of sayLyricsOne

    let sayLyricsTwo = {
      'Out came the :noun *tag': function(nounA,tag) {
        // console.log(noun);
        // console.log(verb);
        // console.log(liquid);
        if(noun.toLowerCase() === nounA.toLowerCase()){
          $egg.attr("src", happyEgg);
          $(container).empty();
          container.appendChild(thirdLine);
          console.log("line two complete");
        }

        else{
          $egg.attr("src", sadEgg);
          console.log("WRONG");
        }

      }

    }; // end of sayLyricsTwo

    let sayLyricsThree = {
      '*tag :placeA again': function(tag,placeA) {
        // console.log(insect);
        // console.log(place);
        if(place.toLowerCase() === placeA.toLowerCase()){
          $egg.attr("src", surpriseEgg);
          console.log("line three complete");
          $(container).empty();
          $congrats.show();
          $playAgain.show();
          // responsiveVoice.speak("Wonderful! Say more to see more surprises!", "UK English Female", {pitch: 1});
        }

        else{
          $egg.attr("src", sadEgg);
          console.log("WRONG");
        }
      }

    }; // end of sayLyricsThree

    console.log("annyang working");
    annyang.addCommands(sayLyricsOne);
    annyang.addCommands(sayLyricsTwo);
    annyang.addCommands(sayLyricsThree);
    annyang.start();
    annyang.debug();
  }
} // end of voiceCommands

// Get a random element from the arrays in the json file
function getRandomElement(array){
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
} // end of getRandomElement
