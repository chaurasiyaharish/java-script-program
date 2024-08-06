// setTimeout function >>jb bhi kisi website pr visit krte hai 
//to kusch time bad kuchh form bharne ke liye ata hai 

// setTimeout(()=>{alert("this working")},2000)

//constructor
// let date = new Date() // constructor ko call krne ke liye new keyword ka use kiya jata hai 
// //console.log(date);
// // console.log(date.toLocaleTimeString());
// // console.log(date.toLocaleDateString());
// document.write(date.toLocaleTimeString());
// document.write("<br>")
// document.write(date.toLocaleDateString());

setInterval(()=>{
    let date = new Date()
    let time = date.toLocaleTimeString()
    let dg = document.getElementById('digital_clock')
    dg.innerHTML = time
},1000)
//event >> user jo bhi action krta hai vebsite pe use event kahte hai 