//for of loop
 
const arr = [1,2,3,4,5]
//for of loop iterates over iterable objects like arrays, strings, maps, sets etc
//gives the values of the iterable object   
//syntax: for (variable of iterable) { //code block }
for( const val of arr){
    // console.log("val ==> ", val);
}

const greeting = "Hello World"
for(const char of greeting){
    // console.log("char ==> ", char);
}
const myArray = ['apple', 'banana', 'cherry'];
for (const fruit of myArray) {
    // console.log(`Fruit: ${fruit}`);
}

//maps : the map object holds key-value pairs and remembers the original(unique) insertion order of the keys
const myMap = new Map();
myMap.set('name', 'Alice');
myMap.set('age', 30);
myMap.set('city', 'New York');

//iterating over map using for of loop, below loop gives both key and value is destructured form
//syntax: for (const [key, value] of myMap) { //code block } this gives both key and value
//syntax: for (const key of myMap) { //code block } this gives key-value pair as array
//syntax: for (const value of myMap.values()) { //code block } this gives only values
// for (const [key, value] of myMap) {
//     console.log(`${key} => ${value}`);
// }
for (const [key,value] of myMap) {
    // console.log(`${key} => ${value}`);
}

//sets : a set is a collection of values where each value must be unique
const mySet = new Set([1, 2, 3, 4, 5, 5, 6]); // duplicate 5 will be ignored

// for (const value of mySet) {
//     console.log(`Set value: ${value}`);
// }

//maps and sets are iterable objects and can be used with for of loop but not with for in loop
