let x = 1;
var colors = ["red","blue","green","yellow","purple","orange","black","white"];

const changeColor = ()=>{
    let mydiv = document.getElementById("mydiv")


    let randomIndex = Math.floor(Math.random() * colors.length);
    console.log(randomIndex);

    mydiv.style.backgroundColor = colors[randomIndex]
    
    // console.log("heloo");
    
    // console.log(x++);
    
}