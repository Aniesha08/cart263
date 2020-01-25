"use strict";

/********************************************************************

Sisyphus
by Aniesha Sangarapillai

References:

*********************************************************************/

window.onload = setup;
window.AudioContext = window.AudioContext || window.webkitAudioContext;
// let rockSound = new AudioContext();
document.addEventListener('keydown', handleKeyEvent);

document.addEventListener('keydown', function() {
    let rockSound  = new AudioContext();
    rockSound.resume().then(() => {
    console.log('Playback resumed successfully');
  });
});

// SABINE ADD :: make these global
let canvas;
let canvasContext;
let rock;
let mountainRight;
let mountainLeft;
let rockBg;
let rockX;
let rockY;
let rockRot;

// function preload(){
//     rockSound = loadSound('assets/sounds/rockroll.mp3');
//   //  rockSound = loadSound('https://github.com/Aniesha08/cart263/blob/master/projects/project_1/assets/sounds/rockroll.mp3');
//    }

function setup() {
  canvas  = document.getElementById("canvas");
  rockBg  = document.getElementById("rockie");
  // SABINE :: YOU named this "rock" and i renamed it canvas Context - as it is not a rock it is the context that allows for drawing
  canvasContext = canvas.getContext('2d');
  canvas.width = "1300";
  canvas.height = "650";

  mountainLeft = new MountainLeft (0,200,0,650,500,650);

  mountainRight = new MountainRight (1300,650,800,650,1300,200);

  rock = new Rock(rockBg,30,620,60,60);

  requestAnimationFrame(animate);
}

function animate(){
  canvasContext.clearRect(0,0,canvas.width,canvas.height);
  //mountainLeft.displayMountainLeft();
  //mountainRight.displayMountainRight();
  mountainShow();
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
  constructor(rockBg, rockX, rockY, rockW, rockH){
    this.rockBg = rockBg;
    this.rockX = rockX;
    this.rockY = rockY;
    this.rockW = rockW;
    this.rockH = rockH;
    this.rockRot = 0;

    //have two speeds  - one for x and one for y
    this.rockSpeedX =0.0;
    this.rockSpeedY =0.0;
    this.rockDirectionX = 1.0;
    this.rockDirectionY =1.0;
  }

  displayRock(){
    canvasContext.save();
    canvasContext.translate(this.rockX , this.rockY);
    canvasContext.rotate(Math.PI / 180 * (this.rockRot += 0.0));
    canvasContext.translate(-this.rockW/2.0, -this.rockH/2.0);
    canvasContext.drawImage(this.rockBg, 0, 0, this.rockW, this.rockH);
    canvasContext.restore();
}

updateRock(){
  this.rockSpeedX = this.rockSpeedX*this.rockDirectionX;
  this.rockX += this.rockSpeedX;
  this.rockY += this.rockSpeedY;
}

moveRock(){
  if (event.keyCode === 39){
  this.rockSpeedX =2;
  this.rockDirectionX=2;
  this.rockRot += 5;
  // rockSound.play();
  }

  if (event.keyCode=== 37){
  this.rockSpeedX =2;
  this.rockDirectionX=-2;
  this.rockRot -= 5;
  }

  console.log(this.rockX);
}

stopRock(){
  if (this.rockX <= 30){
  this.rockX = 30;
  this.rockY = 620;
  this.rockSpeedX = 0;
  this.rockDirectionX=-0;
  this.rockRot = 0;
  }
}
} //class

// If the rock position is greater or less than half the width of the canvas, display the mountain on the opposite side of the rock direction
function mountainShow(){
  if (rock.rockX >= canvas.width/2){
    console.log("mountain pass half of canvas");
    mountainLeft.displayMountainLeft();
  }

  if (rock.rockX <= canvas.width/2){
    mountainRight.displayMountainRight();
  }
}

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
