// object just like a variable

// //defined a object  
// // let ob ={ key : value}

// let ob = {serial : 123456,
//         namee : "Harish",
//         age : 23,
//         sallary : 2436547,
//         Email  : "chaurasiyah3xx@gmail.com",
//         mobileno:8818967188
//         }
//         // console.log(ob.namee)
//         // console.log(ob.Email)
//         // for(let k in ob)    //ye for in loop hota hai eksa use krne se object me jutni bhi value hogi sabhi print ho jayegi
//         //     console.log(ob[k])

//     let k = Object.keys(ob)
//     // console.log(k)
//     let v = Object.values(ob)
//     console.log(v)

    //days 2   17/07/24

    let emp ={
       id:parseInt(prompt("enter id")),
       name:prompt("enter your name"),
       age:parseInt(prompt("enter age")),
       designation:(prompt("Enter your designation")),
       packege:"10 lpa",
       array:[1,2,3,4,5],
       fun:function(){
        alert("function colling")
       },
       account:{
        bank_name:"hdfc",
        acc_no:133433645,
        acc_balance:123454
       }

    }
    console.log(emp.account.acc_balance)
    console.log(emp.array[2])
    console.log(emp.id)
    console.log(emp.name)
    console.log(emp.age)
    

