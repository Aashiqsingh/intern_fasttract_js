function getData(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data fetched successfully...");
        },4000)
    })

}

const result = async()=>{
    let x = await getData()
    console.log(x);
}






result()





// async function result(){
//     let x = await getData()
//     console.log(x);




//     console.log("Ending....");
    
// }

// result()