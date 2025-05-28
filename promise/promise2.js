// const getData = ()=>{

//     var promise = new Promise((success,failure)=>{
//         setTimeout(()=>{
//             success({
//                 status:200,
//                 msg:"Data fetched successfully...",
//             })
//         },4000)
//     })

//     console.log(promise);
//     promise.then((data)=>{
//         console.log(data);
//         console.log("Ending....");
//     })
//     promise.catch((err)=>{
//         console.log("Error: " + err);
//         console.log("Ending....");
//     })
    


// }

// getData()



// const getData = ()=>{

//     var promise = new Promise((success,failure)=>{
//         setTimeout(()=>{
//             success({
//                 status:200,
//                 msg:"Data fetched successfully...",
//             })
//         },4000)
//     })

//     return promise


// }

// let ans = getData()
// ans.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log("Error: " + err);
//     console.log("Ending....");
// })




const getData = ()=>{

    return new Promise((success,failure)=>{
        setTimeout(()=>{
            success({
                status:200,
                msg:"Data fetched successfully...",
            })
        },4000)
    })

}

getData().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log("Error: " + err);
})










// let ans = getData()
// ans.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log("Error: " + err);
//     console.log("Ending....");
// })