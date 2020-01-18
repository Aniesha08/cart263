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
let mountain;
let mountainBack;

let rockBg;
function preload() {
  rockBg = loadImage('https://www.textures.com/system/gallery/photos/3D%20Scans/ps132998/132998_header.jpg');
}


function setup() {
  //createCanvas(windowWidth, windowHeight);
  canvas  = document.getElementById("canvas");
  // SABINE :: YOU named this "rock" and i renamed it canvas Context - as it is not a rock it is the context that allows for drawing
  canvasContext = canvas.getContext('2d');
  canvas.width = "1200";
  canvas.height = "650";

  mountainBack = new MountainBack (500,550,1000,220,900,100);
  mountainBack.displayMountainBack();

  mountain = new Mountain (1200,650,300,650,1200,25);
  mountain.displayMountain();

  // make a rock:
  rock = new Rock(40,625,25,0,2*Math.PI);
  rock.displayRock();
  requestAnimationFrame(animate);
}

function animate(){
  //console.log("in animate");
  canvasContext.clearRect(0,0,canvas.width,canvas.height);
  mountainBack.displayMountainBack();
  mountain.displayMountain();
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
  //canvasContext.style.backgroundImage = "url('assets/images/rock.jpg')";
  canvasContext.fillStyle = rockBg;
  //canvasContext.background = rockBg;
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
  if (this.rockX <= 25){
  //  this.rockx = canvas.width - this.rockR;
  //  this.rockX = 0;
  this.rockX = 25;
  this.rockY = 625;
  this.rockSpeedX = 0;
  this.rockDirectionX=-0;
  }
}
} //class

class MountainBack{
  constructor(x1, y1, x2, y2, x3, y3){
    this.x1 = x1;
    this.y1 = x1;
    this.x2 = x1;
    this.y2 = x1;
    this.x3 = x1;
    this.y3 = x1;
  }

  displayMountainBack(){
    canvasContext.beginPath();
    canvasContext.moveTo(500,550);
    canvasContext.lineTo(1000,220);
    canvasContext.lineTo(900,100);
    canvasContext.fillStyle = "#461f2f";
    canvasContext.fill();
  }
}

class Mountain{
  constructor(x1, y1, x2, y2, x3, y3){
    this.x1 = x1;
    this.y1 = x1;
    this.x2 = x1;
    this.y2 = x1;
    this.x3 = x1;
    this.y3 = x1;
  }

  displayMountain(){
    canvasContext.beginPath();
    canvasContext.moveTo(1200,650);
    canvasContext.lineTo(300,650);
    canvasContext.lineTo(1200,25);
    canvasContext.fillStyle = "#311b25";
    canvasContext.fill();
  }
}
