"use strict";

/*****************

Social Media
Aniesha Sangarapillai

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

$(document).ready(setup);

function setup(){
  toggleModal();
} // end of setup



function toggleModal(){
// Get the modal
let $modal = $(".myModal");

// Get the image that opens the modal
let $imageClick = $(".img_click"); // edited

let $comment = $(".comment");

// Get the <span> element that closes the modal
let $span = $(".close");

// When the user clicks the image, open the modal
$imageClick.click(function() {
  console.log("clicked");
  $modal.css("display", "block")
});

$comment.click(writeComment);

// When the user clicks on <span> (x), close the modal
$span.click(function() {
  $modal.css("display", "none")
});

} // end of toggleModal



function writeComment() {
  // take the value that is being typed in the input field
  let $text = $(".myText").val();
  let $commentDisplay = $(".display_comment")
  // and display the comment in the display comment paragraph
  $commentDisplay.css("margin-bottom", "1em");
  $commentDisplay.append($text);
  // clear the comment that was typed in the input after submitting the comment
  $('input').val('');
} // end of writeComment
