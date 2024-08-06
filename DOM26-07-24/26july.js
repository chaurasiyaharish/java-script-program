//DOM
// collback function
//setInterval()  == cod ya statement ko non-stop chalana ho to setInterval function ka use kiya jata hai 

// function demo(){


// }

// demo()
// setInterval ko rokne ke liye clearInterval ka use kiya jata hai 
let num = 1
let fun= setInterval(()=>{
       if(num = 10){
        clearInterval(fun)
       }
    document.write(++num);
},2000)