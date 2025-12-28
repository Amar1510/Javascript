//this is global scope
// {} scope

let a = 100;
if (true) {
    //this is blocked scope
    let a = 10; // this can be only used in this if 
    const b = 20; // same as a
    var c = 30; // this can be used outside if due to var
    console.log("Inner : ", a); // block scope a
}

console.log("Outer :", a); // global scope a

// global scope in browser is different
// and global scope in node env is different

//NESTED scope

function one() {
    const name = "Amar";
    function two() {
        const email = "amar@gmail.com";
        console.log("Name inside=> ", name);
        console.log("Email inside: ", email);
    }
    // console.log("Email outside => ", email); // this will not work
    console.log("name outside=> ", name);
    two();
}

one();
// two(); this will not work

//Interesting
console.log(addOne(5)); //This will also work
function addOne(num) {
    return num + 1;
}
console.log(addOne(5));


console.log(addTwo(5)) //This will give error as we have assigned func 
//The below is called expression
const addTwo = function (num) {
    return num + 2;
}
console.log(addTwo(5))


