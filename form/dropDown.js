var mydiv = document.getElementById("mydiv");
const changeColor = ()=>{
    let colors = document.getElementById("colors");
    console.log(colors.value);

    

    mydiv.style.height = "200px";
    mydiv.style.width = "200px";
    mydiv.style.backgroundColor = colors.value;
    mydiv.style.margin = "100px 400px"
}

const changeRadius = ()=>{

    let radius = document.getElementById("radius");
    console.log(radius.value);

    mydiv.style.borderRadius = radius.value;
}