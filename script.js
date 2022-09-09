let form = document.querySelector('form')
let username = document.querySelector('#user')
let terms = document.querySelector('#terms')
let selected = document.querySelector('#clubs')
// let selectClub = document.querySelector("#clubs");
// form.addEventListener('submit',function(e){
//     e.preventDefault()
//     console.log('username :' ,username.value)
//     console.log('TermsResponse :' ,terms.checked)
//     console.log('selected Club :' ,selectClub.value)
// })
// using input events and change
let information= {}
for (let input of [username,terms,selected]) {
    input.addEventListener('input',({target})=>{
       const{name,value,checked,type} = target
       information[name] = type == 'checkbox' ? checked : value
       console.log(information)

    })
}