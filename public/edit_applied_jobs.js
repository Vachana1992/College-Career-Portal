
const editbutton = document.querySelector('#edit-button');
const job_id  = document.querySelector('#job_id');
const gpa  = document.querySelector('#gpa');
const preferred_location = document.querySelector('#preferred_location');




editbutton.addEventListener('click',_=>{
    fetch('/update/appliedjobs',{
        method:'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            job_id: job_id.value,
            gpa: gpa.value,
            preferred_location: preferred_location.value
        })
    })
})