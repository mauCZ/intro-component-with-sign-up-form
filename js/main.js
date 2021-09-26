function cleanInput(element){
    element.classList.remove('error-message');
    element.innerText = "";
}
function verifyFirstName(firstName){
    return firstName.length > 0;
}
function verifyLastName(lastName){
    return lastName.length > 0;
}
function verifyEmail(email){
    return false;
}
function verifyPassword(password){
    return password.length > 0;
}

let inputs = document.querySelectorAll('form input')
for(let input of inputs){
    if(input.type != 'submit'){
        input.addEventListener('focus',()=>{
            cleanInput(input.nextElementSibling);
        },false);
    }
}

let form = document.querySelector('form');
form.addEventListener('submit',function(e){ 
    for(let input of inputs){
        if(input.id=='firstName'){
            if(!verifyFirstName(input.value)){
                input.nextElementSibling.classList.add('error-message');
                input.nextElementSibling.innerText="First Name cannot be empty";
            }
        }
        else if(input.id=='lastName'){
            if(!verifyLastName(input.value)){
                input.nextElementSibling.classList.add('error-message');
                input.nextElementSibling.innerText="Last Name cannot be empty";
            }
        }
        else if(input.id=='email'){
            if(!verifyEmail(input.value)){
                input.nextElementSibling.classList.add('error-message');
                input.nextElementSibling.innerText="Looks like this is not an email";
            }
        }
        else if(input.id=='password'){
            if(!verifyPassword(input.value)){
                input.nextElementSibling.classList.add('error-message');
                input.nextElementSibling.innerText="Password cannot be empty";
            }    
        }
    }
    e.preventDefault();
})

