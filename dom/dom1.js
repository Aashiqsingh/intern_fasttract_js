// document.getElementById("txt").innerHTML = "Hello World";

function changeColor(){
    let txt = document.getElementById("txt")
    txt.innerHTML = "Royal technosoft p ltd.";
    txt.style.backgroundColor = "red";
    txt.style.color = "white";
    txt.style.height = "200px";
    txt.style.width = "200px";
}

function changeRef(){
    let link = document.getElementById("link")
    link.href = "https://www.netflix.com";
    link.target = "_blank";
    link.innerHTML = "Netflix";
}