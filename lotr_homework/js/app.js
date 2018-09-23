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

  console.log("Makin\' Middle Earth.");

  // 1. create a section tag with an id of middle-earth

  const $section = $('<section id="middle-earth"/>');

  // 2. append the section to the body of the DOM.

  $('body').prepend($section);

  // 3. use a for loop to iterate over the lands array that does the following:

  for (let i = 0; i < lands.length; i++){

    //   3a. creates an article tag (there should be one for each land when the loop is done)
   
    const $article = $('<article/>');

    //   3b. gives each land article an `id` tag of the corresponding land name
   
    $article.attr('id', lands[i]);

    //   3c. includes an h1 with the name of the land inside each land article
    
    const $h1 = $('<h1/>')

    $h1.text(lands[i]);

    $article.append($h1);

    //   3d. appends each land to the middle-earth section

    $section.append($article);
  }

};

// makeMiddleEarth();

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".




// ============
// Chapter 2
// ============
const makeHobbits = () => {

  console.log('Makin\' hobbits');

  // 1. display an unordered list of the hobbits in the shire.

  // 2. give each hobbit a class of "hobbit"

  // hint: create a 'ul' outside the loop upon which to append the 'li's

  // hint: get 'The-Shire' by using its id

  let $ul = $('<ul/>');

  for (let i = 0; i < hobbits.length; i++){

    const $li = $('<li class="hobbit"/>');

    $li.text(hobbits[i]);

    $ul.append($li);
  }

  $('#The-Shire').append($ul);

};

// makeHobbits();

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".




// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {

  console.log('Keep it Secret, Keep it Safe');

  // 1. create an empty div with an id of 'the-ring'

  const oneRing = $('<div/>');
  oneRing.attr('id','the-ring');

  // 2. add the ring as a child of Frodo
  
  $('li:contains("Frodo")').append(oneRing);


  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .

  // when you think you have given Frodo the ring, check in your Elements tab

};

// keepItSecretKeepItSafe();

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".




// ============
// Chapter 4
// ============
const makeBaddies = () => {

  console.log('Makin\' the baddies');

// 1. display an unordered list of baddies in Mordor

// 2. give each of the baddies a class of "baddy"

// 3. remember to append them to Mordor

 $ul = $('<ul/>');

  for (let i = 0; i < baddies.length; i++){

    const $li = $('<li class="baddy"/>');

    $li.text(baddies[i]);

    $ul.append($li);
  }

  $('#Mordor').append($ul);


};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..




// ============
// Chapter 5
// ============
const makeBuddies = () => {

  console.log('Makin\' the buddies');

  // 1. create an aside tag and append it to middle-earth below mordor

  const $aside = $('<aside/>');

  // By below Mordor I'm assuming you mean below in the DOM tree? (Not the map?)
  $('#Mordor').after($aside);

  // 2. display an unordered list of buddies in the aside

  // 3. give each of the buddies a class of "buddy"

  $ul = $('<ul/>');

  for (let i = 0; i < buddies.length; i++){

    const $li = $('<li class="buddy"/>');

    $li.text(buddies[i]);

    $ul.append($li);
  }

  $aside.append($ul);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".




// ============
// Chapter 6
// ============
const leaveTheShire = () => {

  console.log('Leavin\' the Shire');

// 1. grab the hobbits (the ul in which they reside) and move them to Rivendell

  const $ul = $('ul').has('.hobbit');

  $('#Rivendell').append($ul);


// hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"




// ============
// Chapter 7
// ============
const beautifulStranger = () => {

  console.log("Beautiful Stranger");

// 1. change the buddy 'Strider' textnode to "Aragorn"

  let $aragorn = $('li:contains("Strider")');

  $aragorn.text("Aragorn");

// hint: You can get a list of elements by tag name, such as 'aside'

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"



// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {

  console.log("...AND MY AXE!!");

// 1. create a new div with an id 'the-fellowship'

let $theFellowship = $('<div id="the-fellowship"/>');

// 2. add an h1 with the text 'The Fellowship' to this new div
let $h1 = $('<h1/>');
$h1.text("The Fellowship");

$theFellowship.append($h1);

// 3. append the fellowship to middle-earth

$('#middle-earth').append($theFellowship);

// 4. add the unordered lists of hobbits and buddies to 'the-fellowship'


$theFellowship.append($('ul').has('li.hobbit'));
$theFellowship.append($('ul').has('li.buddy'));

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"




// ============
// Chapter 9
// ============
const theBalrog = () => {

  console.log("Fly, you FOOLS!");

// 1. change the 'Gandalf' textNode to 'Gandalf the White'

  let $gandalf = $('.buddy:contains("Gandalf the Grey")');
  $gandalf.text("Gandalf the White");

// 2. add a class "the-white" to this element

  $gandalf.attr('class', 'buddy the-white');

// 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border


};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"




// ============
// Chapter 10
// ============
const hornOfGondor = () => {

  console.log("There is darkness there that never sleeps.");

// 1. create a pop-up alert that the horn of gondor has been blown

  alert("The Horn of Gondor! \n \n ...Boromir!");

// 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name

  let $boromir = $('li:contains("Boromir")');
  $boromir.css('text-decoration', 'line-through');

// 3. Tricky: Remove the Uruk-Hai from the Baddies on the page

  let $urukHai = $('li:contains("The Uruk-hai")');
  $urukHai.remove();

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"




// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {

  console.log("There's some good in this world, Mr. Frodo, and it's worth fighting for.");

// 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)

  let $frodo = $('li:contains("Frodo")');
  let $sam = $('li:contains("Samwise")');

  $('#Mordor').append($frodo);
  $('#Mordor').append($sam);

// 2. add a div with an id of 'mount-doom' to Mordor

  $('h1:contains("Mordor")').after('<div id="mount-doom"/>');

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"




// ============
// Chapter 12
// ============
const weWantsIt = () => {

  console.log("We wants it, we needs it. Must have the precious. They stole it from us. Sneaky little hobbitses. Wicked, tricksy, false!");

// 1. Create a div with an id of 'gollum' and add it to Mordor

  let $gollum = $('<div id="gollum"/>');
  $gollum.text("Gollum");
  $('#Mordor').append($gollum);

// 2. Move the ring from Frodo and give it to Gollum

  let $oneRing = $('#the-ring');
  $gollum.append($oneRing);

// 3. Move Gollum into Mount Doom

  $('#mount-doom').append($gollum);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".




// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {

  console.log("Aragorn. Elessar...");

// 1. remove Gollum and the Ring from the DOM

  $('#gollum').remove();

// 2. remove all the baddies from the DOM

  let $baddies = $('ul').has('li.baddy');
  $baddies.remove();

// 3. Move all the hobbits back to the shire

  let $heroes = $('.hobbit');
  $('#The-Shire').append($heroes);

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
