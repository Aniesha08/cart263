"use strict";

/********************************************************************

Sisyphus
by Aniesha Sangarapillai

References:

*********************************************************************/

window.onload = setup;
document.addEventListener('keydown', moveRock);

let rockX = 40;
let rockY = 610;
let rockR = 35;
let rockS = 0;
let rockE = 2 * Math.PI;
let rockSpeed = 0;


function setup() {
  //createCanvas(windowWidth, windowHeight);
  let canvas  = document.getElementById("canvas");
  let rock = canvas.getContext('2d');
  canvas.style.backgroundColor = "#C5EFFD";
  canvas.width = "1000";
  canvas.height = "650";

  rock.beginPath();
  rock.arc (rockX, rockY, rockR, rockS, rockE);
  rock.fillStyle = "#5A4D41";
  rock.fill();

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
