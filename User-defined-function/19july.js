// 

// function demo(c,d)
// {
//     return c+d; 
// }
// var a = 10;
// var b = 34
// console.log(demo(a),(b))

//wap to take input from the user and print the table that number using function with para no return value

//  print table with function

function table(n){
    for(let i=1;i<11;i++){
  document.write(n + " * "+ i + " = " + n*i + "<br>")
  if(i>10){
     document.write("\t")
  }
  //document.write("<br>")
    // console.log(n*i)
}
}
let num =parseInt(prompt("enter any number"))
table(num)
var num2 = parseInt(prompt("enter any number: "))
table(num2)
var num3 = parseInt(prompt("enter any number: "))
table(num2)

//  print table without function

// let num1 = parseInt(prompt("enter any numer: "))
// for(let i = 0;i<11;i++){
//      document.write(n + " x "+ i + " = " + n*i + "<br>")
// }


//Q-3

// function cube(n){
//   document.write(n*n*n)
// //   document.write("<br>")
//     //  console.log(n*i)
// }
// let num =parseInt(prompt("enter any number"))
// cube(num)

//Q-4
//     with para no return

// function num(a){
//   if(a>=1 && a<=10)
//     for(let i=1;i<=a;i++){
//      // console.log(i);
//      document.write(i)
//     }
//     else if(a>=11 && a<=20)
//       for(let i=20;i>=1;i--)
//     {
//       //console.log(i);
//       document.write(i)
//     }
//     else(
//        document.write("invalid number")
//     )

// }
// let a =parseInt(prompt("enter num"))
// num(a);

//Q-5
// var sum =0
// function demo(){
//      for(let i=1;i<=10;i++){
//       sum = sum+i
//     //  document.write(i)
//      }
//      return sum;
// }
// //console.log(demo())
// document.write(demo())