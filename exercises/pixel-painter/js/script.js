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
    document.body.appendChild(pixel);
  }

}

function paint(e){
  let pixel = e.target;
  pixel.style.backgroundColor = 'lightblue';
  setTimeout(resetPixel, 1000, pixel);

}

function resetPixel(pixel){
  pixel.style.backgroundColor = 'black';
}
