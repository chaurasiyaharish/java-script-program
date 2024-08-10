// // sqrt  returns square root of a number
// let x = Math.sqrt(9);
// //sign returns 1 if number is positive, -1 if number is nagitive,
// //0 if number is 0
// x = Math.sign(16);

// //return power of number (number,power)
// x = Math.pow(4,3);

// // return absolut value always positive
// x = Math.abs(-45);

// //returns round of value
// x = Math.round(6.5);

// //returns the above or higher value
// x = Math.ceil(6.9)

// // returns lower valuea
// x = Math.floor(6.9);

// //returns minimun value
// x = Math.min(3,4,5,65,7578,45);

// //returns maximum
// x = Math.max(23,43,-43,65,6,5,);

// //removes the decimal number and gives the integer value
// x = Math.trunc(4.565);

// //random number between 0(inclusive) and 1(exclusive)
// x = Math.random(x)
// x = Math.random()*20;
// x = Math.floor(Math.random()*50);

// console.log(x);
// document.write(x);
// alert(x);
// document.getElementById("demo").innerHTML = x;

//10-08-24

// 30 se 120 tk me random number genrate krna
let x;
x = Math.random() * 10;
x = Math.floor(Math.random() * 40);

function randomnum(min,max){
    return Math.floor(Math.random() * (max - min +1) + min);

}
let result = randomnum(30,120);
console.log(result);
document.write(result)
document.getElementById("demo").innerHTML = result;