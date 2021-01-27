#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const emoji = require("node-emoji");



// Informations

const data = {
    intro : chalk.hex('#facb45').bold("        ✧･ﾟ: *✧･ﾟ:* 　🌙　 *:･ﾟ✧*:･ﾟ✧"),
    name: chalk.bold.bgBlack("                  Sandrine Lê                 "),
    work: chalk.white("Front End Developer"),
    github: chalk.white("https://github.com/SandrineLe"),
    web: chalk.white("https://sandrinele.com"),
    card: chalk.hex('#facb45')("npx") + chalk.white(" @sandrinle/card"),

    labelWork: chalk.white.bold("     Work ―"),
    labelGitHub: chalk.white.bold("     GitHub ―"),
    labelWeb: chalk.white.bold("     Web ―"),
    labelCard: chalk.white.bold("     Card ―"),
};



const NEWLINE = "\n";
const EMPTYLINE = "";

console.log(
    chalk.hex('#facb45')(
        boxen(
            [   
                `${data.intro}`,
                EMPTYLINE,
                `${data.name}`,
                EMPTYLINE,
                `${data.labelWork} ${data.work}`,
                `${data.labelGitHub} ${data.github}`,
                `${data.labelWeb} ${data.web}`,
                EMPTYLINE,
                `${data.labelCard} ${data.card}`,
                EMPTYLINE,

            ].join(NEWLINE),
            {
                padding: 1,
                margin: 1,
                float: "center",
                borderStyle: "round",
            },
        ),
    ),
);