
//for of loop with objects
//objects are not iterable directly, we can use Object.keys(), Object.values(), Object.entries() to iterate over objects

const myObject = {
    name: 'Bob',
    age: 25,
    city: 'Los Angeles'
};

//iterating over keys
for (const key of Object.keys(myObject)) {
    console.log(`Key: ${key}`);
}

//iterating over values
for (const value of Object.values(myObject)) {
    console.log(`Value: ${value}`);
}

//iterating over key-value pairs
for (const [key, value] of Object.entries(myObject)) {
    console.log(`${key} => ${value}`);
}

//for in loop

//for in loop iterates over enumerable properties of an object
//gives the keys of the object
//syntax: for (variable in object) { //code block }
//this loop is mainly used for objects as its overcome for of loop limitation with objects

for (const key in myObject) {
    console.log(`Key: ${key}, Value: ${myObject[key]}`);
}

//Note: for in loop can also be used with arrays, but its not recommended as it iterates over all enumerable properties including inherited ones, which may lead to unexpected results. For arrays, for of loop or traditional for loop is preferred.

//arrays also has keys which are the indices of the array elements starting from 0 and are numbers
const myArray = ['apple', 'banana', 'cherry'];
for (const index in myArray) {
    console.log("index ==> ", index); // gives index
    console.log("fruit ==> ", myArray[index]); // gives value
}



//for Each loop
//for each loop is a method available on arrays, maps and sets
//syntax: array.forEach(function(currentValue, index, array) { //code block });
//currentValue : the current element being processed in the array
//index : the index of the current element being processed in the array
//array : the array that forEach() is being applied to

const coding = ['JavaScript', 'Python', 'Java', 'C++'];
coding.forEach(function(language, index) {
    // console.log(`Index: ${index}, Language: ${language}`);
});

coding.forEach((key)=>{
    console.log("key ==> ", key);
})

function printMe(value){
    console.log("value ==> ", value);
}

coding.forEach(printMe);
coding.forEach((value,index,arr)=>{
    console.log(`Value: ${value}, Index: ${index}, Array: ${arr}`);
});

const myCoding = [
    {name: 'JavaScript', type: 'Programming Language'},
    {name: 'Python', type: 'Programming Language'},
    {name: 'HTML', type: 'Markup Language'}
]

myCoding.forEach((item)=> {
    console.log(`${item.name} is a ${item.type}`);
})
//forEach loop does not support break and continue statements
//to achieve similar functionality we can use return statement to skip current iteration
myCoding.forEach((item) => {
    if (item.name === 'Python') {
        return; // skips the current iteration
    }
    console.log(`${item.name} is a ${item.type}`);
});

//Note: forEach loop does not return a value, it always returns undefined. If you need to transform an array and return a new array, consider using map() method instead.

//FILTER method
//filter method creates a new array with all elements that pass the test implemented by the provided function
//syntax: array.filter(function(currentValue, index, array) { //code block });
//currentValue : the current element being processed in the array
//index : the index of the current element being processed in the array
//array : the array that filter() is being applied to

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//filter even numbers
const evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});

const newNums = numbers.filter((num) => {
    return num > 4; //scope requires return keyword
});

numbers.forEach((num) => {
    if(num > 4){
        console.log("num > 4 ==> ", num);
    }
});


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const historyBooks = books.filter( (bk) => bk.genre === 'History' );
console.log("historyBooks ==> ", historyBooks);

const newBooks = books.filter( (bk) => { return bk.publish >= 2002; });
console.log("newBooks ==> ", newBooks);

//.map method
//map method creates a new array populated with the results of calling a provided function on every element in the calling array
//syntax: array.map(function(currentValue, index, array) { //code block });
//currentValue : the current element being processed in the array
//index : the index of the current element being processed in the array
//array : the array that map() is being applied to

const squaredNumbers = numbers.map(function(num) {
    return num * num;
});
console.log("squaredNumbers ==> ", squaredNumbers);

const squaredNums = numbers.map((num) => num * num);

//chaining map and filter
const squaredOddNumbers = numbers.map( (num) => { return num * num; } ).filter( (num) => {return num % 2 !== 0; } ); //first map's result is passed to filter
console.log("squaredOddNumbers ==> ", squaredOddNumbers);

const newNumbers = numbers.map( (num) => { return num * 10}).map( (num) => {return num + 5});
console.log("newNumbers ==> ", newNumbers);

//reduce method
//reduce method executes a reducer function on each element of the array, resulting in a single output value
//syntax: array.reduce(function(accumulator, currentValue, index, array) { //code block }, initialValue);   

const total = numbers.reduce( function(acc, currVal){
    return acc + currVal
},0); // 0 is the initial value of accumulator
console.log("total ==> ", total);

const product = numbers.reduce( (acc, currVal) => acc * currVal , 1);