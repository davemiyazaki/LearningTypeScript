"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const desiresToSpeak = () => __awaiter(void 0, void 0, void 0, function* () {
    yield inquirer_1.default.prompt([
        {
            type: 'confirm',
            name: "proceed",
            message: "Do you want to say something?",
            default: true
        }
    ]).then((answer) => {
        console.log(answer.proceed);
    });
    return false;
});
const displayUserData = (user) => {
    console.log(`Your name is ${user.name}, and you are ${user.age.toString} years old.`);
    console.log(`Your occupation is ${user.occupation}. In addition to that, you are\
${user.isEmployed ? `employed` : `unemployed :P`}.`);
};
console.log("\n> Hello! Here's your information: \n");
displayUserData(User_One);
console.log("\n> What do you think?");
//asks if user wants to say something
desiresToSpeak().then((answer) => {
    if (answer) {
        //propose for user to type to speak  
    }
    else if (answer == false) {
        console.log("It seems to return false");
        // Nice to talk to you, goodbye!
    }
    else if (answer == null) {
        console.log("The answer is null");
        // where did you see that option brother? nuh good bye! 
    }
    console.log("Couple of funny lines for test");
});
// Gotta learn async, await, and promise. 
//
//add function that adds speech to user
