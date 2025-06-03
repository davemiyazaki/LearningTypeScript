// hello world! 
import inquirer from "/opt/homebrew/lib/node_modules/inquirer";


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
  inquirer.prompt([
        {
          type:'confirm',
          name:"proceed",
          message:"Do you want to say something?",
          default: true
        }
    ]).then((answer : any) => {
        console.log(answer.proceed);      })

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
  console.log("The answer is null");
  // where did you see that option brother? nuh good bye! 
}



//add function that adds speech to user
