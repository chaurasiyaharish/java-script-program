// function data(){
//     var a = document.getElementById("n1").value;
//     var b = document.getElementById("n2").value;
//     var c = document.getElementById("n3").value;
//     var d = document.getElementById("n4").value;
     
//     if (a == "" || b == "" || c == "" || d == "") {
//     alert("all filed are mendatory")
//     // document.getElementById("namee").focus()
//     return false;
// }
// else if(b.length<10 || b.length>10)
//     {
//     alert("Number should be of 10 digit ! please enter valid number");
//     return false;
// }    
// else{
//     true;
// }
//     }
function fun(){
    var a = document.getElementById("user_name").value;
    if(a == "")
    {
        // document.getElementById("message").innerHTML="** please fill username **";
        alert("please fill user name")
        return false;
    }
}