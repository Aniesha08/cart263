"use strict";

/*****************

Itsy Bitsy
Aniesha Sangarapillai

Itsy Bitsy is a kids game which uses the Itsy Bitsy Spider rhyme (ideally ages 8 and up). The lyrics of the rhyme are manipulated by replacing certain words
from the original rhyme and randomizing the set of words that are to be replace. As a result, a familiar rhyme becomes creepy and silly rhyme
that makes no sense at all. The user interacts with the game by saying the lyrics of the rhyme to pass each line and finally get a surprise.
The game is created using 3 key elements, JSON data, Randomization and Annyang.

Sound Credit: [Crowd Wow Surprise People] by dersuperanton
https://freesound.org/people/dersuperanton/sounds/437645/
******************/

$(document).ready(setup);

// GLOBAL VARIABLES
// data & lyrics variables
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
// title, message and button variable for game start and congratulations page
let $title;
let $message;
let $startPlay;
let $playAgain;
// sound variable for congratulations page
let wowSound;
// variable for the value in the progressbar - the value can be increased as the user passes from one line to another
let $value = $("#progressbar").progressbar("option", "value");



// SETUP FUNCTION
// General setup code for loading data + defining images, sound and buttons
function setup(){
  // identified the path of the JSON file
  $.getJSON("data/replace.json", dataLoaded);

  // the first image of the egg, when the game is loaded will be a jumping egg
  // the image source of the egg can be changed later on by selecting $egg
  $egg = $('#egg_closed');
  $egg.attr("src", jumpingEgg);

  // the start page and the congratulations page, both have the same structure: a title, message, and button
  // using the $title and $message, the title and message from the starting page can be transformed to a congratulations page
  $title = $("#title");
  $message = $("#message");

  // defined the start button which will perform the startGame function when clicked
  $startPlay = $("#start_play");
  $startPlay.click(startGame);

  // defined the playAgain button which will perform the restartGame function when clicked
  $playAgain = $("#play_again");
  $playAgain.hide();
  $playAgain.click(restartGame);

  // created an audio element for the sound with a link to the audio souce
  wowSound = document.createElement("audio");
  wowSound.setAttribute("src","https://aniesha08.github.io/cart263/projects/project_2/assets/sounds/wow.wav");
  document.body.appendChild(wowSound);
  // the wow sound is paused in setup as it will only need to be played on the congratulations page
  wowSound.pause();

  // the progressbar value will start at 33 at the first line of the lyrics (there are 3 parts, so this is to show that the user is on the first part)
  $("#progressbar").progressbar({
    value: 33
  });

  // the progressbar will only be visible in the startGame and restartGame function
  $("#progressbar").progressbar().hide();

} // end of SETUP



// START GAME FUNCTION
// When the user clicks on the "Let's Play!" button, the user will be directed the the lyrics page
function startGame(){
  $("#progressbar").progressbar().show();
  setupGame();
} // end of startGame



// RESTART GAME FUNCTION
// When the user clicks on the "Play Again" button, the game will restart by revealing a new set of lyrics
function restartGame(){
  $("#progressbar").progressbar().show();
  $("#progressbar").progressbar("option", "value", 33);
  setupGame();
} // end of restartGame



// DATA LOADED FUNCTION
// Assigned a variable for the data that is recieved from the json file
function dataLoaded(data){
  dataIn = data;
  // the lyrics will be displayed in the lyrics div
  $lyrics = $('#lyrics');
  $lyrics.css("background-color", "#00BCD4;");
} // end of dataLoaded



// SETUP GAME FUNCTION
// The following function takes the data from the json file and using it, we create the lyrics string for the 3 parts of the lyrics
function setupGame(){
  // once the player has clicked on the $startPlay or $playAgain button, the image of the egg and the background color of the lyrics div will change
  $egg.attr("src", happyEgg);
  $lyrics.css("background-color", "#72cc5c;");

  // get a random word from each list of the json objects (a random insect, place, liquid, noun and verb)
  insect = getRandomElement(dataIn.insect);
  place = getRandomElement(dataIn.place);
  liquid = getRandomElement(dataIn.liquid);
  noun = getRandomElement(dataIn.noun);
  verb = getRandomElement(dataIn.verb);

  // get a random surprise from the surprises stored in the json file
  surpriseEgg = getRandomElement(dataIn.surprise);

  // the lyrics will be appended to the lyrics display div
  container = document.getElementById("lyrics_display");

  // the lyrics are divided into three strings (three parts)
  // part ONE
  let lyrics_one = insect + " climbed up my " + place + "," + " Down came the " + liquid + " and clean the " +insect;
  firstLine = document.createTextNode("Itsy bitsy " +lyrics_one+" out.");
  container.appendChild(firstLine);
  // part TWO
  let lyrics_two = noun + " and " + verb + " up all the " + liquid;
  secondLine = document.createTextNode(" Out came the " +lyrics_two+",");
  // part THREE
  let lyrics_three =  insect + " climbed up my " + place;
  thirdLine = document.createTextNode(" And the itsy bitsy " +lyrics_three+" again.");

  // Use the three strings for annyang
  voiceCommands(lyrics_one, lyrics_two, lyrics_three, container);

  // Hide the title, message and buttons in the lyrics section of the game
  $title.hide();
  $message.hide();
  $startPlay.hide();
  $playAgain.hide();

} // end of setupGame



