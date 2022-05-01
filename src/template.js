const Employee = require("../lib/Employee");

//Sub functions inside main function for every employee type, within each sub function return HTML, return statement use template literal
const generateTeam = (team) => {

  const generateManager = (manager) => {
    return `<div class="card mx-auto" style="width: 50%">
        
        <div class="container">
            <h4 class="card-header">Manager</h4>

        <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${manager.name}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto: ${manager.email}"> ${manager.email} </a></span></li>
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>

        </div>

    </div>`;
  };

  const generateIntern = (intern) => {
    return `<div class="card mx-auto" style="width: 50%">
        
        <div class="container">
            <h4 class="card-header">Intern</h4>

        <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${intern.name}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto: ${intern.email}"> ${intern.email} </a></span></li>
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">School: ${intern.school}</li>
        </ul>

        </div>

    </div>`;
  };

  const generateEngineer = (engineer) => {
    return `<div class="card mx-auto" style="width: 50%">
    
        <div class="container">
            <h4 class="card-header">Engineer</h4>

        <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${engineer.name}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto: ${engineer.email}"> ${engineer.email} </a></span></li>
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">GitHub: <a target="_blank" href="https://github.com/${engineer.github}"> ${engineer.github} </a></li>
        </ul>

        </div>

    </div>`;
  };

  const html = [...team];

  for (let i = 0; i < html.length; i++) {
    let current = html[i];
    switch (current.getRole()) {
      case "Manager":
        html[i] = generateManager(current);
        break;
      case "Engineer":
        html[i] = generateEngineer(current);
        break;
      case "Intern":
        html[i] = generateIntern(current);
        break;
      default:
        return;
    }
  }
  return html.join("");
};

//export function to generate page
//module.export and arrow function, takes parameter of the team and returns the HTML of the whole HTML document
module.exports = (team) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="./Team-Profile-Generator/css/stylesheet.css">
        <title>Meet The Team</title>
    </head>
    <body>

        <header>
            <h1>Meet The Team</h1>
        </header>
        <main> 
        ${generateTeam(team)} 

        </main>

    </body>
    </html> `;
};

//HTML at the end
