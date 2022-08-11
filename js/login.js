document.getElementById('login-submit').addEventListener('click' , function(){

    const emailFiled = document.getElementById('user-email');
    const inputFiled = emailFiled.value;
    // console.log(inputFiled);


    // password 
    const userPassword = document.getElementById('user-password');
    const passwordFiled = userPassword.value;
    // console.log(passwordFiled);


    if(inputFiled == 'nandi@gmail.com' && passwordFiled == 'halder'){
        window.location.href = "banking.html"
    }
    else{
        console.log('invalid');
    }
})