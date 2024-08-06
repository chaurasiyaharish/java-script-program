function savedata() {
    let a = document.getElementById('name').value
    let b = document.getElementById('Contact').vlaue
    let c = document.getElementById('age').value
    let d = document.getElementById('email').value
    let e = document.getElementById('password').value
    let f = document.getElementById('con_password').value
    if (a == "" ) {
        alert("all filed are mendatory");
         document.getElementById("name").focus()
        return false;
    }

    if (b == "") {
        alert("please fill contact filed")
        document.getElementById("Contact").focus()
        return false;
    }
    else if(isNaN(b))
    {
        alert('only digit allow');
        document.getElementById("Contact").focus();
        return false;
    }
    else if(contact.length<10 || Contact.length>10)
        {
            alert('enter only 10 digit allow')
            document.getElementById("Contact").focus();
            return false;
        }
    if (c == "") {
        alert("please fill age filed")
        document.getElementById("age").focus()
        return false;
    }
    else if(isNaN(c))
    {
        alert('digit')
        document.getElementById("age").focuse()
        return false;
    }
    if (d== "") {
        alert("please fill email filed")
        document.getElementById("email").focus()
        return false;
    }
    else if(!(d.include("@")))
    {
       alert("enter valid email")
       document.getElementById("email").focus()
       return false;

    }
   
    if (e == "") {
        alert("please fill password filed")
        document.getElementById("password").focus()
        return false;
    }
    else if(!(pass.match(/[@!^#$*&]/)))
        {
            alert("use spacial caractor")
            document.getElementById("password").focus();
            return false;
        }

    if (f == "") {
        alert("please fill name filed")
        document.getElementById("con_password").focus()
        return false;
    }
    else if(!(pass != con_password))
        {
            alert("use spacial caractor")
            document.getElementById("con_password").focus();
            return false;
        }

    
}


