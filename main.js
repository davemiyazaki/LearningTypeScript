"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// hello world! 
const inquirer_1 = __importDefault(require("/opt/homebrew/lib/node_modules/inquirer"));
const User_One = {
    name: "David",
    age: 20,
    occupation: "Student"
};
function desiresToSpeak() {
    inquirer_1.default.prompt([
        {
            type: 'confirm',
            name: "proceed",
            message: "Do you want to say something?",
            default: true
        }
    ]).then((answer) => {
        console.log(answer.proceed);
    });
    return null;
}
const displayUserData = (user) => {
    console.log(`Your name is ${user.name}, and you are ${user.age.toString} years old.`);
    console.log(`Your occupation is ${user.occupation}. In addition to that, you are\
${user.isEmployed ? `employed` : `unemployed :P`}.`);
};
console.log("\n> Hello! Here's your information: \n");
displayUserData(User_One);
console.log("\n> What do you think?");
//asks if user wants to say something
const answer = desiresToSpeak();
if (answer) {
    //propose for user to type to speak  
}
else if (answer == false) {
    // Nice to talk to you, goodbye!
}
else if (answer == null) {
    console.log("The answer is null");
    // where did you see that option brother? nuh good bye! 
}
//add function that adds speech to user
