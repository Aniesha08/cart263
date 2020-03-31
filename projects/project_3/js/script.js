"use strict";

/*****************
Social Media
Aniesha Sangarapillai
This is a template. You must fill in the title,
author, and this description to match your project!
******************/

$(document).ready(setup);
let followersNum = 50;

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

  emotionsBar();

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
  // DEFINE SELECTED COMMENT & RESPONSE
  // Code re-edited based on Sabine's guidance via ZOOM (March 23)
  // get the comment box of the selected comment
  let commentBox = $(this).parent().attr("id"); // with Sabine

  // get the number associated with the comment box
  let number = commentBox.substring(10); // with Sabine

  // define the text from the selected comment to append:
  let comment = $(this).text(); // with Sabine
  // define the text from the child element (the response) that comes right after the selected comment tag
  let response = $(this).next().text();
  // END OF DEFINE SELECTED COMMENT & RESPONSE


  // DEFINE USER IMAGE
  // define the user image in front of comment and response
  let user = "<img class='user_image' src='https://aniesha08.github.io/cart263/projects/project_3/assets/images/user.png'>";
  let responder = "<img class='user_image' src='https://aniesha08.github.io/cart263/projects/project_3/assets/images/responder.png'>";
  // END OF USER IMAGE


  // DEFINE EMOJIS
  // get the number of the emoji attribute from the selected comment
  let emojiNumber = $(this).attr("emoji");

  // get the src of the emoji that is contained in the selected comment
  // by finding the image tag that contains the class ".comment_emoji"+emojiNumber
  let commentEmoji = $(this).find(".comment_emoji"+emojiNumber).attr('src');
  let displayCommentEmoji = "<img class='emoji' src="+commentEmoji+">";

  // get the src of the emoji that is contained in the RESPONSE of the selected comment
  // by targeting the child element that comes next from the selected comment1
  // and finding the image tag that contains the class ".response_emoji"+emojiNumber
  let responseEmoji = $(this).next().find(".response_emoji"+emojiNumber).attr('src');
  let displayResponseEmoji = "<img class='emoji' src="+responseEmoji+">";
  // END OF EMOJIS



  // DISPLAY COMMENT & RESPONSE
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
  $commentDisplay.append(user + "&nbsp;" + comment + displayCommentEmoji);
  $responseDisplay.append(responder + "&nbsp;" + response + displayResponseEmoji);
  typeWriter(response, $responseDisplay);
  // END OF DISPLAY COMMENT & RESPONSE


  // POINTS
  // Get the points attribute for the comments
  let points = $(this).attr("point");
  // pass the points to the emotionsPoints() function
  emotionsBar(points);

} // end of writeComment


// TYPE WRITER effect from: W3schools
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_typewriter
function typeWriter(response, $responseDisplay){
  let i = 0;
  let speed = 100;

  (function addLetter() {
    if (i < response.length) {
      $responseDisplay += response.charAt(i);
      i++;
      console.log(response.charAt(i));
      setTimeout(addLetter, speed);
    }
  })();
} // end of typeWriter


function emotionsBar(points){
  // define where to display the followers number
  let followersIncrease = $("#followers_number").text(followersNum);

  // if the points attribute == point attribute value (depending on the emotion), increase the value in the progress bar for each emotion with the value given
  // HAPPINESS POINTS
  // if a happy comment is selected...
  if (points == 1){
    // increase the followers number by 1
    followersNum = followersNum+1;
    // display the updated followers number
    followersIncrease = $("#followers_number").text(followersNum);

    // get the current value for happiness
    let happyValue = $("#happy_progress").progressbar( "option", "value" );
    // increase its value by 5 in the happiness progressbar
    $("#happy_progress").progressbar({
      value: happyValue+10
    });
    // if the user answered 6 questions happily, they get more followers
    if (happyValue >= 50){
      alert("win followers");
    }
  } // end of points 1


  // INSPIRATION POINTS
  // if an inspiration comment is selected...
  if (points == 2){
    // increase the followers number by 3
    followersNum = followersNum+3;
    // display the updated followers number
    followersIncrease = $("#followers_number").text(followersNum);

    // get the current value for inspiration
    let inspirationValue = $("#inspiration_progress").progressbar( "option", "value" );
    // increase its value by 10 in the inspiration progressbar
    $("#inspiration_progress").progressbar({
      value: inspirationValue+10
    });
    // if the user answered 6 questions inspiringly, they get more followers
    if (inspirationValue >= 50){
      alert("win followers");
    }
  } // end of points 2


  // ENCOURAGEMENT POINTS
  // if an encouraging comment is selected...
  if (points == 3){
    // increase the followers number by 5
    followersNum = followersNum+5;
    // display the updated followers number
    followersIncrease = $("#followers_number").text(followersNum);

    // get the current progressbar value for encouragement
    let encouragementValue = $("#encouragement_progress").progressbar( "option", "value" );
    // increase its value by 10 in the encouragement progressbar
    $("#encouragement_progress").progressbar({
      value: encouragementValue+10
    });
    // if the user answered 6 questions inspiringly, they get more followers
    if (encouragementValue >= 50){
      alert("win followers");
    }
  } // end of points 3


  // DISAPPROVAL POINTS
  // if a disapproving comment is selected...
  if (points == 4){
    // increase the followers number by 10
    followersNum = followersNum+10;
    // display the updated followers number
    followersIncrease = $("#followers_number").text(followersNum);

    // get the current progressbar value for disapproval
    let disapprovalValue = $("#disapproval_progress").progressbar("option", "value");
    // increase its value by 20 in the disapproval progressbar
    $("#disapproval_progress").progressbar({
      value: disapprovalValue+20
    });

    // if the user answered 5 questions disapprovingly, deactivate their account
    if (disapprovalValue >= 75){
      $(location).attr('href', 'https://aniesha08.github.io/cart263/projects/project_3/deactivate.html');
    }
  } // end of points 4


  // JEALOUSY POINTS
  // if a jealous comment is selected...
  if (points == 5){
    // increase the followers number by 20
    followersNum = followersNum+20;
    // display the updated followers number
    followersIncrease = $("#followers_number").text(followersNum);

    // get the current progressbar value for jealous
    let jealousyValue = $("#jealousy_progress").progressbar("option", "value");
    // increase its value by 25 in the jealousy progressbar
    $("#jealousy_progress").progressbar({
      value: jealousyValue+25
    });

    // if the user answered 4 questions jealously, deactivate their account
    if (jealousyValue >= 75){
      $(location).attr('href', 'https://aniesha08.github.io/cart263/projects/project_3/deactivate.html');
    }
  } // end of points 5


  // ANGER POINTS
  // if an angry comment is selected...
  if (points == 6){
    // increase the followers number by 30
    followersNum = followersNum+30;
    // display the updated followers number
    followersIncrease = $("#followers_number").text(followersNum);

    // get the current progressbar value for anger
    let angerValue = $( "#anger_progress" ).progressbar("option", "value");
    // increase its value by 33.34 in the anger progressbar
    $("#anger_progress").progressbar({
      value: angerValue+33.34
    });

    // if the user answered 3 questions angrily, deactivate their account
    if (angerValue >= 66.68){
      $(location).attr('href', 'https://aniesha08.github.io/cart263/projects/project_3/deactivate.html');
    }
  } // end of points 5
} // end of emotionsPoints
