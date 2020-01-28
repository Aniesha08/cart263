"use strict";

/********************************************************************

Eat Up
Aniesha Sangarapillai

*********************************************************************/

$(document).ready(setup);

let $mouth;
let $fly;
let buzz = new Audio("assets/sounds/buzz.mp3");
let crunch = new Audio("assets/sounds/crunch.wav");

function setup() {

  // stored element to variable
  $mouth = $('#mouth');
  $fly = $('#fly');

  buzz.loop = true;

  $fly.mousedown(function(){
    buzz.play();
  });

  $fly.mouseup(function(){
    buzz.pause();
  });

  $fly.draggable();

  $mouth.droppable({
      drop: onDrop
    });
  } //end of setup

  function onDrop(event, ui) {
    console.log("Dropped!");
    $fly.remove();
    setInterval(chew, 300);
    buzz.pause();
  } //end of onDrop

function chew(){
    // if the mouth is open, change it to closed at an interval 
    if ($mouth.attr("src") === "assets/images/mouth-open.png"){
    $mouth.attr("src", "assets/images/mouth-closed.png");
    crunch.play();
  }
  else{
  $mouth.attr("src", "assets/images/mouth-open.png");
  }
} //end of chew
