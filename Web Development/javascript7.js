console.log("This is tutorial 53");

// function greet(name){
//     console.log(name + " is a good boy ");
// }

// function greet(name, greetText){
//     console.log(greetText + " " + name);
//     console.log(name + " is a good boy ");
// }

// function greet(name, greetText) {
//     let name1 = "Name1";
//     console.log(greetText + " " + name);
//     console.log(name + " is a good boy ");
// }

function greet(name, greetText = "Greetings from Javascript"){ // default value of greet text
    let name1 = "Name1";
    console.log(greetText + " " + name);
    console.log(name + " is a good boy ");
}

function sum (a, b, c){
    let d = a + b + c;
    return d;
    // This line will never execute (Unreachable Code)
    // console.log("Function is returned");
}
let name = "Raman";
let name1 = "Aniket";
let name2 = "Pratham";
let name3 = "Chandan"
let greetText = "Good Morning";
greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
greet(name3);

// let returnVal = greet(name3);
// console.log(returnVal);

let returnVal = sum(1,2,3);
console.log(returnVal);
// console.log(name  + " is a good boy ");
// console.log(name1 + " is a good boy ");
// console.log(name2 + " is a good boy ");
// console.log(name3 + " is a good boy ");
