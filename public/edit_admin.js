var editbutton = document.querySelector("#edit_adbutton");
var edId = document.querySelector("#ad_id");
var edname = document.querySelector("#ad_name");
var edemail = document.querySelector("#ad_email");
var edphone = document.querySelector("#ad_phone");
var edusername = document.querySelector("#ad_username");
var edpwd = document.querySelector("#ad_pwd");




editbutton.addEventListener('click',_=>{
    //alert('Update');
    
    fetch('/update/admin',{
        method:'put',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            editid:edId.value,
            editname:edname.value,
            editemail:edemail.value,
            editphone:edphone.value,
            editusername:edusername.value,
            editpwd:edpwd.value
        })
    })

    window.location="/admin";
    })