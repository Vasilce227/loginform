function register(){
    username=reg_usn.value;
    email=reg_email.value;
    pswd=reg_pswd.value;
    rptpswd=reg_rptpswd.value;
    console.log(username,email,pswd,rptpswd);

    registerDetails={
        username,
        email,
        pswd,
        rptpswd
    }
    if(pswd !== rptpswd){
        alert("Password doesnt match")
        reg_pswd.value=""
        reg_rptpswd.value=""
    }
    

    if(email in localStorage){
        alert("User already registered")
    }
    else{
        localStorage.setItem(email,JSON.stringify(registerDetails))
        alert("Register successfully")
        window.location="./login.html"
    }
}
function login(){
    email=log_email.value;
    pswd=log_pswd.value;
    console.log(email,pswd);

    if(email in localStorage){
        registerDetails=JSON.parse(localStorage.getItem(email))
        if(pswd==registerDetails.pswd) {
            alert("Login successfully")
            window.location="./home.html"

        }
        else{
            alert("Password incorrect")
        }
    }
    else{
        alert("Incorrect email")
    }
}

