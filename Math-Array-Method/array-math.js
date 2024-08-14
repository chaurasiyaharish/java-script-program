//array-method
//12-08-24

const array1 =['Bmw','audi','toyota','nexon'];
console.log(array1);

array1.sort();
console.log(array1);

// alphabetical me data ko short krta hai (sort method )
// ye phle capital letter ko print krta hai
// only string array ko sort krta hai  

array1.reverse();
console.log(array1);

// ye method reverse print krta hai

const number = [40,500,0,340,7];
number.sort(function(a,b){return a-b});
// ascending oder
  // ye compare function hota hai 

number.sort(function(a,b){return b-a});
// descending
console.log(number);
document.getElementById("demo").innerHTML = array1;
document.getElementById("demo").innerHTML = number;
