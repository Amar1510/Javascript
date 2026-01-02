const userEmail = "amar@gmail.com";

if(userEmail){
    console.log("user email")
}
else {
    console.log("no email");
}

//some values are considered as true or false based on truthy and falsy values

//falsy values
// false, 0 ,""(empty string), null, undefined, -0(negative zero is falsy), BIGINT 0n (it's falsy), NaN( Not a number)

//truthy values
// "0", 'false', " " (these are strings with value so truthy)
// [], {}, funtion(){} 

// const userEmail = []
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

//Nullish Coalescing Operator(??) // works on null and undefined

let val1;
// val1 = 5 ?? 10;

// val1 = null ?? 10; // if null is given value then assig it to other given value //O/P is 15
// val1 = undefined ?? 15; //O/P is 15

// val1 = null ?? 10 ?? 15 // the first alue is assigned , so O/P is 10

val1 = null ?? null ?? 15 //O/P is 15
// val1 = null ?? undefined; //undefined, it's not good
val1 = undefined?? null; // not good

console.log(val1);

// ternary operator
// condition ? true : false;

const price = 85;
price > 90 ? console.log("price greater than 90") : console.log("Price less than 90");