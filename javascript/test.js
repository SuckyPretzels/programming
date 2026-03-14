const prompt = require('prompt-sync')({ sigint: true });

main();

function main() {
    let name = prompt("what is your name? ");

    console.log(`Nice to meet you ${name}!`);
}

// time to pack your bags

console.log("you are a shit");
