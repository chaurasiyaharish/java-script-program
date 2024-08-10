let x;
x = Math.random() * 10;
x = Math.floor(Math.random() * 40);

function randomnum(min,max){
    return Math.floor(Math.random() * (max - min +1) + min);

}
let result = randomnum(30,120);
const array =["bmw","asdf","kia","tata","toyota"];

const stringArr = array.toString();
console.log(stringArr);

const myarray = array.join(' ');
console.log(myarray);

console.log(array[3]);
console.log(array.at(3));
console.log(array);
array.push("bmw");
array.pop();
array.pop();
// cons newarray = array.shift();
const newarray = array.unshift("tata")
console.log(newarray);
document.getElementById("demo").innerHTML = newarray;

//console.log(result);
//document.write(result)
//document.getElementById("demo").innerHTML = result;
// unsift and push method of array retun te length of the update arrray 
// push adds element to the end of array and unshift adds element to the start 


// pop and shift method return the value that is deleted
// pop metyhod deletes an element from the end 
// shift method deletes an element from the start