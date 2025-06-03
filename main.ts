// hello world! 
import inquirer from 'inquirer';

interface UserInterface {
  name: string;
  age: number;
  occupation: string;
  isEmployed?:boolean;
}
const User_One: UserInterface = {
  name: "David",
  age: 20,
  occupation: "Student"
}

function desiresToSpeak() : boolean | null {
  inquirer
    .prompt(["Do you want to say something? ([y]es or [n]o)"])
    .then((answer : any) => {
      if(answer == 'y'){ return true} else if (answer == 'n') {return false} else { return null} 
      })
  return null;
}

const displayUserData =(user:UserInterface) => {
  console.log(`Your name is ${user.name}, and you are ${user.age.toString} years old.`); 
  console.log(`Your occupation is ${user.occupation}. In addition to that, you are\
${user.isEmployed ? `employed` : `unemployed :P`}.`);

}





console.log("\n> Hello! Here's your information: \n");
displayUserData(User_One);
console.log("\n> What do you think?")
//asks if user wants to say something
const answer = desiresToSpeak();
if (answer){
   //propose for user to type to speak  
} else if (answer == false){
  // Nice to talk to you, goodbye!
} else if (answer == null){
  // where did you see that option brother? nuh good bye! 
}



//add function that adds speech to user
