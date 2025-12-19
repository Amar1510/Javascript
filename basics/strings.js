
const name = "Amar-Dalvi";
console.log(name[0]);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name);
console.log(name.charAt(2));
console.log(name.indexOf('b'));


const newName = name.substring(0,3);
console.log(newName);

const slicedName = name.slice(-5,-1);
console.log(slicedName)

const spacedName = "          Amar Dal vi         ";
console.log(spacedName.trim())

const url = "https://amar.com/amar%20dalvi";
console.log(url);
console.log(url.replace("amar","yash")) // only replace first matched occurrence
console.log(url.replaceAll('amar', "yash"));//replace all occcurences
// console.log(url.replace(value to be replaced, which is replaced value))

console.log(url.includes("amar")); //true
console.log(url.includes("kunal"));//false

//split
const splitString = "amar-ravindra-dalvi";
console.log(splitString.split('-'));//splits into array of values