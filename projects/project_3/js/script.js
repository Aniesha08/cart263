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

  // Code by Pippin
  // For every image div
  $('.image').each(function() {
    // Find the modal child div and turn it into a dialog
    let $dialog = $(this).children('.modal').dialog({
      autoOpen: false,
      modal: true
    });
    // Store the dialog as data in the image div so we can use it later
    $(this).data('modal', $dialog);
  });
  // Listen for clicks on the image div
  $('.image').on('click', toggleModal);
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
  // Get the modal dialog from this image div's data
  let $dialog = $(this).data('modal');
  // Open it
  $dialog.dialog('open');

  // let $comment1 = $("#comment1");
  // let $comment2 = $("#comment2");
  // let $comment3 = $("#comment3");
  // let $comment4 = $("#comment4");
  //
  // $comment1.click(writeComment);
  // $comment2.click(writeComment);
  // $comment3.click(writeComment);
  // $comment4.click(writeComment);
  let $commentButton = $(".comment_button");
  $commentButton.click(writeComment);

  $commentButton.each(function() {
    $commentButton.click(writeComment);
  }


} // end of toggleModal

function writeComment() {
  console.log("button clicked");
  // take the value that is being typed in the input field
  let $text = $(`#myText${commentNum}`).val();
  let $commentDisplay1 = $(`#display_comment${commentNum}`);

  console.log($text);

  // and display the comment in the display comment paragraph
  $commentDisplay1.css("margin-bottom", "1em");
  $commentDisplay1.append($text);
  // clear the comment that was typed in the input after submitting the comment
  $('input').val('');
  if (commentNum > 0) {
    commentNum++;
  }
} // end of writeComment
