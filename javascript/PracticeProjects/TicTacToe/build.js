// @ts-check
const fs = require("fs");
const prompt = require('prompt-sync')({ sigint: true });

let html = fs.readFileSync("index.html", "utf-8");
let css = fs.readFileSync("style.css", "utf-8");
let js = fs.readFileSync("index.js", "utf-8");

// replace CSS
html = html.replace(
    /<link rel="stylesheet" href="style.css">/,
    `<style>\n${css}\n</style>`
);

// replace JS
html = html.replace(
    /<script src="index.js"><\/script>/,
    `<script>\n${js}\n</script>`
);

// extract title for filename
// let titleMatch = html.match(/<title>(.*?)<\/title>/);
// let filename = titleMatch ? titleMatch[1].toLowerCase().replace(/\s+/g, "-") : "output";

// ask filename
let filename = prompt("Name of the new file? ");
fs.writeFileSync(`${filename}.html`, html);

console.log("Build complete!");

