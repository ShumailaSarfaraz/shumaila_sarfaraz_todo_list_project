#!/usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let add_person = await inquirer.prompt([
        { message: "What you want add in your todos", type: "input", name: "todo"
        },
        { message: "Do you want to add more iteams", type: "confirm", name: "confirm", default: "false"
        },
    ]);
    todos.push(add_person.todo);
    condition = add_person.confirm;
    console.log(todos);
}
