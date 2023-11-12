"use strict";
/*
    data types
    - Tuple
    --- is another sort of array type
    --- we knows exactly how many elements it contains
    --- we knows which types it contains at specific positions
*/
let article = [11, "title one", true];
// article.push(100);
article = [12, "title two", false];
const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);
