// let mydata =`Hello everyone how are you
// all , how you all understatading
// javascript!!!`;
// let x = "hello everyone how are you";
// //kaun si indexing pr kaun si valu hai ye check krne ke liye en method ka use kiya jata hai 
// let newString = x.slice(4,12);
// newString = x.slice(5);
// newString = x.slice(-10,-5);

// console.log(newString);
// newString = x.substring(4,18)
// //subString me negative value nhi de sakte hai 
// console.log(x[2]);
// console.log(x.charAt(4));
// console.log(x.charAt(6));
// console.log(x.charCodeAt(3));
// let y = x.concat(" ","everyone");//kuch bhi add krne ke liye concat ka use kiya jata hai 
// document.getElementById("demo").innerHTML =y;

function display(){
    let  data = document.getElementById("demo1");
     data.style.backgroundColor ="pink";
     data.style.border = "3px solid blue";
    
    data.innerHTML = `
    <table>
    <tr>
    <th>Name</th>
    <th>City</th>
    <th>Contact No.</th>
    </tr>
     <tr>
    <th>Harish</th>
    <th>Rewa</th>
    <th>+918818967188</th>
    </tr>
     <tr>
    <th>Harish</th>
    <th>Rewa</th>
    <th>+918818967188</th>
    </tr>
    </table> `;
}