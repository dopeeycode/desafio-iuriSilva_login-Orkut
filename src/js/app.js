const inputPassword = document.getElementById('password');
const eyeShowPassword = document.getElementById('showpasword');
const eyeHidePassword = document.getElementById('hidePassword');
const inputEmail = document.getElementById('email');
const spanEmail = document.getElementById('spanEmail');
const spanPassword = document.getElementById('spanPassword');



function showPassword(){
    if(inputPassword.type == 'password'){
        inputPassword.type  = 'text';
        eyeShowPassword.setAttribute('style', 'display: none');
        eyeHidePassword.setAttribute('style', 'display: block');
    }else if(inputPassword.value.length < 6){
        spanPassword.innerText = 'Caractere minimo é 6';
    }
    else{
        inputPassword.type = 'password';
        eyeShowPassword.setAttribute('style', 'display: block');
        eyeHidePassword.setAttribute('style', 'display: none');
    }
    
    
}

//Validação de inputs


function ValidationInput(){
    inputEmailValue = inputEmail.value;
    inputPasswordValue = inputPassword.value;
    if(inputEmailValue, inputPasswordValue == ''){
        showSpansError();
    }

    else if(inputEmailValue != 'italodopeey@gmail.com' ){
        spanEmail.innerText = 'Informe um email valido.';
    }else{
        window.location.href = 'orkutPage.html';
    }

}

function showSpansError(){
    spanEmail.innerText = 'Informe um email valido.';
    spanPassword.innerText = 'Informe uma senha valida.';
}


function typingEmail(){
    spanEmail.innerText = '';

}

function typingPassword(){
    spanPassword.innerText = '';
}
