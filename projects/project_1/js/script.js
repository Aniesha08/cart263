"use strict";

/********************************************************************

Sisyphus
by Aniesha Sangarapillai

References:

*********************************************************************/

window.onload = setup;
document.addEventListener('keydown', handleKeyEvent);

// let rockX = 40;
// let rockY = 610;
// let rockR = 35;
// let rockS = 0;
// let rockE = 2 * Math.PI;
// let rockSpeed = 0;
// SABINE ADD :: make these global
let canvas;
let canvasContext;
let rock;


function setup() {
  //createCanvas(windowWidth, windowHeight);
  canvas  = document.getElementById("canvas");
  // SABINE :: YOU named this "rock" and i renamed it canvas Context - as it is not a rock it is the context that allows for drawing
  canvasContext = canvas.getContext('2d');
  canvas.style.backgroundColor = "#C5EFFD";
  canvas.width = "1000";
  canvas.height = "650";

  // make a rock:
  rock = new Rock(40,610,35,0,2*Math.PI);
  rock.displayRock();
  requestAnimationFrame(animate);
}

function animate(){
  //console.log("in animate");
  canvasContext.clearRect(0,0,canvas.width,canvas.height);
    rock.displayRock();
  requestAnimationFrame(animate);

}

function handleKeyEvent(){
  rock.moveRock();
  rock.updateRock();
}


// SABINE:: made a class for the rock object
class Rock{
  constructor(rockX, rockY, rockR, rockS, rockE){
    this.rockX = rockX;
    this.rockR = rockR;
    this.rockY = rockY;
    this.rockS = rockS;
    this.rockE = rockE;
    //have two speeds  - one for x and one for y
    this.rockSpeedX =0.0;
    this.rockSpeedY =0.0;
    this.rockDirectionX = 1.0;
    this.rockDirectionY =1.0;
  }

displayRock(){
//  console.log("display");
  canvasContext.beginPath();
  canvasContext.arc (this.rockX, this.rockY, this.rockR,this.rockS,this.rockE);
  canvasContext.fillStyle = "#5A4D41";
  canvasContext.fill();
  canvasContext.closePath();
}

updateRock(){
  this.rockSpeedX = this.rockSpeedX*this.rockDirectionX;
  this.rockX += this.rockSpeedX;
  this.rockY += this.rockSpeedY;
}


moveRock(){
  if (event.keyCode === 39){
  this.rockSpeedX =1;
  this.rockDirectionX=1;
  console.log("moving right");
  }

  if (event.keyCode=== 37){
  this.rockSpeedX =1;
  this.rockDirectionX=-1;
  console.log("moving left");
  }

}
} //class
