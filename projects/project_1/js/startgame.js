"use strict";

window.onload = setup;
let startGame;
let canvas;
let canvasContext;

startGame.addEventListener ('click', start);

function setup(){
canvas  = document.getElementById("canvas");
canvasContext = canvas.getContext('2d');
canvas.width = "1300";
canvas.height = "650";

startGame = document.createElement("button");
startGame.innerHTML = "Start Game";
document.body.appendChild(startGame);

draw();
}

function draw(){
  canvasContext.font = "28px Arial";
  canvasContext.fillStyle = '#FFFFFF';
  canvasContext.fillText("Try to get the rock up the mountain within 25sec.",350,250);
  canvasContext.fillText("Press the RIGHT and LEFT arrow keys to roll the rock forwards or backwards.",180,300);
  canvasContext.fillText("Press U to roll the rock up the mountain.",400,350);
  canvas.style.background = "#66003d";
}

function start(){
  console.log("play game");
}
