var editbutton = document.querySelector("#edit_button");
var edId = document.querySelector("#s_id");
var edcomname = document.querySelector("#s_comname");
var edtitle = document.querySelector("#s_title");
var edappproc = document.querySelector("#s_appproc");
var eddocreq = document.querySelector("#s_docreq");
var eddesc = document.querySelector("#s_desc");
var edtype = document.querySelector("#s_type");
var edposition = document.querySelector("#s_position");
var edsalary = document.querySelector("#s_salary");
var edtarpgm = document.querySelector("#s_tarpgm");
var edloc = document.querySelector("#s_loc");
editbutton.addEventListener('click',_=>{    
    fetch('/update/jobs',{
        method:'put',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            editid:edId.value,
            editcomname:edcomname.value,
            edittitle:edtitle.value,
            editappproc:edappproc.value,
            editdocreq:eddocreq.value,
            editdesc:eddesc.value,
            edittype:edtype.value,
            editposition:edposition.value,
            editsalary:edsalary.value,
            edittarpgm:edtarpgm.value,
            editloc:edloc.value,

        })
    })

    window.location="/manipulatejobs";
    })