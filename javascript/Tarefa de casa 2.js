// Exercício 1
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

// Exercício 2
function main () {
    
    let name, sname, year
    let user, email, pw
    
    function ask_name() {
        while (true) {
            let input = prompt("Please tell me your name: ");
            
            if (input === null) {
                console.log("Please insert a valid name.");
                continue;
            }
            
            if (input.trim() === "") {
                console.log("Please insert a valid name.");
                continue;
            }
            
            name = input
            
            break;
        }
    }
    
    function ask_sname() {
        while (true) {
            let input = prompt("And surname: ");
            
            if (input === null) {
                console.log("Please insert a surname.");
                continue;
            }
            
            if (input.trim() === "") {
                console.log("Please insert a valid surname.");
                continue;
            }
            
            sname = input
            
            break;
        }
    }
    
    function ask_year() {
        while (true) {
            let input = prompt("What is your year of hiring: ");
            
            if (input === null) {
                console.log("Please insert a valid number.");
                continue;
            }
            
            if (input.trim() === "") {
                console.log("Please insert a valid number.");
                continue;
            }
            
            year = Number(input);
            
            if (Number.isNaN(year)) {
                console.log("Please insert a valid number.");
                continue;
            }
            
            year = String(year);
            
            break;
        }
    }
    
    function string_cut() {
            user = name.toLowerCase()[0]+sname.toLowerCase()
            email = name.toLowerCase()+"."+sname.toLowerCase()+"@empresa.temp.br"
            pw = name + year.slice(-2)
    }
    
    ask_name();
    ask_sname();
    ask_year();
    string_cut();
    
    console.log(`Usuário: ${user}`);
    console.log(`Email: ${email}`);
    console.log(`Senha ${pw}`);
    
}

main();

// Exercício 3
main();

function main() {
    const bruto = getNumber("Qual seu salário bruto? (insira só o número) ", "Por favor, insira um número.");
    const insspc = getNumber("Qual o percentual do INSS? (insira só o número) ", "Por favor,  insira um número.");
    const vtpc = getNumber("Qual o percentual do Vale Transporte? (insira só o número) ", "Por favor, insira um número.");
    const valor_inss = getPercentage(insspc) * bruto;
    const valor_vt = getPercentage(vtpc) * bruto;
    const liquido = bruto - valor_vt - valor_inss;
    const dc_total = bruto - liquido
   
    console.log(`Valor do INSS: ${valor_inss}`);
    console.log(`Valor do Vale Transporte: ${valor_vt}`);
    console.log(`Salário líquido: ${liquido}`);
    console.log(`Desconto total: ${dc_total}`);
}

function getNumber(promptmessage, errormessage) {
    while (true) {
        let input = prompt(promptmessage)?.trim() ?? "";
        if (input !== "" && !Number.isNaN(Number(input))) {
            return input;
        }
        console.log(errormessage);
    }
}

function getPercentage(number) {
    let num = Number(number);
    let pc = num / 100
    return pc;
}

// Exercício 4
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

//Exercício 5
main();

function main() {
    const id = getString("ID do produto: ")
    const name = getString("Nome do produto: ")
    const price = getString("Preço do produto: ")
    const qty = getString("Quantidade do produto: ")
    
    console.log(id+",", name+",", price+",", qty+".");
}

function getString(promptmessage) {
    while (true) {
        let input = prompt(promptmessage)?.trim() ?? "";
        if (input !== "") {
            return input;
        }
        console.log("Por favor, digite algo");
    }
}

// Exercício 6
main();

function main() {
    const distance = getNumber("Distância da viagem (KM): ");
    const consumption = getNumber("Consumo do combustível (KM/L): ");
    const fuel_price = getNumber("Preço do combustível (R$/L: ");
    const toll_num = getNumber("Número de pedágios: ");
    const toll_cost = getNumber("Custo médio dos pedágios: ");
    
    const fuel_price_total = (distance / consumption) * fuel_price
    const toll_cost_total = toll_num * toll_cost
    const cost_total = fuel_price_total + toll_cost_total
}

function getNumber(promptmessage) {
    while (true) {
        let input = prompt(promptmessage)?.trim() ?? "";
        if (input !== "" && !Number.isNaN(Number(input))) {
            return Number(input);
        }
        console.log("Por favor, insira um número. Somente o número.");
    }
}

// Exercício 7 
main();

function main() {
    const remetente = getString("Nome do remetente: ");
    const destinatario = getString("Nome do destinatário: ")
    const email = getString("Corpo da mensagem: ")
    
    console.log(`Prezado(a) ${destinatario}, me chamo ${remetente} e ${email}`);
}

function getString(promptmessage) {
    while (true) {
        let input = prompt(promptmessage)?.trim() ?? "";
        if (input !== "") {
            return input;
        }
        console.log("Por favor, digite algo.");
    }
}
