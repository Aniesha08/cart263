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
let $modal1 = $("#myModal1");
let $modal2 = $("#myModal2");

// Get the image that opens the modal
let $imageClick1 = $("#img_click1"); // edited
let $imageClick2 = $("#img_click2"); // edited

let $comment1 = $("#comment1");
let $comment2 = $("#comment2");

// Get the <span> element that closes the modal
let $span1 = $("#close1");
let $span2 = $("#close2");

// When the user clicks the image, open the modal
$imageClick1.click(function() {
  console.log("clicked");
  $modal1.css("display", "block")
});

$imageClick2.click(function() {
  console.log("clicked");
  $modal2.css("display", "block")
});

$comment1.click(writeComment1);
$comment2.click(writeComment2);

// When the user clicks on <span> (x), close the modal
$span1.click(function() {
  $modal1.css("display", "none")
});

$span2.click(function() {
  $modal2.css("display", "none")
});

} // end of toggleModal


function writeComment1() {
  // take the value that is being typed in the input field
  let $text1 = $("#myText1").val();
  let $commentDisplay1 = $("#display_comment1")
  // and display the comment in the display comment paragraph
  $commentDisplay1.css("margin-bottom", "1em");
  $commentDisplay1.append($text1);
  // clear the comment that was typed in the input after submitting the comment
  $('input').val('');
} // end of writeComment

function writeComment2() {
  // take the value that is being typed in the input field
  let $text2 = $("#myText2").val();
  let $commentDisplay2 = $("#display_comment2")
  // and display the comment in the display comment paragraph
  $commentDisplay2.css("margin-bottom", "1em");
  $commentDisplay2.append($text2);
  // clear the comment that was typed in the input after submitting the comment
  $('input').val('');
} // end of writeComment
