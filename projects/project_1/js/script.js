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
let rockSpeed = 2;


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

  moveRock();
}

// function displayRock(){
//   let x = 40;
//   let y = 610;
//   let r = 35;
//   let s = 0;
//   let e = 2 * Math.PI;
//   rock.beginPath();
//   rock.arc(x, y, r, s, e);
//   rock.fillStyle = "#5A4D41";
//   rock.fill();
// }

function moveRock(){
  let rock = canvas.getContext('2d');

  if (event.keyCode === 39){
  rock.vx = -rockSpeed;
  }

    if (event.keyCode === 37){
  rock.vx = rockSpeed;
  }

  else {
  rock.vx = 0;
  }
}
