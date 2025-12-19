//DAtes

let myDate = new Date(); // Date is object
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());

let newDate = new Date("2023-01-14");
console.log(newDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp)
console.log(newDate.getTime());
console.log(Math.floor(Date.now()/1000));