const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamMembers = [];

//import/require the page template and store in var


// TODO: Create a function to initialize app
const promptManager = () => {
  console.log("Welcome! Let's add your manager details.");
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name? (Required)",
        validate: (enterName) => {
          if (enterName) {
            return true;
          } else {
            console.log("Enter your name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email address (Required)",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Enter your email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter your Id (Required)",
        validate: (id) => {
          if (id) {
            return true;
          } else {
            console.log("Enter your Id!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter your office number (Required)",
        validate: (officeNumber) => {
          if (officeNumber) {
            return true;
          } else {
            console.log("Enter your office number!");
            return false;
          }
        },
      },
    ])
    .then(({ name, email, id, officeNumber }) => {
      teamMembers.push(new Manager(name, email, id, officeNumber));
      addEmployee();
    });
};

const addEmployee = () => {
  console.log("Let's add an employee.");
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is their name? (Required)",
        validate: (enterName) => {
          if (enterName) {
            return true;
          } else {
            console.log("Enter their name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter their email address (Required)",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Enter their email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter their Id (Required)",
        validate: (id) => {
          if (id) {
            return true;
          } else {
            console.log("Enter their Id!");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "role",
        message: "What is the employee's role? (Required)",
        choices: ["Engineer", "Intern"],
      },
    ])
    .then(({ name, email, id, role }) => {
      if (role === "Engineer") {
        return addEngineer({ name, email, id });
      } else {
        return addIntern({ name, email, id });
      }
    });
};

const addEngineer = ({ name, email, id }) => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "github",
        message: "What is their github username? (Required)",
        validate: (account) => {
          if (account) {
            return true;
          } else {
            console.log("Enter their github!");
            return false;
          }
        },
      },
    ])
    .then(({ github }) => {
      teamMembers.push(new Engineer(name, email, id, github));
      return addMoreOrExit()
    });
};

const addIntern = ({ name, email, id }) => {
return inquirer
    .prompt([
      {
        type: "input",
        name: "school",
        message: "What is their school? (Required)",
        validate: (account) => {
          if (account) {
            return true;
          } else {
            console.log("Enter their school!");
            return false;
          }
        },
      },
    ])
    .then(({ school }) => {
      teamMembers.push(new Intern(name, email, id, school));
      return addMoreOrExit()
    });
};   

const addMoreOrExit = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "continue",
        message: "Do you want to add another employee?",
        choices: ["Yes","No, I'm done"]
      },
    ])
    .then(
      (response) => {
        if (response.continue === "Yes") {
          return addEmployee();
        }
        else {
          console.log(teamMembers)
        }
    });
};

promptManager();

//add a function to build the team/render template 
//call teamMembers within render template 
generateTeam();