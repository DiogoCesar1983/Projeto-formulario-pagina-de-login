function seePassword(){
    const inputPass= document.getElementById('password');
    const btnShowPass= document.getElementById('eye')

    if(inputPass.getAttribute('type')==='password'){
        inputPass.setAttribute('type','text');
        btnShowPass.classList.replace('bi-eye-fill','bi-eye-slash-fill')
    }else{
        inputPass.setAttribute('type','password');
        btnShowPass.classList.replace('bi-eye-slash-fill','bi-eye-fill')

    }

}