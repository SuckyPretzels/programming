/* 1
function main() {
    let width, length, height;
    let area_not_painted, yield;
    let area_walls, area_painted, liters;
    
    function ask_width() {
        while (true) {
            let input = prompt("Width of the room: ");
            
            if (input === null) {
                console.log("Please insert a valid number.");
                continue;
            }
            
            if (input.trim() === "") {
                console.log("Please insert a valid number.");
                continue;
            }
            
            width = Number(input);
            
            if (Number.isNaN(width)) {
                console.log("Please insert a valid number.");
                continue;
            }
            
            break;
        }
    }
    
    function ask_length() {
        while (true) {
            let input = prompt("Length of the room: ");
            
            if (input === null) {
                console.log("Please insert a valid number.");
                continue;
            }
            
            if (input.trim() === "") {
                console.log("Please insert a valid number.");
                continue;
            }
            
            length = parseInt(input);
            
            if (Number.isNaN(length)) {
                console.log("Please insert a valid number.");
                continue;
            }
            
            break;
        }
    }
    
    function ask_height() {
        while (true) {
            let input = prompt("Height of the room: ");
            
            if (input === null) {
                console.log("Please insert a valid number.");
                continue;
            }
            
            if (input.trim() === "") {
                console.log("Please insert a valid number.");
                continue;
            }
            
            height = parseInt(input);
            
            if (Number.isNaN(height)) {
                console.log("Please insert a valid number.");
                continue;
            }
            
            break;
        }
    }
    
    function ask_area_not_painted() {
        while (true) {
            let input = prompt("How much of the room won't be painted: ");
            
            if (input === null) {
                console.log("Please insert a valid number.");
                continue;
            }
            
            if (input.trim() === "") {
                console.log("Please insert a valid number.");
                continue;
            }
            
            area_not_painted = parseInt(input);
            
            if (Number.isNaN(area_not_painted)) {
                console.log("Please insert a valid number.");
                continue;
            }
            
            break;
        }
    }
    
    function ask_paint_yield() {
        while (true) {
            let input = prompt("Yield of the paint (m²/L): ");
            
            if (input === null) {
                console.log("Please insert a valid number.");
                continue;
            }
            
            if (input.trim() === "") {
                console.log("Please insert a valid number.");
                continue;
            }
            
            paint_yield = parseInt(input);
            
            if (Number.isNaN(paint_yield)) {
                console.log("Please insert a valid number.");
                continue;
            }
            
            break;
        }
    }
    
    function find_area_painted() {
        area_walls = 2 * (length + width) * height
        area_painted = area_walls - area_not_painted
        console.log("You will need to paint " +area_painted+ " m² of the walls.");
    }
    
    function find_liters() {
        liters = area_painted / paint_yield
        console.log("And you will use " +liters+ " liters of paint.");
    }
    
ask_width();
ask_length();
ask_height();
ask_area_not_painted();
ask_paint_yield();
find_area_painted();
find_liters();
}

main();

// area_walls = 2 * (length + width) * height
// area_painted = area_walls - area_not_painted
// paint_liters = area_painted / yield
*/ 


/* 4
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
*/ 
