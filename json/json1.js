// var student = {
//     id:1,
//     name:"rajvi",
//     age:20,
//     email:"rajvi@gmail.com",
//     isActive:true,
// }

// console.log(student);

// console.log(student.email);
// console.log(student.name);


var product = {
    id:1,
    name:"I phone",
    price:98767,
    color:["white","pink","black","grey","blue"],
    isAvailable:true,
    description:{
        model:"Iphone 15",
        ram:"8gb",
        storage:"1tb",
        batery:"5000mh",
        camera:"50mp"
    }
}

console.log(product);
console.log(product.name);
console.log(product.price);
console.log(product.color);
console.log(product.color[0]);

for(let i=0;i<product.color.length;i++)
{
    console.log(product.color[i]);
    
}

console.log(product.description);
console.log(product.description.model);






