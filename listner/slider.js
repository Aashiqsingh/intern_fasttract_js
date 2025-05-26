var prev = document.getElementById("prev");

var images = ["img1.jpg","img2.jpg","img3.avif","img4.jpg","img5.jpg"];

var currentIndex = 0;

var img = document.getElementById("img");

prev.addEventListener("click",()=>{
                          (3   - 1 + 5) % 5
    currentIndex = (currentIndex - 1 + images.length)% images.length;
    console.log(currentIndex);

    img.src = "../image/" + images[currentIndex]
    
})

var next = document.getElementById("next");

next.addEventListener("click",()=>{
    
    currentIndex = (currentIndex + 1)% images.length;
                        // 3 + 1 % 5

    console.log(currentIndex);
    img.src = "../image/" + images[currentIndex]
})