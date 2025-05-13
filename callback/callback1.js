function demo(){
    console.log("demo function");
    
}


function test(x){
    // console.log(x);
    x()
    
}

// test(12)
// test("ram")
// test(12.23)
// test(true)

test(demo)