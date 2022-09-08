let form = document.querySelector('form')
let username = document.querySelector('#user')
let terms = document.querySelector('#terms')
let selectClub = document.querySelector("#clubs");
form.addEventListener('submit',function(e){
    e.preventDefault()
    console.log('username :' ,username.value)
    console.log('TermsResponse :' ,terms.checked)
    console.log('selected Club :' ,selectClub.value)
})