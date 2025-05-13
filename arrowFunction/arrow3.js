const lasvegas = (file)=>{
    return file.name + " your tour is confirm lasvegas with package " + file.amount;
}

const newyork = (file)=>{
    return file.name + " your tour is confirm newyork with package " + file.amount;
}

const london = (file)=>{
    return file.name + " your tour is confirm london with package " + file.amount;
}

const goa = (file)=> file.name + " your tour is confirm goa with package " + file.amount;


let budget = 1200;
let firstName = "rajvi";
let ans;

if(budget >= 4000)
{
    ans = lasvegas(
        {
            name:firstName,
            amount:budget
        }
    )
}
else if(budget > 3000)
{
    ans= newyork({name:firstName,amount:budget})
}
else if(budget > 2000){
    ans = london({name:firstName,amount:budget})
}
else if(budget > 1000){
    ans = goa({name:firstName,amount:budget})
}
else{
    console.log("Failed...")
}
console.log(ans);
