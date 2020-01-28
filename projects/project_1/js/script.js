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
  rockSound = document.createElement("audio");
  rockSound.setAttribute("src","assets/sounds/rockroll.mp3");
  document.body.appendChild(rockSound);
  rockSound.pause();

  timeOver = document.createElement("audio");
  timeOver.setAttribute("src","assets/sounds/time_over.mp3");
  document.body.appendChild(timeOver);
  timeOver.pause();


  canvas  = document.getElementById("canvas");

  // SABINE :: YOU named this "rock" and i renamed it canvas Context - as it is not a rock it is the context that allows for drawing
  canvasContext = canvas.getContext('2d');
  canvas.width = "1300";
  canvas.height = "650";;
  console.log(sec);

  rockBg  = document.getElementById("rockie");

  mountainRight = new MountainRight (1300,650,800,650,1300,200);

  rock = new Rock(rockBg,30,620,60,60);

  requestAnimationFrame(animate);
}

function animate(){
  canvasContext.clearRect(0,0,canvas.width,canvas.height);
  canvasContext.font = "30px Arial";
  canvasContext.fillStyle = '#FFFFFF';
  canvasContext.fillText("Time: " + sec,1160,50)

  // canvasContext.font = "30px Arial";
  // canvasContext.fillStyle = '#FFFFFF';
  // canvasContext.fillText("Time:",1150,50)

  mountainRight.displayMountainRight();
  rock.displayRock();
  requestAnimationFrame(animate);
}

function handleKeyEvent(){

  rock.moveRock();
  rock.updateRock();
  rock.stopRock();
}

function countDown(){
  sec--;

  if (sec <= 0) {
    timeOver.play();
  clearInterval(timer);
    rock.rockX = 30;
    rock.rockY = 620;
    timerStarted =false;
    sec = 25;
  }
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
// rock will move fast until it reaches the tip of the mountain
// when the user presses the U key to move the rock up the mountain, the rock will go up really slow and never make it up on time.

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

  // U KEY (MOVE UP)
  if (event.keyCode === 85){
  this.rockSpeedX = 2;
  this.rockDirectionX=2;
  this.rockY -= 3;
  this.rockRot += 5;
  rockSound.play();
  }

  if(event.keyCode === 39){
    if(timerStarted ===false){
      timer = setInterval(countDown, 1000);
      timerStarted =true;
      console.log("started timer");
    }
  }
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
}
