"use strict";

/********************************************************************

Pixel Painter
In class exercise w/Pippin Barr

*********************************************************************/

window.onload = setup;
let rotation = 0;
let currentKey = "";
document.addEventListener('keydown', rotate);
document.addEventListener('keydown', typed);

function setup() {
  console.log("page is setup");

for (let i = 0; i < 1000; i++) {
    let pixel = document.createElement('div');
    pixel.setAttribute('class','pixel');
    pixel.addEventListener('mouseover', paint);
    pixel.addEventListener('click', remove);

    pixel.addEventListener('mouseover', addText);
    document.body.appendChild(pixel);
  }
}

function paint(e){
  let pixel = e.target;
  // answer found from: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  pixel.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

  setTimeout(resetPixel, 1000, pixel);

}

function resetPixel(pixel){
  pixel.style.backgroundColor = 'black';
    pixel.innerHTML = "";
}

function remove(e){
  let pixel = e.target;
  pixel.style.opacity = '0';
  pixel.innerHTML = "";
}

function rotate(){
  //let pixel = e.target;
  let pixels = document.getElementsByClassName("pixel");
  // right
  if (event.keyCode === 39){
    for (let i = 0; i < pixels.length; i++) {
    pixels[i].style.transform = 'rotate('+1+'deg)';
    console.log("rotated right");
  }
  }

  //left
  if (event.keyCode === 37){
    for (let i = 0; i < pixels.length; i++) {
      pixels[i].style.transform = 'rotate('+-1+'deg)';
      console.log("rotated left");
     }
  }
}

function typed(){
  //let document = e.target;
  currentKey = event.keyCode;

}

function addText(e){
  let pixel = e.target;
  console.log(currentKey);
 pixel.innerHTML = currentKey;
}
