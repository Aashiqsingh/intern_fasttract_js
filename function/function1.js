// There are four type function
// 1. without return without argument
// 2. without return with argument
// 3. with return without argument
// 4. with return with argument



// 1. without return without argument

function demo(){
    console.log("demo function called....");
    
}


// demo()

// 2. without return with argument

function add(x,y){
    console.log("Addition = ",x+y);
    
}

// add(3,4)

// 3. with return without argument

function greet(){
    return "Greet function called..."
}

// var x = greet()
// console.log(x);

// console.log(greet());


// 4. with return with argument
function mul(a,b,c){
    return a*b*c;
}

var x = mul(2,3,4)
console.log("multiply = ",x);
