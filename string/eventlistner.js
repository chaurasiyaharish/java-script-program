let mydata = document.getElementById('btn')
mydata.addEventListener('click',function () {
    document.getElementById("demo").innerHTML = "Hello";
    console.log('success');
});
// addeventlistener ke teen parameter hote hai 1-event, 2-function 

// syntax addEventListener (event,function,useCapture ) 3rd parameter is option 
 // is false by defaule
document.getElementById("btn").addEventListener("click",display);

function display(){
    document.getElementById("demo1").innerHTML = "World";
    console.log('success');
}
mydata.addEventListener("mouseenter",data);

function data(){
    document.getElementById("demo2").innerHTML = Math.random();
};

mydata.removeEventListener("click",display);