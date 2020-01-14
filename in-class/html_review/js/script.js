"use strict";

//window.onload = setup;

window.addEventListener('load',setup);
function setup() {
//let mainHeading = document.getElementById('main-heading');
//console.log(mainHeading);
// mainHeading will contain the HTML element with an id of "main-heading"
// or null if there is no such element

//let imagesDiv = document.getElementById('images');
//let gameIcons = imagesDiv.getElementsByClassName('game-icon');
// gameIcons contains an array (kind of) containing all the elements
// with a class of "game-icon"
// If there aren't any the (kind of) array will have a .length of 0
//for (let i = 0; i < gameIcons.length; i++) {
//  console.log(gameIcons[i]);
//}

//let images = document.getElementsByTagName('img');
// images contains an array (kind of) containing all the "img" elements on the page
// If there aren't any the (kind of) array will have a .length of 0
//for (let i = 0; i < images.length; i++) {
//console.log(images[i]);
//}

//let heading = document.getElementById('main-heading');
//heading.style.color = 'yellow';
//heading.style.backgroundColor = 'black';

//setTimeout(enlargePage,2000);
//setInterval(enlargePage,10);

//document.addEventListener('click',enlargePage); // only enlarges when you click on screen
let heading = document.getElementById('main-heading');
//heading.addEventListener('click', enlargePage);

document.addEventListener('keydown', enlargePage);

heading.addEventListener('click', addImage);

}

//function enlargePage() {
//  document.body.style.fontSize = '3em';
//}

function enlargePage() {
  // Get the style properties of the body with window.getComputedStyle()
  //let heading = document.getElementById('main-heading');
  let style = window.getComputedStyle(document.body);
  //let style = window.getComputedStyle(heading);
  let currentSize = parseFloat(style.fontSize);
  currentSize += 5;
  document.body.style.fontSize = `${currentSize}px`;
}

//function enlargePage(e) {
  //if (e.keyCode === 32) { // Only enlarge if they pressed space
  //  let style = window.getComputedStyle(document.body);
  //  let currentSize = parseFloat(style.fontSize);
  //  currentSize += 5;
  //  document.body.style.fontSize = `${currentSize}px`;
//  }
//}

function addImage(e){
let newImage = document.createElement('img');
newImage.setAttribute('src', 'https://www.pippinbarr.com/assets/images/game_icons/lets-play-ancient-greek-punishment-chess-edition-300x300.png');
newImage.setAttribute('alt', 'Chess position in Ancient Greek Punishment, Chess Edition');
newImage.setAttribute('class', 'game-icon');
let imagesDiv = document.getElementById("images");
imagesDiv.appendChild(newImage);
}
