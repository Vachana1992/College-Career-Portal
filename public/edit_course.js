
const editbutton = document.querySelector('#edit-button');
const course_id  = document.querySelector('#course_id');
const program_id  = document.querySelector('#program_id');
const course_name = document.querySelector('#course_name');
const program_name = document.querySelector('#program_name');
const term= document.querySelector('#term');
const no_of_students = document.querySelector('#no_of_students');
const instructor_name = document.querySelector('#instructor_name');



editbutton.addEventListener('click',_=>{
    fetch('/update/course',{
        method:'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            course_id: course_id.value,
            program_id: program_id.value,
            course_name: course_name.value,
            program_name: program_name.value,
            term: term.value,
            no_of_students: no_of_students.value,
            instructor_name:instructor_name.value
        })
    })
})