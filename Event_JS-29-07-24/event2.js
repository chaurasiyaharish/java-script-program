function on_mouse(){
    alert("on-mouse")
}

function fun1(){
    alert("mouse-leave")
}

var v =0;
let c = document.getElementById('count')
function inc(){
    v++
    c.innerHTML=v
}function dec(){
    
    v--
    if(v<0)
    {
        v=0
        c.innerHTML=0
    }
    else
    c.innerHTML=v
}