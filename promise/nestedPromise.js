const getOrder = ()=>{
    console.log("Order is going to be placed...");
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
                resolve({
                    orderId:1213,
                    message:"Order fetched successfully...",
                    amount:499
                })
        },4000)
    })
}

const getPayment = (data)=>{
    console.log("Payment is going to be done...");
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                paymentId:data.orderId ,
                message:"Payment done successfully...",
                amount:data.amount
            })
        },3000)
    })
}


getOrder().then((data)=>{
    console.log("Food order detail....",data);
    getPayment(data).then((res)=>{
        console.log("Payment detail....",res);
    }).catch((err)=>{
        console.log("Error: " + err);
    })
}).catch((err)=>{
    console.log("Error: " + err);
})