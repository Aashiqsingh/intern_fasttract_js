

var users = ["rajvi","ram","seeta","geeta","bhuwan","hanuman"];


// for(let i=0;i<users.length;i++){
//     console.log(users[i]);
    
// }


// forEach -- void
// user == users[i]

// users.forEach((user)=>{
//     console.log(user);
    
// })


// some -- boolean

var x = users.some((user)=>{
    return user.startsWith("s")
})
console.log(x);

// every -- boolean
// var y = users.every((user)=>{
//     return user.includes("a")
// })


// console.log(y);

// var y = users.every((user)=> user.includes("a"))
// console.log(y);
