//singleton
//Object.create ===> create object through constructor

const { READUNCOMMITTED } = require("sequelize/lib/table-hints");

// object literals 

const sym1 = Symbol("Key1"); //symbol declaration

const JsUser = {
    name: "Amar",
    // key : value
    "full name": "Amar Dalvi", // this cannot be accessed by .(dot) 
    // sym1:"mykey1", // this will give type as string for value: mykey1, we need to do [sym1] for value type to be symbol
    [sym1]: "mykey1",
    age: 23,
    location: "Pune",
    email: "amar@google.com",
    isLoggedIn: true,
    lastLoginDays : ["Monday", "Tuesday"]
}
console.log("Object with symbol o/p ==>", JsUser);
/*Object with symbol o/p ==> {
  name: 'Amar',
  'full name': 'Amar Dalvi',
  age: 23,
  location: 'Pune',
  email: 'amar@google.com',
  isLoggedIn: true,
  lastLoginDays: [ 'Monday', 'Tuesday' ],
  [Symbol(Key1)]: 'mykey1' !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! if the obj is like sym1 : 'mykey1' then o/p will be sym1: 'mykey1',
}*/


//objects are acessed using .(dot) operator
console.log(JsUser.age);

//Also objects can be accessed using Object[] and string key in [], eg : JsUser["age"]
// console.log("Age 2.0 ==> ", JsUser[age]) // this will give age is not defined
console.log("Age 2.0 ==> ", JsUser["age"]);
console.log("Full name ==> ", JsUser["full name"])

console.log("Symbol 1 ==> ", JsUser[sym1]);
console.log("type of symbol 1 ==> ", typeof JsUser[sym1]);

JsUser.age = 24 //change values
// Object.freeze(JsUser)//after this values will not change, no error but values will not propogate

//functions in objects

JsUser.greeting =  function(){
    console.log("Hello User");
    return 0;
}

console.log("Jsuser.greeting==>",JsUser.greeting) //O/P ->Jsuser.greeting ==> [Function (anonymous)]
// for above log function is not executed, only reference of function is given 

console.log("JsUser.greeting() = > ", JsUser.greeting()); 
// O/P --> Hello User
// JsUser.greeting() = >  0
//function is executed and the return value is given 
const JsTwo = {name: "Vaishnavi"}
JsUser.greetingTwo =  function(){
    console.log(`Hello User JsTwo.name ${JsTwo.name}`);
    console.log(`Hello User this.name ${this.name}`);
    console.log(`Hello User  JsUser.name ${JsUser.name}`);
    return 0;
}
console.log(JsUser.greetingTwo());
