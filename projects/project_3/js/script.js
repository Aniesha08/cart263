"use strict";

/*****************
Social Media
Aniesha Sangarapillai
This is a template. You must fill in the title,
author, and this description to match your project!
******************/

$(document).ready(setup);

// variable for emotions progressbar
let happiness = $("#happy_progress");

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


  $( "#happy_progress" ).progressbar({
    value: 0
  });

  $( "#inspiration_progress" ).progressbar({
    value: 0
  });

  $( "#encouragement_progress" ).progressbar({
    value: 0
  });

  $( "#disapproval_progress" ).progressbar({
    value: 0
  });

  $( "#jealousy_progress" ).progressbar({
    value: 0
  });

  $( "#anger_progress" ).progressbar({
    value: 0
  });

  emotionsPoints();

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
  // Code re-edited based on Sabine's guidance via ZOOM (March 23)
  // get the comment box of the selected comment
  let commentBox = $(this).parent().attr("id"); // with Sabine

  // get the number associated with the comment box
  let number = commentBox.substring(10); // with Sabine

  let emoji = $("img.emoji").html();
  console.log(emoji);

  // define the text from the selected comment to append:
  let theText = $(this).text() + emoji; // with Sabine
  console.log(theText);
  // define the text from the child element (the response) that comes right after the selected comment tag
  let response = $(this).next().text();

  // the comment will be displayed in the display comment paragraph
  let $commentDisplay = $("#display_comment"+number); // with Sabine
  // the response will be displayed right after the comment in the display response paragraph
  let $responseDisplay = $("#display_response"+number);

  // css styling for the comments
  $commentDisplay.css({
   'margin-bottom' : '0.5em',
   'font-size' : '14px'
  });
  // css styling for the responses
  $responseDisplay.css({
   'margin-bottom' : '1em',
   'margin-left' : '45px',
   'font-size' : '14px',
   'font-style' : 'italic'
  });

  // with the empty(), only 1 comment and response will be displayed on the display paragraphs
  // all won't display one after another
  $commentDisplay.empty();
  $responseDisplay.empty();
  // and finally, append the comment & response with the profile image of the user & profile owner
  $commentDisplay.append("<img class='user_image' src='https://aniesha08.github.io/cart263/projects/project_3/assets/images/user.png'>" + "&nbsp;" + theText);
  $responseDisplay.append("<img class='user_image' src='https://aniesha08.github.io/cart263/projects/project_3/assets/images/responder.png'>" + "&nbsp;" + response);

  // POINTS
  // Get the points attribute for the comments
  let points = $(this).attr("point");
  // let response = $(".response"+points).text();
  // console.log(response);
  // pass the points to the emotionsPoints() function
  emotionsPoints(points);

} // end of writeComment


function emotionsPoints(points){
  // if the points attribute == point attribute value (depending on the emotion), increase the value in the progress bar for each emotion with the value given
  if (points == 1){
    // get the current value for happiness
    let happyValue = $("#happy_progress").progressbar( "option", "value" );
    // increase its value by 5 in the happiness progressbar
    $("#happy_progress").progressbar({
        value: happyValue+5
    });

  } // end of points 1


  if (points == 2){
    // get the current value for inspiration
    let inspirationValue = $("#inspiration_progress").progressbar( "option", "value" );
    // increase its value by 10 in the inspiration progressbar
    $("#inspiration_progress").progressbar({
        value: inspirationValue+10
    });
  } // end of points 2

  if (points == 3){
    // get the current value for encouragement
    let encouragementValue = $("#encouragement_progress").progressbar( "option", "value" );
    // increase its value by 10 in the encouragement progressbar
    $("#encouragement_progress").progressbar({
        value: encouragementValue+10
    });
  } // end of points 3

  if (points == 4){
    // get the current value for disapproval
    let disapprovalValue = $("#disapproval_progress").progressbar("option", "value");
    // increase its value by 20 in the disapproval progressbar
    $("#disapproval_progress").progressbar({
        value: disapprovalValue+20
    });
    if (disapprovalValue == 100){
      alert("greater than 100");
    }
  } // end of points 4

  if (points == 5){
    // get the current value for jealous
    let jealousyValue = $("#jealousy_progress").progressbar("option", "value");
    // increase its value by 25 in the jealousy progressbar
    $("#jealousy_progress").progressbar({
        value: jealousyValue+25
    });
    console.log(jealousyValue);
    if (jealousyValue == 75){
      alert("greater than 75");
    }
  } // end of points 5

  if (points == 6){
    // get the current value for anger
    let angerValue = $( "#anger_progress" ).progressbar("option", "value");
    // increase its value by 30 in the anger progressbar
    $("#anger_progress").progressbar({
        value: angerValue+30
    });
  } // end of points 5
} // end of emotionsPoints
