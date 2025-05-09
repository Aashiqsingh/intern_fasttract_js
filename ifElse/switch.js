var a = parseInt(prompt("Enter first number :"))
var b = parseInt(prompt("Enter second number :"))


var choice = prompt("1 for Add \n2 for Sub \n3 for Mul \n4 for div \n\nEnter your choice :");

switch(choice){
    case "1": alert("Addition = " + (a + b));
        break;

    case "2":   alert("Subtrcat = " + (a-b));
        break;

    case "3": alert("Multiply = " + (a*b))
        break;

    case "4":
            alert("Division = "+ (a/b));
            break;

    default:
            alert("Pls select correct option...")
}
