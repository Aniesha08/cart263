/*

Condiments
Pippin Barr

Chooses random words from local JSON data to fill out a sentence
describing a condiment based on cats and rooms... weird.

Uses:

Corpora
https://github.com/dariusk/corpora

Assignment Completed by: Aniesha Sangarapillai

*/

$(document).ready(function() {
  // display the condiment description when the page is loaded
  loadCondiment();

  // if the user clicks on the page (body), update the condiment description
  $("body").click(function (event) {
    loadCondiment();
    // empty the body so that the phrase does not appear one after another all-tougether
    $('body').empty();
    // console.log("body clicked");
  });

});

function loadCondiment(){
  // load the data we're going to use to get random words.
  //
  // For that we use jQuery's .getJSON() function, which we give
  // the location of the file, and a function to call when the data
  // is available...
  $.getJSON('data/data.json')
  .done(gotData)
  .fail(dataError);
}

// gotData (data)
//
// This function gets called by getJSON when the data has been loaded.
// The data itself will be in the 'data' argument as a JavaScript object.
function gotData(data) {
  // Now we select random elements from the three arrays inside
  // our JSON to get a random condiment, cat, and room, celebrity and occupation.
  // Then we add those words onto our page by setting the text of the appropriate span.

  // First the condiment
  // Get a random condiment from the condiments array in the JSON
  let condiment = getRandomElement(data.condiments);
  // Assume it's singular
  let verb = 'is';
  // Check if the last latter of the condiment is an 's'
  if (condiment.charAt(condiment.length - 1) === 's') {
    // If so, assume it's plural (this is a flawed assumption)
    verb = 'are';
  }

  // Now the cat
  let cat = getRandomElement(data.cats);

  // Same again for room
  let room = getRandomElement(data.rooms);

  // celebrities
  let celebrity = getRandomElement(data.celebrities);

  // occupations
  let occupation = getRandomElement(data.occupations);

  // CHECK VOWELS
  // define the vowels by
  // storing the vowels in an array
  let vowels = ["a","e","i","o","u"];

  // set default indefinite article
  // made sure that the indefinite cat, room and occupation first have "a" in front of them if the conditions don't apply
  let indefiniteCat = "a";
  let indefiniteRoom = "a";
  let indefiniteOccupation = "a";

  // created a for loop to go through the vowels
  for(let i=0; i< vowels.length; i++) {
    // need to convert the cats names to read as lowercase first
    // if the first letter of the cat starts with a vowel, change the article to "an"
    if (cat.charAt(0).toLowerCase() === vowels[i]) {
      indefiniteCat = 'an';
      console.log("indef cat");
    }
    // if the first letter of the room starts with a vowel, change the article to "an"
    else if (room.charAt(0) === vowels[i]) {
      indefiniteRoom = 'an';
      console.log("indef room");
    }
    // if the first letter of the occupation starts with a vowel, change the article to "an"
    else if (occupation.charAt(0) === vowels[i]) {
      indefiniteOccupation = 'an';
      console.log("indef occupation");
    }
  } // end of for loop

  // Now we can construct our description with a template string
  // We have the basic structure of a sentence and we substitute in the
  // values we've just calculated
  let description = `${condiment} ${verb} like ${indefiniteCat} ${cat} in ${indefiniteRoom} ${room} with ${celebrity} and ${indefiniteOccupation} ${occupation}.`;

  // Finally, we add it to the page and hey presto!
  $('body').append(description);
}


// dataError()
//
// Called if the JSON does not load for some reason.
// Reports the error to the console.
function dataError(request, text, error) {
  console.error(error);
}

// getRandomElement ()
//
// Returns a random element from the arrays of data from the JSON file
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
