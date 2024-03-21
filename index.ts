#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

async function playGame() {


let random = Math.floor(Math.random() * 100) + 1


let playername: string = ""

    while (playername.trim() === "") 
    
    {

        const nameInput = await inquirer.prompt({

            name: 'playerName',
            type: 'input',
            message: chalk.yellow('\n\nPLEASE ENTER YOUR NAME TO START THE NUMBER GUESSING GAME:'),
            prefix: "",
            validate: (input: string) => 
            
            {

                return input.trim() === "" ? "Please enter your name." : true

            }

        });

        playername = nameInput.playerName.trim().toUpperCase();

    } 

let attempt = 5

while (attempt > 0)

{

let guess = await inquirer.prompt({

    name: 'number',
    type: 'number',
    message: chalk.yellow(`\n\n${playername}, PLEASE CHOOSE A NUMBER BETWEEN 1 TO 100`),
    prefix: ""

})

if (guess.number == random)

{

    console.log (chalk.green(`\n${playername}, YOU MADE A CORRECT GUESS! YOU WON THE NUMBER GUESSING GAME`))
    break
    
}

else if (guess.number > random)

{

    console.log (chalk.magenta(`\n${playername}, YOU CHOSE A HIGHER NUMBER, YOU HAVE ${attempt - 1} ATTEMPTS REMAINING`))

}

else if (guess.number < random)

{

    console.log (chalk.magenta(`\n${playername}, YOU CHOSE A LOWER NUMBER, YOU HAVE ${attempt - 1} ATTEMPTS REMAINING`))

}


attempt --

if (attempt == 0)

{

    console.log (chalk.red(`\n\n${playername}, YOU HAVE ${attempt} ATTEMPT REMAINING! THE CORRECT NUMBER WAS ${random}`))

}


}


const replay = await inquirer.prompt({

    name: 'playAgain',
    type: 'confirm',
    message: chalk.yellow(`\n\n${playername}, DO YOU WANT TO PLAY AGAIN?`),
    prefix: ""

})

if (replay.playAgain) 

{

    await playGame()

} 

else console.log (chalk.yellow(`\nTHANKS FOR PLAYING THE NUMBER GUESSING GAME, ${playername}!`))

}

playGame()