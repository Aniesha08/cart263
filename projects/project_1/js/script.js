"use strict";

/********************************************************************

Sisyphus
by Aniesha Sangarapillai

References:

*********************************************************************/

window.onload = setup;
document.addEventListener('keydown', handleKeyEvent);

// SABINE ADD :: make these global
let canvas;
let canvasContext;
let rock;
let mountain;
let mountainBack;
let rockBg;
let rockX;
let rockY;
let rockRot;
let TO_RADIANS = Math.PI/180;


function setup() {
  canvas  = document.getElementById("canvas");
  rockBg  = document.getElementById("rockie");
  // SABINE :: YOU named this "rock" and i renamed it canvas Context - as it is not a rock it is the context that allows for drawing
  canvasContext = canvas.getContext('2d');
  canvas.width = "1300";
  canvas.height = "650";

  mountainBack = new MountainLeft (0,200,0,650,500,650);
  mountainBack.displayMountainLeft();

  mountain = new MountainRight (1300,650,800,650,1300,200);
  mountain.displayMountainRight();

  rock = new Rock(rockBg,0,590);
  rock.displayRock();

  requestAnimationFrame(animate);
}

function animate(){
  //console.log("in animate");
  canvasContext.clearRect(0,0,canvas.width,canvas.height);
  mountainBack.displayMountainLeft();
  mountain.displayMountainRight();
  rock.displayRock();
  requestAnimationFrame(animate);
}

function handleKeyEvent(){
  rock.moveRock();
  rock.updateRock();
  rock.stopRock();
}


// SABINE:: made a class for the rock object
class Rock{
  constructor(rockBg, rockX, rockY){
    this.rockBg = rockBg;
    this.rockX = rockX;
    this.rockY = rockY;
    this.rockRot = 0;
    //this.rockR = rockR;
    // this.rockS = rockS;
    // this.rockE = rockE;
    //have two speeds  - one for x and one for y
    this.rockSpeedX =0.0;
    this.rockSpeedY =0.0;
    this.rockDirectionX = 1.0;
    this.rockDirectionY =1.0;
  }

  displayRock(){
  //  canvasContext.rotate(this.rockRot);
    canvasContext.save();
    canvasContext.translate(0, 0);
    canvasContext.rotate(0 * TO_RADIANS);
    canvasContext.drawImage(this.rockBg, this.rockX, this.rockY);
    canvasContext.restore();
  //  canvasContext.rotate(-this.rockRot);
  //  canvasContext.rotate(this.rockRot);
//  console.log("display");
//  canvasContext.beginPath();
//  canvasContext.arc (this.rockX, this.rockY, this.rockR,this.rockS,this.rockE);
//  canvasContext.fill();
//  canvasContext.closePath();
}

updateRock(){
  this.rockSpeedX = this.rockSpeedX*this.rockDirectionX;
  this.rockX += this.rockSpeedX;
  this.rockY += this.rockSpeedY;
  this.rockRot++;
}

moveRock(){
  if (event.keyCode === 39){
  this.rockSpeedX =2;
  this.rockDirectionX=2;
  }

  if (event.keyCode=== 37){
  this.rockSpeedX =2;
  this.rockDirectionX=-2;
  }

  console.log(this.rockX);
  //console.log(this.rockY);
}

stopRock(){
  if (this.rockX <= 0){
  //  this.rockx = canvas.width - this.rockR;
  //  this.rockX = 0;
  this.rockX = 0;
  this.rockY = 590;
  this.rockSpeedX = 0;
  this.rockDirectionX=-0;
  }
}
} //class

class MountainLeft{
  constructor(x1, y1, x2, y2, x3, y3){
    this.x1 = x1;
    this.y1 = x1;
    this.x2 = x1;
    this.y2 = x1;
    this.x3 = x1;
    this.y3 = x1;
  }

  displayMountainLeft(){
    canvasContext.beginPath();
    canvasContext.moveTo(0,200);
    canvasContext.lineTo(0,650);
    canvasContext.lineTo(500,650);
    canvasContext.fillStyle = "#461f2f";
    canvasContext.fill();
  }
}

class MountainRight{
  constructor(x1, y1, x2, y2, x3, y3){
    this.x1 = x1;
    this.y1 = x1;
    this.x2 = x1;
    this.y2 = x1;
    this.x3 = x1;
    this.y3 = x1;
  }

  displayMountainRight(){
    canvasContext.beginPath();
    canvasContext.moveTo(1300,650);
    canvasContext.lineTo(800,650);
    canvasContext.lineTo(1300,250);
    canvasContext.fillStyle = "#461f2f";
    canvasContext.fill();
  }
}
