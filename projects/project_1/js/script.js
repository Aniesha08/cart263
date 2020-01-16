"use strict";

/********************************************************************

Sisyphus
by Aniesha Sangarapillai

References:

*********************************************************************/

window.onload = setup;
document.addEventListener('keydown', moveRock);

function setup() {
  //createCanvas(windowWidth, windowHeight);
  let canvas  = document.getElementById("canvas");
  canvas.style.backgroundColor = "#C5EFFD";
  canvas.width = "1000";
  canvas.height = "650";

  displayRock();
  moveRock();
}

function displayRock(){
  let rock = canvas.getContext('2d');
  let x = 40;
  let y = 610;
  let r = 35;
  let s = 0;
  let e = 2 * Math.PI;
  rock.beginPath();
  rock.arc(x, y, r, s, e);
  rock.fillStyle = "#5A4D41";
  rock.fill();
}

function moveRock(){
  //right
  if (event.keyCode === 39){
    rock.x = '+1';
    // rock.style.transform = 'rotate('+1+'deg)';
    // console.log("move right");
  }

  //left
  if (event.keyCode === 37){
      rock.style.transform = 'rotate('+-1+'deg)';
      console.log("move left");
  }
}
