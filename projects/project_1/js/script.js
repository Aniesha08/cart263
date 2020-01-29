"use strict";

/********************************************************************

Sisyphus
by Aniesha Sangarapillai

References:
Background image & rock, my own illustration.
Rock sound: https://freesound.org/people/AlanCat/sounds/381645/
Time Over sound: https://freesound.org/people/deleted_user_877451/sounds/76376/

*********************************************************************/

window.onload = setup;

document.addEventListener('keydown', handleKeyEvent);

// global variables
let canvas;
let canvasContext;
let rock;
let mountainRight;
let mountainLeft;
let rockBg;
let rockX;
let rockY;
let rockRot;
let sec = 25;
let timer;
let timerStarted=false;

// sounds for variables
let rockSound;
let timeOver;

function setup() {
// Created audio elements
rockSound = document.createElement("audio");
rockSound.setAttribute("src","assets/sounds/rockroll.mp3");
document.body.appendChild(rockSound);
rockSound.pause();

timeOver = document.createElement("audio");
timeOver.setAttribute("src","assets/sounds/time_over.mp3");
document.body.appendChild(timeOver);
timeOver.pause();

// Created a canvas
canvas  = document.getElementById("canvas");
canvasContext = canvas.getContext('2d');
canvas.width = "1300";
canvas.height = "650";

// Created objects rock & mountain
mountainRight = new MountainRight (1300,650,800,650,1300,200);
rockBg  = document.getElementById("rockie");
rock = new Rock(rockBg,30,620,60,60);

requestAnimationFrame(animate);
} // End of setup

function animate(){
canvasContext.clearRect(0,0,canvas.width,canvas.height);
canvasContext.font = "30px Arial";
canvasContext.fillStyle = '#FFFFFF';
canvasContext.fillText("Time: " + sec,1160,50);

mountainRight.displayMountainRight();
rock.displayRock();
requestAnimationFrame(animate);
} // End of animate

function handleKeyEvent(){
//perform the following functions on keydown
rock.moveRock();
rock.updateRock();
rock.stopRock();
} // End of handleKeyEvent

function countDown(){
sec--;

if (sec <= 0) {
// when the countDown is over, reposition the rock to its starting position
// set the timer back to 25 seconds
  timeOver.play();
  clearInterval(timer);
  rock.rockX = 30;
  rock.rockY = 620;
  timerStarted =false;
  sec = 25;
}
} // End of countdown


// SABINE:: made a class for the rock object
class Rock{

constructor(rockBg, rockX, rockY, rockW, rockH){
this.rockBg = rockBg;
this.rockX = rockX;
this.rockY = rockY;
this.rockW = rockW;
this.rockH = rockH;
this.rockRot = 0;

// Have two speeds  - one for x and one for y
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
} // End of displayRock

updateRock(){
this.rockSpeedX = this.rockSpeedX*this.rockDirectionX;
this.rockX += this.rockSpeedX;
this.rockY += this.rockSpeedY;
} // End of updateRock

moveRock(){
console.log(this.rockX);
console.log(canvas.width/2);
// RIGHT ARROW
if (event.keyCode === 39){
this.rockSpeedX =2;
this.rockDirectionX=2;
this.rockRot += 15;
rockSound.play();
}

// LEFT ARROW
if (event.keyCode=== 37){
this.rockSpeedX =2;
this.rockDirectionX=-2;
this.rockRot -= 15;
rockSound.play();
}

// Restriction for U-key, only can go up when you pass 780px
if (this.rockX >= 780){
console.log("can move with u");
//U KEY (MOVE UP)
if (event.keyCode === 85){
this.rockSpeedX = 2;
this.rockDirectionX=2;
this.rockY -= 3;
this.rockRot += 5;
rockSound.play();
}
}

if(event.keyCode === 39){
// Start the timer only when right arrow key is pressed
  if(timerStarted ===false){
    timer = setInterval(countDown, 1000);
    timerStarted =true;
    console.log("started timer");
  }
}
} // End of moveRock

stopRock(){
if (this.rockX <= 30){
this.rockX = 30;
this.rockY = 620;
this.rockSpeedX = 0;
this.rockDirectionX=-0;
this.rockRot = 0;
}
this.rockSpeedX = 0;
this.rockSpeedY = 0;
}

} // End of Rock class


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
  canvasContext.fillStyle = "#66003d";
  canvasContext.fill();
}
} // End of Mountain class
