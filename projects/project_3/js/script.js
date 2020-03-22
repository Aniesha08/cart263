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
  // End code by Pippin
  // If an option is selected from the dropdown, perform the writeComment function
  $('.dropdown-content p').on('click', writeComment);

  // Disable resizable and draggable property from modal
  $(".ui-dialog").resizable('disable').removeClass('ui-state-disabled');
  $(".ui-dialog").draggable('disable').removeClass('ui-state-disabled');
} // End of setup


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
} // end of toggleModal

function writeComment() {
  // Code re-edited based on Sabine guidance
  //SABINE: this.className == the class of the comment button
  let theOption = this.className;
  console.log(this.className);
  //the modal associated
  let theButtonIdNumber = theOption.substring(7);
  console.log(theButtonIdNumber);
  // SABINE: get the modal box - as the comments are appended to this modal
  let theModalBox = $("#modal"+theButtonIdNumber);
  console.log(theModalBox);
  // let modalName = "#modal"+theButtonIdNumber;
  // console.log(modalName);

  // define the text of each comment
  // let theText = $(modalName+" .comment"+theButtonIdNumber).text();

  //get the selected comment to append:
  let theText = $("#modal"+theButtonIdNumber+" .comment"+theButtonIdNumber).text();
  // let theText = $(".comment"+theButtonIdNumber).text();

  // the comment will be appended to display comment paragraph
  // let $commentDisplay = $("#modal"+theButtonIdNumber+ ".display_comment");
  let $commentDisplay = $(".display_comment");
  console.log(theText);

  // and display the comment in the display comment paragraph
  $commentDisplay.css("margin-bottom", "1em");
  $commentDisplay.append(theText+"<br/>");
} // end of writeComment
