console.log("LOTR homework js file is connected");
console.log("HINT: Click on the 'Elements' tab to see the elements that you are creating");
console.log("---------------")
// ==============================
//       Dramatis Personae
// ==============================

const hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

const buddies = [
  "Gandalf the Grey",
  "Legolas",
  "Gimli",
  "Strider",
  "Boromir"
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  "The-Shire",
  "Rivendell",
  "Mordor"
];

// ====================================
//           Chapters
// ====================================

// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {

  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!

  console.log("Trying to make middle earth.");

  // 1. create a section tag with an id of middle-earth

  let $middleEarthSection = $('<section id="middleEarth"></section>');
  console.log($middleEarthSection);

  // 2. append the section to the body of the DOM.

  $('body').append($middleEarthSection);

  // 3. use a for loop to iterate over the lands array that does the following:

  for(i=0; i < lands.length; i++) {
    let $article = $('<article/>');
    let $articleID = $article.attr('id', lands[i]);
    let $articleIDHed = $articleID.append('<h1>' + lands[i] + '</h1>');
    $middleEarthSection.append($articleIDHed);
  }

  //   3a. creates an article tag (there should be one for each land when the loop is done)



  //   3b. gives each land article an `id` tag of the corresponding land name

  //   3c. includes an h1 with the name of the land inside each land article

  //   3d. appends each land to the middle-earth section

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {

  console.log('Make hobbits');

  // 1. display an unordered list of the hobbits in the shire.

  let $hobbitList = $('<ul/>');
  $('#The-Shire').append($hobbitList);


  for (i = 0; i < hobbits.length; i++) {
    let $hobbitsID = $('<li>').attr('class', 'hobbit');
    let $hobbitsIDName = $hobbitsID.append(hobbits[i]);
    $hobbitList.append($hobbitsIDName);
  }

  console.log($hobbitList);

  // 2. give each hobbit a class of "hobbit"

  // hint: create a 'ul' outside the loop upon which to append the 'li's

  // hint: get 'The-Shire' by using its id

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {

  // 1. create an empty div with an id of 'the-ring'

  let $oneRing = $('<div id="the-ring" />');
  console.log($oneRing); 

  // 2. add the ring as a child of Frodo

  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .

  let $hobbitList = $('.hobbit').toArray();
  console.log($hobbitList);

  let $frodo = $hobbitList[0];
  $frodo.append($oneRing)

  // when you think you have given Frodo the ring, check in your Elements tab

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {

  // 1. display an unordered list of baddies in Mordor

  // 2. give each of the baddies a class of "baddy"

  // 3. remember to append them to Mordor

  let $baddyList = $('<ul/>');
  $('#Mordor').append($baddyList);


  for (i = 0; i < baddies.length; i++) {
    let $badID = $('<li>').attr('class', 'baddy');
    let $badIDName = $badID.append(baddies[i]);
    $baddyList.append($badIDName);
  }

  console.log($baddyList);


};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {

  // 1. create an aside tag and append it to middle-earth below mordor

  // 2. display an unordered list of buddies in the aside

  // 3. give each of the buddies a class of "buddy"

  let $pals = $('<ul/>');

  let $buddyList = $('<aside/>').append($pals);

  $('#middleEarth').append($buddyList);

  for (i = 0; i < buddies.length; i++) {
      let $palID = $('<li>').attr('class', 'buddy');
      let $palIDName = $palID.append(buddies[i]);
      $pals.append($palIDName);
    }

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============
const leaveTheShire = () => {

  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell

  let $hobbits = $('#The-Shire').children('ul')
  console.log($hobbits);
  $('#Rivendell').append($hobbits);

  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {

  // 1. change the buddy 'Strider' textnode to "Aragorn"

  let $buddyArray = $('.buddy').toArray();
  console.log($buddyArray[3].innerText);
  $buddyArray[3].innerText = 'Aragorn';


  // hint: You can get a list of elements by tag name, such as 'aside'

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {

  // 1. create a new div with an id 'the-fellowship'
 
  let $theFellowship = $('<div id="the-fellowship" />');

  // 2. add an h1 with the text 'The Fellowship' to this new div  

  $theFellowship.append('<h1>The Fellowship</h1>');

  // 3. append the fellowship to middle-earth

  let $middleEarth = $('#middleEarth');
  $middleEarth.append($theFellowship);

  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'

  let $hobbits = $('.hobbit')
  console.log($hobbits);
  let $buddies = $('.buddy')
  console.log($buddies);
  let $fellowshipList = $('<ul />');
  $fellowshipList.append($hobbits);
  $fellowshipList.append($buddies);
  $theFellowship.append($fellowshipList);

  console.log($theFellowship);


};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {

  // 1. change the 'Gandalf' textNode to 'Gandalf the White'

  $gandalf = $('li:contains("Gandalf")');
  $gandalf.text('Gandalf the White');
  console.log($gandalf);

  // 2. add a class "the-white" to this element

  $gandalf.addClass('the-white');

  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {

  // 1. create a pop-up alert that the horn of gondor has been blown

  $alert = alert('Somebody blowin that old horn o Gondor');
  $('#middleEarth').append($alert);

  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name

  $boromir = $('li:contains("Boromir")');
  console.log($boromir);
  $boromir.css('text-decoration', 'line-through');

  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page

  $urukHai = $('li:contains("Uruk")');
  console.log($urukHai);
  $urukHai.remove();

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {

  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)

  $frodo = $('li:contains("Frodo")');
  $samwise = $('li:contains("Samwise")');
  console.log($frodo, $samwise);
  $('#Mordor').append($frodo);
  $('#Mordor').append($samwise);


  // 2. add a div with an id of 'mount-doom' to Mordor

  $('#Mordor').append('<div id="mount-doom" />');

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {

  // 1. Create a div with an id of 'gollum' and add it to Mordor

  $gollum = $('<div id="gollum" />')
  $('#Mordor').append($gollum);

  // 2. Move the ring from Frodo and give it to Gollum

  $gollum.append($('#the-ring'));

  // 3. Move Gollum into Mount Doom

  $('#mount-doom').append($gollum);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {

  // 1. remove Gollum and the Ring from the DOM

  // 2. remove all the baddies from the DOM

  // 3. Move all the hobbits back to the shire

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

$(() => {

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);

});
