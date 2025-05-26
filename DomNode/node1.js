var mydiv = document.getElementById('mydiv');

function addElement(){
    let h1 = document.createElement("h1")
    h1.innerHTML = "Hello World";



    let link = document.createElement("a")
    link.innerHTML = "Google";
    link.setAttribute("href","https://www.google.com");
    link.addEventListener("mouseleave",()=>{
        link.href = "https://netflix.com"
    })



    mydiv.appendChild(h1)
    mydiv.appendChild(link)
}