// VOICE COMMANDS FUNCTION
// Through annyang commands, the following code will enable the user to move on to the next line
// if they say part of the lyric correctly or they will see a try again egg if they don't say it correctly
function voiceCommands(lyrics_one, lyrics_two, lyrics_three, container){
  if (annyang) {
    // Part 1 lyrics
    let sayLyricsOne = {
      // As it is difficult to get perfect voice detection, the *tag enables the user to say "anything", therefore we can exclude that part from accurate detection
      // The user is not required to say the complete lyrics correctly. They just need to say parts of it correctly in order to pass to next line (the user does not know this)
      // This is just for the simplicity and easiness of the game, especially for children
      '*tag Down came the :liquidA and clean the :insectA out': function(tag,liquidA,insectA) {
        // verify if the user has said either the insect name OR liquid name correctly
        if(insect.toLowerCase() === insectA.toLowerCase() || liquid.toLowerCase() === liquidA.toLowerCase()){
          $egg.attr("src", happyEgg);
          // clear the container, proceed to the next line and increase progress bar value to indicate that they are at part 2 (2/3 of the way to the end of the game)
          $(container).empty();
          container.appendChild(secondLine);
          $( "#progressbar" ).progressbar( "option", "value", 66 );
        } // end of if statement

        else{
          // if it is wrong, show the try again egg
          $egg.attr("src", sadEgg);
        } // end of if statement
      } // end of annyang function 1
    }; // end of sayLyricsOne


    // Part 2 lyrics
    let sayLyricsTwo = {
      'Out came the :noun *tag': function(nounA,tag) {
        // verify if the user has said the noun correctly, what the user says after the noun, does not really matter
        if(noun.toLowerCase() === nounA.toLowerCase()){
          $egg.attr("src", happyEgg);
          // clear the container, proceed to the last line and increase progress bar value to indicate that they are at part 3 (3/3 of the way to the end of the game)
          $(container).empty();
          $( "#progressbar" ).progressbar( "option", "value", 100 );
          container.appendChild(thirdLine);
        } // end of if statement

        else{
          // if it is wrong, show the try again egg
          $egg.attr("src", sadEgg);
        } // end of if statement
      } // end of annyang function 2
    }; // end of sayLyricsTwo


    // Part 3 lyrics
    let sayLyricsThree = {
      '*tag :placeA again': function(tag,placeA) {
        // verify if the user has said the place again correctly, it does not matter what they say before the place
        // if they have said it correctly, play the wow sound and transform the page into a  congratulations page
        if(place.toLowerCase() === placeA.toLowerCase()){
          wowSound.play();

          // reveal the surprise, change the background of the lyrics div
          $egg.attr("src", surpriseEgg);
          $lyrics.css("background-color", "#FF9800;");
          $(container).empty();

          // we don't need to see the progressbar once we reach the Congratulations page
          $( "#progressbar" ).progressbar().hide();

          // replace the title and message from the startGame page to a Congratulations page
          $title.show();
          $title.text("Congratulations!");
          $title.css("color", "#6c5bcc;");
          $message.show();
          $message.text("Don't leave! More surprises are waiting for you!");

          // show the "Play Again" button so that the user can click it to restart the game
          $playAgain.show();
        } // end of if statement

        else{
          // if it is wrong, show the try again egg
          $egg.attr("src", sadEgg);
        } // end of else statement
      } // end of annyang function 1
    }; // end of sayLyricsThree

    // add commands for annyang
    annyang.addCommands(sayLyricsOne);
    annyang.addCommands(sayLyricsTwo);
    annyang.addCommands(sayLyricsThree);
    // annyang will start its voice detection
    annyang.start();
    // through annyang debug, you can see the console to see what annyang has heard from its voice detection
    annyang.debug();
  } // end of annyang if statment
} // end of voiceCommands



// GET RANDOM ELEMENT FUNCTION
// The following function will get a random element from the array and return a value
// As the set of words for insect, place, liquid, noun and verb are in an array, we will use this function in lines 136-140, 143 to get a random value
function getRandomElement(array){
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
} // end of getRandomElement
