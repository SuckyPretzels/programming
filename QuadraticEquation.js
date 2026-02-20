 function main() {
    console.log("Please input 3 numbers.")
    let a
    let b
    let c
    let d
    let x1
    let x2
    
    function ask_a() {
        while (true) {
            let input = prompt("First number: ");
            
            if (input === null) {
                console.log("Please insert a valid number.")
                continue;
            }
            
            if (input.trim() === "") {
                console.log("Please insert a valid number.")
                continue;
            }
            
            a = parseInt(input);
            
            if (Number.isNaN(a)) {
                console.log("Please insert a valid number.")
                continue;
            }
            
            break;
        }
    }
    
    function ask_b() {
        while (true) {
            let input = prompt("Second number: ")
            
            if (input === null) {
                console.log("Please insert a valid number.")
                continue;
            }
            
            if (input.trim() === "") {
                console.log("Please insert a valid number.")
                continue;
            }
            
            b = parseInt(input);
            
            if (Number.isNaN(b)) {
                console.log("Please insert a valid number.")
                continue;
            }
            
            break;
        }
    }
    
    function ask_c() {
        while (true) {
            let input = prompt("Third number: ")
            
            if (input === null) {
                console.log("Please insert a valid number.")
                continue;
            }
            
            if (input.trim() === "") {
                console.log("Please insert a valid number.")
                continue;
            }
            
            c = parseInt(input);
            
            if (Number.isNaN(c)) {
                console.log("Please insert a valid number.")
                continue;
            }
            
            break;
        }
    }
    
    function check_d() {
        d = b ** 2 - 4 * a * c;
        
        if (d < 0) {
            console.log("Delta: " +d);
            console.log("There are no valid roots.")
            return;
        }
        
        else {
            x1 = (-b + Math.sqrt(d)) / (2 * a)
            x2 = (-b - Math.sqrt(d)) / (2 * a)
            
            console.log("Delta: " +d);
            console.log("Root 1: " +x1);
            console.log("Root 2: " +x2);
        }
    }
    
    ask_a();
    ask_b();
    ask_c();
    check_d();

 }

 main();  
 
 // a * x**2 + b * x + c = 0
 // d = b**2 - 4ac
 // X1 = (-b + Math.sqrt(d)) / (2 * a)
 // X2 = (-b - Math.sqrt(d)) / (2 * a)
