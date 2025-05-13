function science(name,per){
    return name + " your admision confirm in science stream with per " + per 
}

function commerce(name,per){
    return name + " your admision confirm in commerce stream with per " + per 
}

function arts(name,per){
    return name + " your admision confirm in arts stream with per " + per 
}


var percentage = parseInt(prompt("Enter your percentage :"))
var temp;
if(percentage > 90)
{
    temp = science("mallika",percentage)
}
else if(percentage > 70)
{
    temp = commerce("tapan",percentage)
}
else if(percentage > 50)
{
    temp = arts("rajvi",percentage)
}
else{
    console.log("Failed...");
    
}

console.log(temp);
