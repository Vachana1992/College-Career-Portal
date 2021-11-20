const editbutton = document.querySelector('#edit-button')
const employer_id = document.querySelector('#employer_id')
const name = document.querySelector('#name')
const address = document.querySelector('#address')
const city = document.querySelector('#city')
const province = document.querySelector('#province')
const zip_code = document.querySelector('#zip_code')
const phone = document.querySelector('#phone')
const employer_email = document.querySelector('#employer_email')


editbutton.addEventListener('click',_=>{
    fetch('/update/employer',{
        method:'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            employer_id: employer_id.value,
            name: name.value,
            address: address.value,
            city: city.value,
            province: province.value,
            zip_code: zip_code.value,
            phone:phone.value,
            employer_email:employer_email.value
        })
    })
})