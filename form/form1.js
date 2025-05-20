function submitHandler(event){
    event.preventDefault();
    // alert("Form submitted...")
    // console.log("Form submitted...")

    let name = document.getElementById("name").value
    // console.log(name);
    let email = document.getElementById("email").value

    let phone = document.getElementById("phone").value

    let nameErr = document.getElementById("nameErr")
    let emailErr = document.getElementById("emailErr")
    let phoneErr = document.getElementById("phoneErr")


    // if(name == "")
    // {
    //     // alert("Name is required")
    //     nameErr.innerHTML = "Name is required"
    //     nameErr.style.color = "red"
    // }
    // else if(name.length < 4)
    // {
    //     // alert("Name should be atleast 4 characters")
    //     nameErr.innerHTML = "Name should be atleast 4 characters";
    //     nameErr.style.color = "red"
    // }
    // else{
    //     nameErr.innerHTML = name
    //     nameErr.style.color = "green"
    // }


    var phoneRegex = /[6-9]{1}[0-9]{9}$/
    var nameRegex = /[A-Z]{1}[a-zA-Z]+$/

    if(name.match(nameRegex)){
        nameErr.innerHTML = name
        nameErr.style.color = "green"
    }
    else{
        nameErr.innerHTML = "Name should be Alphabets"
        nameErr.style.color = "red"
    }
    


    if(phone == ""){
        phoneErr.innerHTML = "Phone is required"
    }
    else if(phone.match(phoneRegex)){
        phoneErr.innerHTML = phone
        phoneErr.style.color = "green"
    }
    else{
        phoneErr.innerHTML = "Invalid Phone Number"
        phoneErr.style.color = "red"
    }













    let output = document.getElementById("output")


    // console.log("Name ---> ",name);
    // console.log("Email ---> ",email);
    // console.log("Password ---> ",pass);

    // let user = {
    //     name:name,
    //     email:email,
    //     pass:pass
    // }
    
    // console.log(user);
    // output.innerHTML = user.name
    // let ans = JSON.stringify(user)
    // output.innerHTML = ans

    // console.log(ans[0]);
    
    
}