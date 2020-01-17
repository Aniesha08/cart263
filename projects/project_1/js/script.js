"use strict";

/********************************************************************

Sisyphus
by Aniesha Sangarapillai

References:

*********************************************************************/

window.onload = setup;
document.addEventListener('keydown', moveRock);

let rockX = 40;
let rockY = 625;
let rockR = 25;
let rockS = 0;
let rockE = 2 * Math.PI;
let rockSpeed = 0;


function setup() {
  //createCanvas(windowWidth, windowHeight);
  let canvas  = document.getElementById("canvas");
  let rock = canvas.getContext('2d');
//  canvas.style.backgroundColor = "#C5EFFD";
  canvas.width = "1200";
  canvas.height = "650";

  rock.beginPath();
  rock.arc (rockX, rockY, rockR, rockS, rockE);
  rock.fillStyle = "#5A4D41";
  rock.fill();


  let mountain = canvas.getContext('2d');
  let mountainTop = canvas.getContext('2d');
  let mountainBack = canvas.getContext('2d');

  mountainBack.beginPath();
  mountainBack.moveTo(500,550);
  mountainBack.lineTo(1000,220);
  mountainBack.lineTo(900,100);
  mountainBack.fillStyle = "#461f2f";
  mountainBack.fill();

  mountain.beginPath();
  mountain.moveTo(1200,650);
  mountain.lineTo(300,650);
  mountain.lineTo(1200,25);
  mountain.fillStyle = "#311b25";
  mountain.fill();

  // mountainTop.beginPath();
  // mountainTop.moveTo(1200,125);
  // mountainTop.lineTo(1056,125);
  // mountainTop.lineTo(1200,25);
  // mountainTop.fillStyle = "#ffffff";
  // mountainTop.fill();

  rock.newPos = function() {
  rock.rockX += rock.rockSpeed;
  rock.rockY += rock.rockSpeed;
  }

  moveRock();
}

// function update(){
//
// }

function moveRock(){
let rock = canvas.getContext('2d');
rock.rockSpeed = 0;

  if (event.keyCode === 39){
  rock.rockSpeed += 1;
  console.log("moving right");
  }

  if (event.keyCode === 37){
  rock.rockSpeed -= 1;
  console.log("moving left");
  }

  else {
  rock.rockSpeed = 0;
  }
}
