"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// hello world! 
const inquirer_1 = __importDefault(require("inquirer"));
const User_One = {
    name: "David",
    age: 20,
    occupation: "Student"
};
const desiresToSpeak = () => {
    inquirer_1.default
        .prompt(["Do you want to say something? ([y]es or [n]o)"])
        .then((answer) => {
        if (answer == 'y') {
            return true;
        }
        else if (answer == 'n') {
            return false;
        }
        else {
            return null;
        }
    });
    return null;
};
const displayUserData = (user) => {
    console.log(`Your name is ${user.name}, and you are ${user.age.toString} years old.`);
    console.log(`Your occupation is ${user.occupation}. In addition to that, you are\
${user.isEmployed ? `employed` : `unemployed :P`}.`);
};
console.log("\n> Hello! Here's your information: \n");
displayUserData(User_One);
console.log("\n> What do you think?");
//asks if user wants to say something
//add function that adds speech to user
