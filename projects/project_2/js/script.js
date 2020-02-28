"use strict";

/*****************

Itsy Bitsy
Aniesha Sangarapillai

Itsy Bitsy is a kids game which mimics the Itsy Bitsy Spider rhyme. Instead, the lyrics of the rhyme are changed
and make no sense by generating random words to replace the words from the original rhyme. The lyrics become creepy and silly too!
The user needs to say the lyrics of the rhuyme to pass each line. At the end of the third line, the egg will reveal a surprise!

******************/

$(document).ready(setup);

// GLOBAL VARIABLES
// lyrics variables
let dataIn;
let insect;
let place;
let liquid;
let noun;
let verb;
let container;
let $lyrics;
let firstLine;
let secondLine;
let thirdLine;

// egg variables
let $egg;
let jumpingEgg = "https://aniesha08.github.io/cart263/projects/project_2/assets/images/egg_jumping.gif";
let happyEgg = "https://aniesha08.github.io/cart263/projects/project_2/assets/images/egg_closed.gif";
let sadEgg = "https://aniesha08.github.io/cart263/projects/project_2/assets/images/wrong.png";
let surpriseEgg;

// game start and end variables
let $title;
let $message;
let $startPlay;
let $playAgain;

// General setup code for loading data and images
function setup(){
  $.getJSON("data/replace.json", dataLoaded);
  $egg = $('#egg_closed');
  $egg.attr("src", jumpingEgg);

  $title = $("#title");
  $message = $("#message");

  $startPlay = $("#start_play");
  $startPlay.click(startGame);

  $playAgain = $("#play_again");
  $playAgain.hide();
  $playAgain.click(restartGame);
} // end of setup

// When the user clicks on the "Let's Play!" button, the user will be directed the the lyrics page
function startGame(){
  setupGame();
} // end of startGame

// When the user clicks on the "Play Again" button, the game will restart by revealing a new set of lyrics
function restartGame(){
  console.log("button clicked");
  setupGame();
} // end of restartGame


function dataLoaded(data){
  dataIn = data;
  $lyrics = $('#lyrics');
  $lyrics.css("background-color", "#00BCD4;");
} // end of dataLoaded

// The following function takes the data from the json file and using it, we create the lyrics string for each line
function setupGame(){
  $egg.attr("src", happyEgg);
  $lyrics.css("background-color", "#72cc5c;");

  // get a random word from each list of the json object category
  insect = getRandomElement(dataIn.insect);
  place = getRandomElement(dataIn.place);
  liquid = getRandomElement(dataIn.liquid);
  noun = getRandomElement(dataIn.noun);
  verb = getRandomElement(dataIn.verb);

  // get a random surprise from the surprise object stored in the json file
  surpriseEgg = getRandomElement(dataIn.surprise);

  // the lyrics will be appended to the lyrics display container
  container = document.getElementById("lyrics_display");

  // the lyrics are divided into three strings (three parts)
  let lyrics_one = insect + " climbed up my " + place + "," + " Down came the " + liquid + " and clean the " +insect;
  firstLine = document.createTextNode("Itsy bitsy " +lyrics_one+" out.");
  container.appendChild(firstLine);

  let lyrics_two = noun + " and " + verb + " up all the " + liquid;
  secondLine = document.createTextNode(" Out came the " +lyrics_two+",");

  let lyrics_three =  insect + " climbed up my " + place;
  thirdLine = document.createTextNode(" And the itsy bitsy " +lyrics_three+" again.");

  // Use the three strings for annyang
  voiceCommands(lyrics_one, lyrics_two, lyrics_three, container);

  // Hide elements from the start game page and congratulations page as they should not be displayed in the lyrics pages
  $title.hide();
  $message.hide();
  $startPlay.hide();
  $playAgain.hide();

} // end of setupGame


// Code for annyang voiceCommands: Through annyang commands, the following code will enable the user
// to move on to the next line if they say part of the lyric correctly or try again if they don't say it correctly
function voiceCommands(lyrics_one, lyrics_two, lyrics_three, container){

  if (annyang) {

    let sayLyricsOne = {
      // As it is difficult to get perfect voice detection, the *tag enables the user to say anything.
      // The user is not required to say the complete lyrics correctly. They just need to say parts of it correctly in order to pass to next line
      '*tag Down came the :liquidA and clean the :insectA out': function(tag,liquidA,insectA) {
        // verify if the user has said either the insect name OR liquid name correctly
        if(insect.toLowerCase() === insectA.toLowerCase() || liquid.toLowerCase() === liquidA.toLowerCase()){
          $egg.attr("src", happyEgg);
          // proceed to the next line
          $(container).empty();
          container.appendChild(secondLine);
          console.log("line one complete");
        }

        else{
          // if it is wrong, show the try again egg
          $egg.attr("src", sadEgg);
          console.log("WRONG");
        }

      } // end of annyang function 1

    }; // end of sayLyricsOne

    let sayLyricsTwo = {
      'Out came the :noun *tag': function(nounA,tag) {
        // verify if the user has said the noun correctly
        if(noun.toLowerCase() === nounA.toLowerCase()){
          $egg.attr("src", happyEgg);
          $(container).empty();
          // proceed to the next line
          container.appendChild(thirdLine);
          console.log("line two complete");
        }

        else{
          // if it is wrong, show the try again egg
          $egg.attr("src", sadEgg);
          console.log("WRONG");
        }

      } // end of annyang function 1

    }; // end of sayLyricsTwo

    let sayLyricsThree = {
      '*tag :placeA again': function(tag,placeA) {
        // verify if the user has said the place correctly
        if(place.toLowerCase() === placeA.toLowerCase()){
          console.log("line three complete");

          // reveal the surprise
          $egg.attr("src", surpriseEgg);
          $lyrics.css("background-color", "#FF9800;");
          $(container).empty();

          // replace the title and message from the startGame page to a Congratulations page
          $title.show();
          $title.text("Congratulations!");
          $message.show();
          $message.text("Don't leave! More surprises are waiting for you!");

          // show the "Play Again" button so that the user can click it to restart the game
          $playAgain.show();
        }

        else{
          // if it is wrong, show the try again egg
          $egg.attr("src", sadEgg);
          console.log("WRONG");
        }

      } // end of annyang function 1

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
