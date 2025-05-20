const submitHandler = (event)=>{
    event.preventDefault();


    let name = document.getElementById("name")
    let gender = document.getElementsByName("gender")
    let age = document.getElementById("age")

    let output = document.getElementById("output")

    var gen = ''

    // console.log(gender);
    if(gender[0].checked == true){
        gen = "Male"
    }
    else if(gender[1].checked){
        gen = "Female"
    }
    else{
        gen = "Other"
    }

    // console.log(name.value);
    // console.log(gen);
    // console.log(age.value);
    
    if(gen == "Male"){
        if(age.value > 18)
        {
            output.innerHTML = "You are eligible for Vote.."
        }
        else{
            output.innerHTML = "You are not eligible for Vote.."
        }
    }
    else if(gen == "Female"){
        if(age.value > 21){
            output.innerHTML = "You are eligible for Vote.."
        }
        else{
            output.innerHTML = "You are not eligible for Vote.."
        }
    }
    else{
        if(age.value > 25){
            output.innerHTML = "You are eligible for Vote.."
        }
        else{
            output.innerHTML = "You are not eligible for Vote.."
        }
    }
    
}