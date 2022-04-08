const faker = require('faker'); /* https://fakerjs.dev/api/ */
​
const db = require('../config/connection');
const { Cards } = require('../models');
​
​
/* Array holding a collection of Card Objects
    **Note:     All paths to files should be in consideration of their location of render within the Client
    
    // Each Card mirrors the same design 👇🏼
    {
        uid :       Each Card has a unique id 
        pair_id:    a number only 1 other card shares
        content:        path to image as in client
        stat:       unique stat for the card 
    }
*/
const cardSeedData = [
    // 01
    {
        "uid"       : 01,
        "pair_id"   : 1,
        "content"   : "What are CSS frameworks?",
        "stat"      : "01 stat"
    },
    // 02:
    {
        "uid"       : 02,
        "pair_id"   : 1,
        "content"   : "libraries that make web page styling easier",
        "stat"      : "01 stat"
    },
    // 03
    {
        "uid"       : 03,
        "pair_id"   : 2,
        "content"   : "How can you target h3 and h2 with the same styling?",
        "stat"      : "01 stat"
    },
    // 04
    {
        "uid"       : 04,
        "pair_id"   : 2,
        "content"   : "Multiple elements can be targeted by separating with a comma",
        "stat"      : "01 stat"
    },
    // 05
    {
        "uid"       : 05,
        "pair_id"   : 3,
        "content"   : "What does the universal selector do?",
        "stat"      : "01 stat"
    },
    //06
    {
        "uid"       : 06,
        "pair_id"   : 3,
        "content"   : "selector works like a wildcard character, selecting all elements on a page. ",
        "stat"      : "01 stat"
    },
    // 07
    {
        "uid"       : 07,
        "pair_id"   : 4,
        "content"   : "What does the element type selector do?",
        "stat"      : "01 stat"
    },
    // 08
    {
        "uid"       : 08,
        "pair_id"   : 4,
        "content"   : "selector matches one or more HTML elements of the same name",
        "stat"      : "01 stat"
    },
    // 09
    {
        "uid"       : 09,
        "pair_id"   : 5,
        "content"   : "What does the ID selector do?",
        "stat"      : "01 stat"
    },
    // 10
    {
        "uid"       : 10,
        "pair_id"   : 5,
        "content"   : "selector matches any HTML element that has an ID attribute with the same value as that of the selector",
        "stat"      : "01 stat"
    },
];
​
​
//-- Make db connection, delete ALL content, and build clean seed data.
db.once('open', async () => {
    
    //-- Purge local data to reset
    await Cards.deleteMany({});
​
​
    
    /* CARDS - Create ALL Cards in database ----------------------------------*/
​
    //-- Printing what the goal to make it
    console.log("##-- Attempting to seed the following cards...")
    console.table(cardSeedData);
​
    //-- Add created users to database
    const createdCards = await Cards.collection.insertMany(cardSeedData);
​
​
    console.log("##-- Created cards complete...")
    console.log("##-- Results...")
    console.table(createdCards)
​
    console.log('//-- Seeding is completed...');
    process.exit(0);
});