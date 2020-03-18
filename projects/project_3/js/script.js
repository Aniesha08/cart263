"use strict";

/*****************
Social Media
Aniesha Sangarapillai
This is a template. You must fill in the title,
author, and this description to match your project!
******************/

$(document).ready(setup);
let commentNum = 1;

function setup(){
  logIn();
  toggleModal();
} // end of setup

function logIn(){
  // variables for username and password text fields
  let $username = $("#username");
  let $password = $("#password");

  // let userlength = $("#username").val().length;
  //
  // let $login = $(login_button);

  // if the user clicks on the username text field, clear the text field
  $username.click(function() {
    $username.val("");
  });

  // if the user clicks on the password text field, clear the text field
  $password.click(function() {
    $password.val("");
  });

  // if (userlength > 6){
  //    $login.css("background-color", "green");
  //  }
}

function toggleModal(){
// Get the modal
let $modal1 = $("#myModal1");
let $modal2 = $("#myModal2");

// Get the image that opens the modal
let $imageClick1 = $("#img_click1");
let $imageClick2 = $("#img_click2");

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
$comment2.click(writeComment1);

// When the user clicks on <span> (x), close the modal
$span1.click(function() {
  $modal1.css("display", "none")
});

$span2.click(function() {
  $modal2.css("display", "none")
});

} // end of toggleModal


// function writeComment1() {
//   // take the value that is being typed in the input field
//   let $text1 = $("#myText1").val();
//   let $commentDisplay1 = $("#display_comment1")
//   // and display the comment in the display comment paragraph
//   $commentDisplay1.css("margin-bottom", "1em");
//   $commentDisplay1.append($text1);
//   // clear the comment that was typed in the input after submitting the comment
//   $('input').val('');
// } // end of writeComment


function writeComment1() {
  // for (let i = 1; i < 3; i++){
    // take the value that is being typed in the input field
    let $text = $(`#myText${commentNum}`).val();
    let $commentDisplay1 = $(`#display_comment${commentNum}`);

    if (commentNum === 1){
      console.log($text);
    }
    // and display the comment in the display comment paragraph
    $commentDisplay1.css("margin-bottom", "1em");
    $commentDisplay1.append($text);
    // clear the comment that was typed in the input after submitting the comment
    $('input').val('');
    if (commentNum < 3) {
      commentNum++;
    }
} // end of writeComment
