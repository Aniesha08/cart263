"use strict";

/*****************

Slamina Voice Command
Aniesha Sangarapillai

******************/

// Define variables

let animals = ["aardvark",
      "alligator",
      "alpaca",
      "antelope",
      "ape",
      "armadillo",
      "baboon",
      "badger",
      "bat",
      "bear",
      "beaver",
      "bison",
      "boar",
      "buffalo",
      "bull",
      "camel",
      "canary",
      "capybara",
      "cat",
      "chameleon",
      "cheetah",
      "chimpanzee",
      "chinchilla",
      "chipmunk",
      "cougar",
      "cow",
      "coyote",
      "crocodile",
      "crow",
      "deer",
      "dingo",
      "dog",
      "donkey",
      "dromedary",
      "elephant",
      "elk",
      "ewe",
      "ferret",
      "finch",
      "fish",
      "fox",
      "frog",
      "gazelle",
      "gila monster",
      "giraffe",
      "gnu",
      "goat",
      "gopher",
      "gorilla",
      "grizzly bear",
      "ground hog",
      "guinea pig",
      "hamster",
      "hedgehog",
      "hippopotamus",
      "hog",
      "horse",
      "hyena",
      "ibex",
      "iguana",
      "impala",
      "jackal",
      "jaguar",
      "kangaroo",
      "koala",
      "lamb",
      "lemur",
      "leopard",
      "lion",
      "lizard",
      "llama",
      "lynx",
      "mandrill",
      "marmoset",
      "mink",
      "mole",
      "mongoose",
      "monkey",
      "moose",
      "mountain goat",
      "mouse",
      "mule",
      "muskrat",
      "mustang",
      "mynah bird",
      "newt",
      "ocelot",
      "opossum",
      "orangutan",
      "oryx",
      "otter",
      "ox",
      "panda",
      "panther",
      "parakeet",
      "parrot",
      "pig",
      "platypus",
      "polar bear",
      "porcupine",
      "porpoise",
      "prairie dog",
      "puma",
      "rabbit",
      "raccoon",
      "ram",
      "rat",
      "reindeer",
      "reptile",
      "rhinoceros",
      "salamander",
      "seal",
      "sheep",
      "shrew",
      "silver fox",
      "skunk",
      "sloth",
      "snake",
      "squirrel",
      "tapir",
      "tiger",
      "toad",
      "turtle",
      "walrus",
      "warthog",
      "weasel",
      "whale",
      "wildcat",
      "wolf",
      "wolverine",
      "wombat",
      "woodchuck",
      "yak",
      "zebra"];

let correctAnimal;
let answers = [];
const NUM_OPTIONS = 5;


$(document).ready(setup);

function setup() {
  newRound();
  voiceCommands();
}

// Create buttons to click
function addButton(label){
  let $div = $('<div></div>')
  $div.addClass('guess');
  $div.text(label);
  $div.button();
  $div.appendTo('body');

  $div.on("click", handleGuess);
}

//Annyang voice commands and actions
function voiceCommands(){
  if (annyang) {

    // reveal the correct answer when the user says they give up
    let giveup = {
    'I give up': function() {
     $('.guess').each(checkCorrect);
     setTimeout(newRound, 1000); //start a new round once displayed the correct answer
    }
  };

    // repeat animal name backwards
    let repeat = {
    'Say it again': function() {
    sayBackwards(correctAnimal);
    console.log("you working?");
    }
  };

    annyang.addCommands(giveup);
    annyang.addCommands(repeat);
    annyang.start();
  }
}

// Check through all the divs to reveal the correct answer
function checkCorrect(){
    if ($(this).text() == correctAnimal) {
      $(this).css("background-color", "#90ee90");
    }
}

// Generate a new round
function newRound(){
  $('.guess').remove();
  answers = []; // empty answers array

  // for loop to go through animals array within the options
  for(let i = 0; i < NUM_OPTIONS; i++){
    let answer = animals[Math.floor(Math.random() * animals.length)]; //choose one answer from five
    addButton(answer);
    answers.push(answer);
  }
    correctAnimal = answers[Math.floor(Math.random() * answers.length)];
    sayBackwards(correctAnimal);
}

function handleGuess(){
  if ($(this).text() == correctAnimal) {
    // change set once the correct animal is guessed
    $('.guess').remove();
    setTimeout(newRound, 100);
  }

  else {
    // if guessed animal is wrong shake and repeat correct animal name
    $('.guess').effect('shake');
    sayBackwards(correctAnimal);
  }
}

// Say the name of the animal backwards
function sayBackwards(text){
  let backwardsText = text.split('').reverse().join('');
  let options = {rate: 1, pitch: 1};

  responsiveVoice.speak(backwardsText, "UK English Male", options);
}
