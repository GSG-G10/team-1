const bowlEntary = document.querySelectorAll('.bowl_entary')
const password = document.querySelector('.password')
const form = document.querySelector('.form')

//save status value
let statusValues = {
    email: false,
    password: false,
}

//reg exprestion for cutom entaryes
let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
let regExpEmail = /\S+@\S+\.\S+/;

bowlEntary.forEach(bowl=>{
    bowl.addEventListener('input',()=>{

        let kind = bowl.getAttribute('data-kind')
        let query = bowl.childNodes[3].value
        //if kind input email
        if(kind == "email"){
            if(query.match(regExpEmail)){
                bowl.classList.remove('bad')
                bowl.classList.add('good')
                statusValues.email = true
            }else{
                bowl.classList.remove('good')
                bowl.classList.add('bad')
                statusValues.email = false
            }
        }

        //if kind input password
        if(kind == "password"){
            if(query.match(regExpMedium) && query.match(regExpWeak) && query.match(regExpStrong) && query.length > 7){
                bowl.classList.remove('bad')
                bowl.classList.add('good')
                statusValues.password = true
            }else{
                bowl.classList.remove('good')
                bowl.classList.add('bad')
                statusValues.password = false
            }
        }
        
        if(query == ''){
            bowl.classList.remove('good')
            bowl.classList.remove('bad')
        }
    })
})

//check before send data
form.addEventListener('submit',(e)=>{
    if(statusValues.email && statusValues.password){
        console.log(" send");
    }else{
        if(!statusValues.email){
            document.querySelector('.bowl_email').classList.add('bad')
        }
        if(!statusValues.password){
            document.querySelector('.bowl_password').classList.add('bad')
        }
        e.preventDefault()
    }
})
