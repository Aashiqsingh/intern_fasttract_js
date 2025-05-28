function getData(){
    var promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve("Data fetched successfully...");
            reject("error in fetching data....")
        },4000)
    })

    console.log(promise);
    promise.then((data)=>{
        console.log(data);
    })
    promise.catch((err)=>{
        console.log("Error: " + err);
        console.log("Ending....");
    })


    
    
    
}

getData()