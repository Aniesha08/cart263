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
  // variable for password text field which counts the length of its characters
  let $password = $("#password").val();
  // variable for login button
  let $login = $("#login_button");

  // When the user presses on the keyup...
  $("#password").keyup(function() {
    // increase the length value of the password character typed
    $password++;
    console.log($password);
    // if the user typed less that 6 characters for the password...
    if ($password < 6){
      // disable the click function of the login button
      $login.off("click");
    } // end of < 6 if statement

    // if the user typed greater than 6 characters for the password...
    if ($password >= 6){
      // change the background color of the login to button to suggest that it is clickable
      $login.css("background-color", "#5aa8f9;");
      // enable the click function for the login button
      $login.click(function() {
        // path for the login button to go to instagram account page
        $(location).attr('href', 'https://aniesha08.github.io/cart263/projects/project_3/');
      }); // end of login click function
    } // end of > 6 if statement
  }); // end of key up function

} //end of logIn

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
