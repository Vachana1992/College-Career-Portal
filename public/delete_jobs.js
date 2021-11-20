var delbutton = document.querySelector('#del_button')
var delid = document.querySelector('#del_id')

delbutton.addEventListener('click',_=>{    
    fetch('/delete/jobs',{
        method:'delete',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            deleteid:delid.value,
           
        })
        
    })
    window.location="/move";
})
