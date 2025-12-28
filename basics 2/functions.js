//functions

function sayMyName(){
    console.log("Amar");
}

sayMyName();  

function addTwoNumbers(num1, num2){ //num1, num2 are parameters
    console.log(num1+num2);
}

// addTwoNumbers(10,15); // 10,15 are arguments

const result = addTwoNumbers(10,15);
console.log(result); // this will give undefined

function subtractTwoNUmbers(num1, num2){
    return num1-num2;
}

const result2 = subtractTwoNUmbers(15,10);
console.log("result2 => ", result2);

// in case we dont know how many arguments are there

function calculateCartPrice(...num1){ // we user rest operator ...num1 
    return num1;
}

console.log(calculateCartPrice(2));
console.log(calculateCartPrice(200,400,500)); // it adds all values to an array and return the array

function calculateCartPrice2(val1, val2,...num1){ // this will add all extra args in array 
    return num1;
}
console.log(calculateCartPrice2(100,200,300,400,500));

const user = {
    userName: "Amar",
    price: 500
}
function handleObject(anyObj){
    console.log(`Username is ${anyObj.userName} and price is ${anyObj.price}`)
}
handleObject(user)

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));