//singleton object 
// A JavaScript Singleton object is a pattern where only one instance of an object exists during the entire runtime of an application, and everyone uses that same instance.
//It's a design pattern
// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

//object combining
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1, obj2} //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// console.log(obj3)

// object.assign()
const obj3 = Object.assign({}, obj1, obj2)// here the empty {} is target object in which obj1 and obj2 are merged to give it as single objefct
console.log(obj3)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj4 = {...obj1, ...obj2 }// use spread operator
console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email 
// console.log(tinderUser);

console.log(Object.keys(tinderUser)); // gets all the keys in object in array form //O/P --> [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // gets all the values in object in array form //O/P --> [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)); //gets each key-value pair in the form of array of array // O/P --> [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')) //returns bool value only for a property (key) — NOT for a value


//Destructuring of Object
const course = {
    courseName: "JS tutorial",
    dueDate:"30 Dec 2025",
}

const {dueDate} = course; // this is destructring
// const dueDate = course.dueDate; // this is dot operation
console.log(dueDate);

