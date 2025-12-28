const user = {
    username: "Amar",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);  // this is used here to access current context or current object's variables
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Vaish"
// user.welcomeMessage(); // this will give vaish as username

// console.log(this); ==> {}

function test(){
    let name = "Amar";
    // console.log(this.name); this will not work in function, will give undefined, only work with objects
}
test();
//this is also not used in arrow function
const newTest = () => {
    let name = "Vaish";
    // console.log(this.name); not working
    // console.log(this); ==> {}
}
newTest();


//arrow function
const newArrow = (num1, num2) => {
    return num1+num2;
}
console.log(newArrow(5,4));

const newArrow2 = (num1, num2) =>  num1+num2; // implicit retun, no need to write return keyword
//{}- curly braces needs return explicitly, parenthesis () do not require return keyword in arrow function
const addTwo = (num1, num2) => ({username: "amar"})
console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach()