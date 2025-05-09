// for(let i=0;i<=5;i++)
// {
//     // console.log("hello world...");
//     console.log(i);
    
    
// }


// let i=0;
// while(i < 5)
// {
//     console.log(i);
//     i++;
// }

// let i=0;

// do{
//     console.log(i);
//     i++    

// }while(i <= 5)


// let num = 23;
// let flag = 0;

// for(let i=2;i<num;i++)
// {
//     if(num % i == 0)
//     {
//         flag = 1;
//     }


// }

// if(flag == 1)
// {
//     console.log("Not prime");
    
// }
// else{
//     console.log("Prime number");
    
// }

// let num = 1234;

// // 6432
// let rev = 0;
// while(num > 0)
// {
//     let rem = num % 10;
//     rev = rev * 10 + rem;
//     num = Math.floor(num / 10);
// }

// console.log(rev);
let evenSum = 0;
let oddSum = 0;

for(let i=1;i<=100;i++)
{
    if(i % 2 == 0)
    {
        evenSum += i;
    }
    else{
        oddSum += i;
    }
}

console.log("Even number sum = ",evenSum);
console.log("Odd number sum = ",oddSum);

