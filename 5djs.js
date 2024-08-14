// var age = parseInt(prompt("enter your age"))

// if(age>=18){
//     var ind = parseInt(prompt("press 1 for indian"))
//     if(ind==1)
//         {
//             alert("eligible")
//         }
//         else{
//             alert("not eligible")
//         }
//     }   
// else{
//     alert("pahle bade ho jao")
// }

//seitch case 

//  var name = parseInt(prompt("enter faculaty name"))
//  switch (1){
//  case
//  }
// var a = parseInt(prompt("we have 3 faculity enter any number"))
// switch (a) {
//     case 1:
//         alert("qsim sir")
//         break;
//     case 2:
//         alert("Rajesh sir")
//     case 2:
//         alert("gaurab sir")
//     default:
//         alert("no faculity")
// } 

//06-07-2024

// wap to make a calculater using switch case

 var a = parseInt(prompt("enter st number"))
 var b = parseInt(prompt("enter second number"))
var ch = parseInt(prompt("1 for +,2 for *, 3 for -, 4 for /" ))
switch (ch){
    case 1:
        document.write(a+b)
        break;
    case 2:
        alert(a*b)
        break;
        case 3:
            alert(a*b)
            break;
        case 4:
            alert(a/b)
            break;
            default:
                alert("invalid choice")
}
