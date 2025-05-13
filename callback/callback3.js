const science = (option)=>{
    return option.name + " your admision confirm in science stream with per " + option.per
}

const commerce = (option)=>{
    return option.name + " your admision confirm in commerce stream with per " + option.per
}

const arts = (option)=>{
    return option.name + " your admision confirm in arts stream with per " + option.per
}


const addmission = (file,cb)=>{
    let ans = cb({name:file.name,per:file.per})
    // console.log(ans);


    return ans;
    
}

let per = 93;
let firstName = "gaurav";
let ans;


if(per > 90)
{
    ans = addmission({name:firstName,per:per},science)
}
else if(per > 70){
    ans= addmission({name:firstName,per:per},commerce)
}
else if(per > 50){
    ans = addmission({name:firstName,per:per},arts)
}
else{
    console.log("you are not admitted")
}
console.log(ans);
