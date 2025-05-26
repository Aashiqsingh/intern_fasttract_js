var txt = document.getElementById("txt");

txt.addEventListener("click",()=>{
    txt.innerHTML = "Royal technosoft p ltd."
})

txt.addEventListener("mouseleave",()=>{
    txt.style.backgroundColor = "red";
})
txt.addEventListener("mouseenter",()=>{
    txt.style.height = "100px";
    txt.style.width = "100px";
})