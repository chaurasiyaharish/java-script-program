let x= "john";
let city = "Rewa";
// x = "10";

// x = 'My name is \"john doe\" and he is john doe\'s friend\\';

x = "hello"+" "+"world"+" "+"i am"+" "+x+" "+"from"+" "+city;

x =`Hello World I am ${x} from ${city}`;
let y = x.length;
console.log(y)
//template litralse 
console.log(typeof x);
document.getElementById("demo").innerHTML = x;

let namee = "harish";
let age = "23";
let add = "Rewa";
let cadd = "bhopal"
result = `Hi My name is ${namee} and i am ${age} year old ,becicaly`
document.getElementById("demo").innerHTML = result;