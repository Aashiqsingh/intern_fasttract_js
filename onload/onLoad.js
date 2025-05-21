function red(){
    let body = document.getElementsByTagName("body")[0]
    console.log(body);
    

    body.style.backgroundColor = "red";


    setTimeout(()=>{
        yellow()
    },4000)
}

const yellow = ()=>{
    let body = document.getElementsByTagName("body")[0]
    console.log(body);
    
    body.style.backgroundColor = "yellow"
   
   setTimeout(()=>{
    green()
   },4000)
   
  
}

function green(){
    let body = document.getElementsByTagName("body")[0]


    body.style.backgroundColor = "green"


    setTimeout(()=>{
        red()
    },4000)
}