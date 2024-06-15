#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";

console.log(("WELCOME TO  ADVENTURE GAME"));


// GAME VARIABLE

let enemies = ["SKELETON", "ZOMBIE", "WARRIOR", "ASSASSIN"]; 

let maxEnemyHealth = 75;

let enemyAttackDamageToHero = 25;


// PLAYER VARIABLE

let heroHealth = 100 ;

let attackDamageToEnemy = 50;

let numHealthPotion = 3;

let healthPotionHealAmount = 30;

let healthPotionDropChance = 50;

// WHILE LOOP CONDITION

let gameRunning = true;

console.log(chalk.rgb(127,255,0)("\n\t\tWELCOME TO DEADZONE"));


game:

while (gameRunning) {

    let enemyHealth = Math.floor(Math.random() * maxEnemyHealth + 1);

    let enemyindex = Math.floor(Math.random() * enemies.length);

    let enemy = enemies[enemyindex];

    console.log(chalk.rgb(255,0,0)(`\n${enemy}  HAS APPEARED!`));

    while (enemyHealth > 0) {
       
        console.log(chalk.rgb(238,232,170)(`\nYOUR HEALTH  ${heroHealth}`));
       
        console.log(chalk.rgb(0,128,128)(`\n${enemy}  ENEMY HEALTH : ${enemyHealth}\n`));


       
        let prompt = await inquirer.prompt({

            name: "ans",
       
            type: "list",

            message: " WHAT WOULD YOU LIKE TO DO?\n",
        
            choices: ["1. ATTACK", "2. TAKE HEALTH POTION", "3. RUN", "4. EXIT"],
        });

        if (prompt.ans === "1. ATTACK") {

            let damageToEnemy = Math.floor(Math.random() * attackDamageToEnemy + 1);

            let damageToHero = Math.floor(Math.random() * enemyAttackDamageToHero + 1);


            enemyHealth -= damageToEnemy;

            heroHealth -= damageToHero;

            console.log(chalk.rgb(255,255,0)(`\nYOU STRIKE THE ${enemy} FOR ${damageToEnemy}\n`));

            console.log(chalk.rgb(65,105,255)(`\n${enemy} STRIKES YOU FOR ${damageToHero} DAMAGE \n`));

            if (heroHealth < 1) {

                console.log(chalk.rgb(0,139,139)("\n YOU HAVE TAKEN TOO MUCH DAMAGE YOU ARE TOO WEAK TO CONTINUE\n"));
                console.log(chalk.rgb(255,140,0)("\n\t\tYOU DIED\n"));

                console.log(chalk.rgb(0,255,255)("\n\t\tGAME OVER"));
                
                break game;
            }
        } else if (prompt.ans === "2. TAKE HEALTH POTION") {

            if (numHealthPotion > 0) {

                heroHealth += healthPotionHealAmount;
                
                numHealthPotion--;

                console.log(chalk.rgb(106,90,205)(`\nYOU USE HEALTH POTION FOR ${healthPotionHealAmount} HP\n`));

                console.log(chalk.rgb(255,215,0)(`\n NOW YOU HAVE ${heroHealth} HEALTH\n`));

                console.log(chalk.rgb(205,133,63)(`\nYOU HAVE ${numHealthPotion} HEALTH POTION LEFT\n`));

            } else {

                console.log(chalk.rgb(255,0,255)(`\n YOU HAVE NO HEALTH POTIONS LEFT. DEFEAT ENEMY FOR A CHANCE TO GET HEALTH POTION\n`));
            }
        } else if (prompt.ans === "3. RUN") {

            console.log(chalk.rgb(244,164,96)(`\n YOU RUN AWAY FROM THE ${enemy}\n`));

            continue game;

        } else if (prompt.ans === "4. EXIT") {

            console.log(chalk.rgb(100,149,237)(`\n YOU SUCCESSFULLY EXIT FROM DEADZONE\n`));

            console.log(chalk.rgb(255,222,173)(`     \nPRESENTING  BY  ABDUL  REHMAN    \n`));

            break game;

        }
    }

    if (heroHealth < 1) {

        console.log(chalk.rgb(230,230,250)(`\n YOU ARE OUT FROM BATTLE. YOU ARE TOO WEAK\n`));

        break;
    }

    console.log(chalk.rgb(255,20,147)(`\n${enemy} WAS DEFEATED!!\n`));

    console.log(chalk.rgb(255,218,185)(`\nYOU HAVE ${heroHealth} HEALTH\n`));


    let random = Math.floor(Math.random() * 100 + 1);
    
    if (random < healthPotionDropChance) {
    
        numHealthPotion++;
    
        console.log(chalk.rgb(127,255,212)(`\n ENEMIES GIVE YOU HEALTH POTIONS\n`));
    
        console.log(chalk.rgb(152,251,152)(`\nYOUR HEALTH IS ${heroHealth}\n`));
    
        console.log(chalk.rgb(128,0,128)(`\nYOU NOW HAVE ${numHealthPotion} HEALTH POTION LEFT\n`));
    }

    let userOption = await inquirer.prompt({
    
        name: "ans",
    
        type: "list",
    
        message: "\nWHAT WOULD YOU LIKE TO DO NOW?",
    
        choices: ["1. CONTINUE", "2. EXIT"],
    
    });

    
    if (userOption.ans === "1. CONTINUE") {
    
        console.log(chalk.rgb(64,224,208)(`\nYOU CONTINUE ON YOUR ADVENTURE\n`));
    
    } else {
    
        console.log(chalk.rgb(100,149,237)(`\n YOU SUCCESSFULLY EXIT FROM DEADZONE\n`));
    
        break;
    
    }
}


