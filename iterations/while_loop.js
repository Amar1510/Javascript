//while loops

let index = 0;

while (index < 10) {
    console.log(`Value of index is ${index}`);
    index++;
}
//condition is checked first, if true then code block is executed

let arr = 0
while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10); 
// in do while loop the code block is executed once even if the condition is false
//code is executed first and then condition is checked