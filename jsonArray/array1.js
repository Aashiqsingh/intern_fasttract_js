var users = [
    {
        id : 1,
        name:"pranshul",
        age:15,
        email:"pranshul@gmail.com",
        mobile:'7826397878'
    },
    {
        id:2,
        name:"rahul",
        age:29,
        email:"rahul@gmail.com",
        mobile:'87263978'
    },
    {
        id:3,
        name:"rohan",
        age:27,
        email:"rohan@gmail.com",
        mobile:'9826397878'
    },
    {
        id:4,
        name:"ronali",
        age:24,
        email:"sonali@gmail.com",
        mobile:'8726978'
    }
]

// console.log(users);

// var x = users.map((user)=>{
//     return user.name
// })

// console.log(x);


// users.forEach((user)=>{
//     console.log(user.name);
    
// })

// let newArry = []

// users.forEach((user)=>{
//     // console.log(user.name);
//     newArry.push(user.name)
    
// })

// console.log(newArry);





let x = users.filter((user)=>{
    return user.age > 20
})

console.log(x);
