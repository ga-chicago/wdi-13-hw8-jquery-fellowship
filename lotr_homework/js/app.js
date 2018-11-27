console.log("LOTR homework js file is connected");
console.log("HINT: Click on the 'Elements' tab to see the elements that you are creating");
console.log("---------------")
// ==============================
//       Dramatis Personae
// ==============================
const hobbits = ["Frodo Baggins", "Samwise 'Sam' Gamgee", "Meriadoc 'Merry' Brandybuck", "Peregrin 'Pippin' Took"];
const buddies = ["Gandalf the Grey", "Legolas", "Gimli", "Strider", "Boromir"];
const baddies = ["Sauron", "Saruman", "The Uruk-hai", "Orcs", "Nazgûl"];
const lands = ["The-Shire", "Rivendell", "Mordor"];
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
  const $middleEarth = $('<section id="middle-earth"></section>');
  
  $('body').prepend($middleEarth);
  // 2. append the section to the body of the DOM.
  //check above
  // 3. use a for loop to iterate over the lands array that does the following:
  for (let i = 0; i < lands.length; i++) {
    const $article = $('<article></article>');

    $article.attr('id', lands[i]);

    const $h1 = $('<h1></h1>');
    $h1.text(lands[i]);
    $article.append($h1);
    // $article.append('<h1>' + lands[i] + '</h1>');
    $middleEarth.append($article);
  }
};
//sorry, I dislike the comments between the loop. Makes it harder for me to read. 
//   3a. creates an article tag (there should be one for each land when the loop is done)
//check
//   3b. gives each land article an `id` tag of the corresponding land name
//check
//   3c. includes an h1 with the name of the land inside each land article
//check
//   3d. appends each land to the middle-earth section

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".
// ============
// Chapter 2
// ============
const makeHobbits = () => {
  console.log('Make hobbits');
  const $hobbitUl = $('<ul/>');
  $('#The-Shire').append($hobbitUl);
  // 1. display an unordered list of the hobbits in the shire.
  // 2. give each hobbit a class of "hobbit"
  for (let i = 0; i < hobbits.length; i++) {
    let $hobbitLi = $('<li/>');
    $hobbitLi.text(hobbits[i]);
    $hobbitLi.attr('class', "hobbits");
    $hobbitUl.append($hobbitLi);
  }
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
  const theOneRing = $('<div/>');
  theOneRing.attr('id', 'the-one-ring');
  // 2. add the ring as a child of Frodo
  $('li:contains("Frodo")').append(theOneRing);
  //I love li:contains. It is the bestest! Maybe... it's... the precious!!!!
  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .
  // when you think you have given Frodo the ring, check in your Elements tab
};

//Ash nazg thrakatulûk agh burzum-ishi krimpatul. AKA, call your functions.
// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".
// ============
// Chapter 4
// ============
const makeBaddies = () => {
  const $baddiesUl = $('<ul/>')
  $('#Mordor').append($baddiesUl);
  for (let i = 0; i < baddies.length; i++) {
    let $baddyLi = $('<li/>');
    $baddyLi.text(baddies[i]);
    $baddyLi.attr('class', "baddy");
    $baddiesUl.append($baddyLi);
  }
  // 1. display an unordered list of baddies in Mordor
  // 2. give each of the baddies a class of "baddy"
  // 3. remember to append them to Mordor
};

//I cannot believe you didn't put the freaking Nazgûl in the list of baddies. ALSO Sauron's name was totally Mairon, once. 
// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..
// ============
// Chapter 5
// ============
const makeBuddies = () => {
  const $aside = $('<aside/>');
  $('#middle-earth').append($aside)
  //I think this is right?
  const $buddyUl = $('<ul/>');
  $aside.append($buddyUl);
  for (let j = 0; j < buddies.length; j++) {
    const $buddyLi = $('<li/>');
    $buddyLi.text(buddies[j]);
    $buddyLi.attr('class', "buddy");
    $buddyUl.append($buddyLi);
  }
  // 1. create an aside tag and append it to middle-earth below mordor
  // 2. display an unordered list of buddies in the aside
  // 3. give each of the buddies a class of "buddy"
};

//It's like making friends, but you actually get to make your friends. 
// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".
// ============
// Chapter 6
// ============
const leaveTheShire = () => {
  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
  $('#Rivendell').append($('#The-Shire').children('ul'));
  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"
// ============
// Chapter 7
// ============
const beautifulStranger = () => {
  // 1. change the buddy 'Strider' textnode to "Aragorn"
  $('li:contains("Strider")').text("Aragorn");
  //I love that you can just tack on stuff to other stuff
  // hint: You can get a list of elements by tag name, such as 'aside'
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"
// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {
  // 1. create a new div with an id 'the-fellowship'
  const $divFellowship = $('<div id="the-fellowship"></div>');
  const $h1Fellowship = $('<h1>The Fellowship</h1>');
  $divFellowship.append($h1Fellowship);
  $('#middle-earth').append($divFellowship);
  $divFellowship.append($('li.hobbit'));
  $divFellowship.append($('li.buddy'));
  // 2. add an h1 with the text 'The Fellowship' to this new div
  // 3. append the fellowship to middle-earth
  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"
// ============
// Chapter 9
// ============
const theBalrog = () => {
  // 1. change the 'Gandalf' textNode to 'Gandalf the White'
  $('li:contains("Gandalf")').text("Gandalf the White");
  // 2. add a class "the-white" to this element
  $('li:contains("Gandalf")').attr('class', "the-white");
  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border
};
theBalrog();
// aka ME. 
// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"
// ============
// Chapter 10
// ============
const hornOfGondor = () => {
  // 1. create a pop-up alert that the horn of gondor has been blown
  alert('Boromir has blown the horn of Gondor! If it be blown at need anywhere within the bounds of Gondor, as the realm was of old, its voice will not pass unheeded.');
  $('li:contains("Boromir")').html('<strike>Boromir</strike>');
  $('li:contains("Uruk-hai")').remove();
  //oh noes boromir. 
  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"
// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {
  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
  $('#Mordor').append($('li:contains("Frodo")'));
  $('#Mordor').append($('li:contains("Samwise")'));
  // 2. add a div with an id of 'mount-doom' to Mordor
  $('#Mordor').append('<div id="mount-doom"/></div>');
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"
// ============
// Chapter 12
// ============
const weWantsIt = () => {
  let $gollum = ('<div id="gollum"></div>');
  $('#Mordor').append($gollum);
  $('#the-one-ring').append($gollum);
  $('#mount-doom').append($gollum);
  // 1. Create a div with an id of 'gollum' and add it to Mordor
  // 2. Move the ring from Frodo and give it to Gollum
  // 3. Move Gollum into Mount Doom
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".
// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {
  $('#gollum').remove();
  //oh sads!
  $('.baddy').remove();
  $('#The-Shire').append($('.hobbits'));
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