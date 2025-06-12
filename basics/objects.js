//singleton - used when obj created using constructor
// Object.create

//when obj is created using literal then its not singleton
//obj literals

const sym = Symbol("key1");

const user = {
    //key : value
    name: "amar",
    [sym]: "myKey1", // syntax to access symbol in obj
    "full name": "Amar Dalvi",
    age : 23,
    location: "Pune"
};
// console.log(user.name);
// console.log(user["name"]);
// console.log(user["full name"]);
// console.log(typeof(user[sym]));

//objects can be freezed
// Object.freeze(user);

// user.greeting = function(){
//     console.log(`Hello ${this.name}`);
// }
// console.log(user.greeting);//only function reference
// console.log(user.greeting())//func call

//singlton 
const user2 = new Object();

user2.id = "123";
user2.name = "AD 2";

// console.log(user2);
//obj in obj
const regularObj = {
    email: "amardalvi15@gmail.com",
    fullname : {
        firstName: "Amar",
        lastName : "Dalvi"
    }
}
// console.log(regularObj);
// console.log(regularObj.fullname);
// console.log(regularObj.fullname.firstName);


//merging obj
const obj1 = {
    key1: "a",
    key2: "b"
}
const obj2 = {
    key3: "c",
    key4: "d"
}

//obj assign
// const objTarget =  Object.assign(obj1 /*target*/, obj2 /*source*/);
// console.log(objTarget);
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// array of objects
const arr = [
    {

    },
    {

    }
]
// arr[1].email
// console.log(Object.keys(obj3));
// console.log(Object.values(obj3));
// console.log(Object.entries(obj3));//key value is converted to array
// console.log(obj3.hasOwnProperty("key1"));

//destructuring of Object
const {key2} = obj3;
console.log(key2);

// json
// {
//     "key":"value",
//     "key2":"value2"
// }












