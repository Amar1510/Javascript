// arrays
// JavaScript arrays are resizable and can contain a mix of different data types

// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers 
//arr[0] correct -JavaScript arrays are zero-indexed
// JavaScript array-copy operations create shallow copies. 

// Increasing the length extends the array by adding empty slots without creating any new elements — not even undefined.
const arr = [ 1, "amar" , 0.2, false]; // array elements can have differnet datatypes

// Array methods

arr.push(10); // adds value at last
arr.pop(); // removes value from last
arr.unshift(15); //used to add element at first:  time consuming operation coz of shifting each element- 
arr.shift();

// questionnaire method
// console.log(arr.includes(22));
// console.log(arr.indexOf("amar"));

const newArr =  arr.join();// creates a string of array element seperated by specific seperator 
// console.log(newArr);
// console.log(typeof(newArr));

//slice splice
// console.log("A ", arr);
const myn1 = arr.slice(1,3);
// Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
// console.log(myn1);


// console.log("A ", arr);
const myn2 = arr.splice(1, 2);
//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// console.log("c ", arr);
// console.log(myn2);


 const marvel_heros = ["IronMan", "Thor", "Hulk"];
 const dc_heros = ["Superman", "Batman", "flash"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros, "\n");

//concat
const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);

//spread operator
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

//flat
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray("Amar"));
console.log(Array.from("Amar"));
console.log(Array.from({name: "Amar"})); //interesting case- need to specify create array from keys or value

let score1 =100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));

// 1. Array is written in brackets [  ].
// 2.Array data type is an object.
// 3.Array can contain different data types . i.e string,number,boolean,array etc.
// 4. Array is zero based indexing. It starts with zero.
// 5. Once changed its original value will also change beacause it is non primitive (refrence) type.

// ARRAY METHODs :

// 1.Push = adds value to last of an array.
// 2. Pop = removes last value of an array.
// 3. Unshift = adds value at first of an array.
// 4.Shift = removes first value of an array.
// 5. Includes = checks true or false.
// 6. IndexOf = checks the position of value in number form.
// 7.Join = converts to string.
// 8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
// 9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.




