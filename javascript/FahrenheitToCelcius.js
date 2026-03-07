function main() {
    let f;
    let c;
    
    function ask_f() {
        while (true) {
            let input = prompt("Temperature in Fahrenheit: ");
            
            if (input === null) {
                console.log("Please insert a valid number.");
                continue;
            }
            
            if (input.trim() === "") {
                console.log("Please insert a valid number.");
                continue;
            }
            
            f = parseInt(input);
            
            if (Number.isNaN(f)) {
                console.log("Please insert a valid number.");
                continue;
            }
            
            break;
        }
    }
    
    function find_c() {
        c = ((f - 32) * 5) / 9
        console.log("The equivalent temperature in Celcius is: " +c);
    }
    
    ask_f();
    find_c();
}

main();

// c = ((f - 32) * 5) / 9
