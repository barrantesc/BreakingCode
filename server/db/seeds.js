const faker = require('faker'); /* https://fakerjs.dev/api/ */
const db = require('../config/connection');
const Cards  = require('../models/Card.js');

/* Array holding a collection of Card Objects
    **Note:     All paths to files should be in consideration of their location of render within the Client
    
    // Each Card mirrors the same design 👇🏼
    {
        uid :       Each Card has a unique id 
        pair_id:    a number only 1 other card shares
        content:    question/answer
        stat:       unique stat for the card
        topic:      topic for card 
    }
*/
const cardSeedData = [
    {
    "content": "What does HTML stand for?",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 1,
    "pair_id": 1
    },
    {
    "content": "Hypertext Markup Language",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 2,
    "pair_id": 1
    },
    {
    "content": "What are void elements in HTML?",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 3,
    "pair_id": 2
    },
    {
    "content": "elements which do not have closing tags or do not need to be closed",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 4,
    "pair_id": 2
    },
    {
    "content": "What is Anchor tag used for?",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 5,
    "pair_id": 3
    },
    {
    "content": "tag in HTML is used to link between two sections or two different web pages or website templates",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 6,
    "pair_id": 3
    },
    {
    "content": "What are semantic elements in HTML?",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 7,
    "pair_id": 4
    },
    {
    "content": "HTML elements that represent its meaning to the browser and developer about its contents",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 8,
    "pair_id": 4
    },
    {
    "content": "What symbol(s) are used to comment one line in HTML?",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 9,
    "pair_id": 5
    },
    { "content": "<!--",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 10 ,
    "pair_id": 5
    },
    {
    "content": "What symbol(s) are used to comment out multiple lines in HTML?",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 11,
    "pair_id": 6
    },
    { "content": "<!— —>",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 12 ,
    "pair_id": 6
    },
    {
    "content": "What are <br> tags in HTML?",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 13,
    "pair_id": 7
    },
    {
    "content": "tags used to enter a new line into the HTML contents",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 14,
    "pair_id": 7
    },
    {
    "content": "What are Meta tags in HTML?",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 15,
    "pair_id": 8
    },
    {
    "content": "tags in HTML used to tell the browser about the page description, author of the template, character set, keywords and many more",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 16,
    "pair_id": 8
    },
    {
    "content": "How can we create a hyperlink in HTML?",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 17,
    "pair_id": 9
    },
    {
    "content": "Use of an <a> tag",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 18,
    "pair_id": 9
    },
    {
    "content": "What is the <table> tag used for?",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 19,
    "pair_id": 10
    },
    {
    "content": "Tag that defines a table",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 20,
    "pair_id": 10
    },
    {
    "content": "What is the <tr> tag used for?",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 21,
    "pair_id": 11
    },
    {
    "content": "Tag that defines a row in a table",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 22,
    "pair_id": 11
    },
    {
    "content": "What is the <td> tag used for?",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 23,
    "pair_id": 12
    },
    {
    "content": "Tag that defines a cell in a table",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 24,
    "pair_id": 12
    },
    {
    "content": "What is the <caption> tag used for?",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 25,
    "pair_id": 13
    },
    {
    "content": "Tag that defines the table caption",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 26,
    "pair_id": 13
    },
    {
    "content": "What is the <colgroup> tag used for?",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 27,
    "pair_id": 14
    },
    {
    "content": "Tag that specifies a group of one more column in a table for formatting",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 28,
    "pair_id": 14
    },
    {
    "content": "What is the <col> tag used for?",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 29,
    "pair_id": 15
    },
    {
    "content": "used with <colgroup> element to specify column properties for each column",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 30,
    "pair_id": 15
    },
    {
    "content": "What is the <tbody> tag used for?",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 31,
    "pair_id": 16
    },
    {
    "content": "tag used to group the body content in a table",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 32,
    "pair_id": 16
    },
    {
    "content": "What is the <thead> tag used for?",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 33,
    "pair_id": 17
    },
    {
    "content": "Tag used to group the header content in a table",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 34,
    "pair_id": 1
    },
    {
    "content": "What is the <tfooter> tag used for?",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 35,
    "pair_id": 18
    },
    {
    "content": "Tag used to group the footer content in a table",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 36,
    "pair_id": 18
    },
    {
    "content": "What is the <th> tag used for?",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 37,
    "pair_id": 19
    },
    {
    "content": "Tag that defines a header cell in a table",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 38,
    "pair_id": 1
    },
    {
    "content": "What is the <header> tag used for?",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 39,
    "pair_id": 20
    },
    {
    "content": "used to define a header for a document or a section",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 40,
    "pair_id": 20
    },
    {
    "content": "What is the <nav> tag used for?",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 41,
    "pair_id": 21
    },
    {
    "content": "Used to define a container for navigation links",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 42,
    "pair_id": 21
    },
    {
    "content": "What is the <section> tag used for?",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 43,
    "pair_id": 22
    },
    {
    "content": "used to define a section in a document",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 44,
    "pair_id": 22
    },
    {
    "content": "What is the <article> tag used for?",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 45,
    "pair_id": 23
    },
    {
    "content": "used to define an independent, self-contained article",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 46,
    "pair_id": 23
    },
    {
    "content": "What is the <aside> tag used for?",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 47,
    "pair_id": 24
    },
    {
    "content": "used to define content aside from the content",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 48,
    "pair_id": 24
    },
    {
    "content": "What is the <footer> tag used for?",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 49,
    "pair_id": 25
    },
    {
    "content": "used to define a footer for a document or a section",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 50,
    "pair_id": 25
    },
    {
    "content": "Two tags used to separate a section of texts?",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 51,
    "pair_id": 26
    },
    { 
    "content": "<br> and <p>", 
    "stat": "01 stat", 
    "topic": "HTML", 
    "uid": 52,
    "pair_id": 26
    },
    {
    "content": "What is the use of an iframe tag?",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 53,
    "pair_id": 27
    },
    {
    "content": "used to display a web page within a web page",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 54,
    "pair_id": 27
    },
    {
    "content": "What is the use of a span tag?",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 55,
    "pair_id": 28
    },
    {
    "content": "Used to add color on text, add background on text, and highlight any color text",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 56,
    "pair_id": 28
    },
    {
    "content": "What is the use of a button tag?",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 57,
    "pair_id": 29
    },
    {
    "content": "used to create a clickable button within the HTML form on the web page",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 58,
    "pair_id": 29
    },
    {
    "content": "What is the use of a button tag?",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 59,
    "pair_id": 30
    },
    {
    "content": "used to create a clickable button within the HTML form on the web page",
    "stat": "01 stat",
    "topic": "HTML",
    "uid": 60,
    "pair_id": 30
    },
    {
    "content": "HTML element in which we add JS?",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 61,
    "pair_id": 31
    },
    {
    "content": "<script>",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 62,
    "pair_id": 31
    },
    {
    "content": "Part of the HTML file where JS must be inserted?",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 63,
    "pair_id": 32
    },
    {
    "content": "Head and Body",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 64,
    "pair_id": 32
    },
    {
    "content": "Main types of loops in JS?",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 65,
    "pair_id": 33
    },
    {
    "content": "For loop, while loop, do..while loop ",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 66,
    "pair_id": 33
    },
    {
    "content": "What is the DOM in JS?",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 67,
    "pair_id": 34
    },
    {
    "content": "Document Object Model",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 68,
    "pair_id": 34
    },
    {
    "content": "What is JavaScript?",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 69,
    "pair_id": 35
    },
    {
    "content": "client-side and server-side scripting language inserted into HTML pages and is understood by web browsers. JavaScript is also an Object-based Programming language",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 70,
    "pair_id": 35
    },
    {
    "content": "JavaScript Data Types?",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 71,
    "pair_id": 36
    },
    {
    "content": "Number, string, boolean, object, undefined",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 72,
    "pair_id": 36
    },
    {
    "content": "What is a NaN function?",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 73,
    "pair_id": 36
    },
    {
    "content": "A function that returns true if the argument is not a number; otherwise, it is false",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 74,
    "pair_id": 37
    },
    {
    "content": "Company that developed JavaScript?",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 75,
    "pair_id": 38
    },
    {
    "content": "Netscape",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 76,
    "pair_id": 38
    },
    {
    "content": "What is a declared variable?",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 77,
    "pair_id": 39
    },
    {
    "content": "variables that do not exist in a program and are not declared. If the program tries to read the value of an undeclared variable, then a runtime error is encountered.",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 78,
    "pair_id": 39
    },
    {
    "content": "What is an undeclared variable?",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 79,
    "pair_id": 40
    },
    {
    "content": "variables are those that are declared in the program but have not been given any value. If the program tries to read the value of an undefined variable, an undefined value is returned",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 80,
    "pair_id": 40
    },
    {
    "content": "Symbol(s) used for commenting out one line of code of JS?",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 81,
    "pair_id": 41
    },
    {
    "content": "//",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 82,
    "pair_id": 41
    },
    {
    "content": "Symbol(s) used for commenting out several lines of code of JS?",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 83,
    "pair_id": 42
    },
    {
    "content": "/*  */",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 84,
    "pair_id": 42
    },
    {
    "content": "What is === operator?",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 85,
    "pair_id": 43
    },
    {
    "content": "a strict equality operator, which returns true when the two operands have the same value without conversion",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 86,
    "pair_id": 43
    },
    {
    "content": "What is a Load Time Error?",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 87,
    "pair_id": 44
    },
    {
    "content": "Errors that come up when loading a web page, like improper syntax errors, are known as Load time errors and generate the errors dynamically.",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 88,
    "pair_id": 44
    },
    {
    "content": "What is a Runtime Error?",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 89,
    "pair_id": 45
    },
    {
    "content": "Errors that come due to misuse of the command inside the HTML language.",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 90,
    "pair_id": 45
    },
    {
    "content": "What is a Logical Error?",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 91,
    "pair_id": 46
    },
    {
    "content": "These are the errors that occur due to the bad logic performed on a function with a different operation.",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 92,
    "pair_id": 46
    },
    {
    "content": "What is the use of the Push method?",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 93,
    "pair_id": 47
    },
    {
    "content": "Method used to add or append one or more elements to an Array end",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 94,
    "pair_id": 47
    },
    {
    "content": "What is the use of the unshift method?",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 95,
    "pair_id": 48
    },
    {
    "content": "Method is used to prepend one or more elements to the beginning of the array",
    "stat": "01 stat",
    "topic": "JavaScript",
    "uid": 96,
    "pair_id": 48
    },

];
//-- Make db connection, delete ALL content, and build clean seed data.
db.once('open', async () => {
    
    //-- Purge local data to reset
    await Cards.remove({});
    
    /* CARDS - Create ALL Cards in database ----------------------------------*/
    //-- Printing what the goal to make it
    console.log("##-- Attempting to seed the following cards...")
    console.table(cardSeedData);
    //-- Add created users to database
    const createdCards = await Cards.collection.insertMany(cardSeedData);
    console.log("##-- Created cards complete...")
    console.log("##-- Results...")
    console.table(createdCards)
    console.log('//-- Seeding is completed...');
    process.exit(0);
});