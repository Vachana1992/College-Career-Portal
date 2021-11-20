const editbutton = document.querySelector('#edit-button')
const student_id = document.querySelector('#student_id')
const first_name = document.querySelector('#first_name')
const last_name = document.querySelector('#last_name')
const address = document.querySelector('#address')
const phone = document.querySelector('#phone')
const email = document.querySelector('#email')


editbutton.addEventListener('click',_=>{
    fetch('/update/student',{
        method:'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          student_id: student_id.value,
          first_name: first_name.value,
          last_name: last_name.value,
          address: address.value,
          phone: phone.value,
          email: email.value
        })
    })
})