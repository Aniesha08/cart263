"use strict";

/********************************************************************

Pixel Painter
In class exercise w/Pippin Barr

*********************************************************************/

window.onload = setup;

function setup() {
  console.log("page is setup");

for (let i = 0; i < 1000; i++) {
    let pixel = document.createElement('div');
    pixel.setAttribute('class','pixel');
    pixel.addEventListener('mouseover', paint);
    pixel.addEventListener('click', remove);
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
}

function remove(e){
  let pixel = e.target;
  pixel.style.opacity = '0';
}
