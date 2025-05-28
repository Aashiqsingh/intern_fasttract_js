function storeData(){
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let age = document.getElementById("age");

    // console.log(email.value, password.value, age.value);
    localStorage.setItem("email",email.value)
    localStorage.setItem("password",password.value)
    localStorage.setItem("age",age.value)
    
}


function getData(){
    let mydiv = document.getElementById("mydiv");

    let email2 = localStorage.getItem("email")
    let password2 = localStorage.getItem("password")
    let age2 = localStorage.getItem("age")

    mydiv.innerHTML = "Email " + email2 + "<br>" + "Password :" + password2 + "<br>" + "Age :" + age2;
}

function deleteData(){
    // localStorage.clear();
    localStorage.removeItem("email")
}