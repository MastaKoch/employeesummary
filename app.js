const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { kMaxLength } = require("buffer");
const employeesArr = [];

const employeeQuest = [

    // initial question for user 
    {
        type: "list",
        name: "position",
        message: "What is the position of the employee?",
        choices: [
            "Manager",
            "Engineer",
            "Intern",
            "Roster is complete; I'm done adding employees."
        ],
    },
];


const managerQuestions= [
    // questions for managers


    {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
    },

    {
        type: "input",
        name: "id",
        message: "What is your employee ID?",
    },

    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },

    {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
    },

];

const engineerQuestions= [
    // questions for engineers

    {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
    },

    {
        type: "input",
        name: "id",
        message: "What is your employee ID?",
    },

    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },

    {
        type: "input",
        name: "github",
        message: "what is your Github username?"
    },
];

const internQuestions= [

    // questions for interns

    {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
    },

    {
        type: "input",
        name: "id",
        message: "What is your employee ID?"
    },

    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },

    {
        type: "input",
        name: "school",
        message: "Where do you attend university?",
    }

];

assembleTeam();

function assembleTeam() {
    inquirer.prompt(employeeQuest)
        .then(function (response) {
            console.log(response);
            return response;
        })
        .then (function (response) {
            if (response.position==="Manager") {
                inquirer.prompt(managerQuestions).then(response => {
                    var newManager= new Manager(
                        response.name,
                        response.id,
                        response.email,
                        response.officeNumber
                        );
                        employeesArr.push(newManager);

                        console.log("A new manager has been added to your team!");
                        assembleTeam();  
                });
            } else if (response.position === "Engineer") {

                inquirer.prompt(engineerQuestions).then(response => {
                    var newEngineer= new Engineer(
                        response.name,
                        response.id,
                        response.email,
                        response.github,
                    );
                    employeesArr.push(newEngineer);

                    console.log("A new engineer has been added to your team!");
                    assembleTeam();
                });
            } else if (response.position === "Intern") {

                inquirer.prompt(internQuestions).then(response => {
                    var newIntern= new Intern(
                        response.name,
                        response.id,
                        response.email,
                        response.school,
                    );
                    employeesArr.push(newIntern);

                    console.log("A new intern has been added to your team!");
                    assembleTeam();
                
        });
            
        } else {
            var main = render(employeesArr);
            fs.writeFile(outputPath, main, (err) => {
                if (err) throw err;
                console.log("Your new team has been generated! Look in the team.html file of the output folder and open in browser.");
            })
        };

    })}
