const Employee = require("../lib/Employee");


//Sub functions inside main function for every employee type, within each sub function return HTML, return statement use template literal
const generateTeam = (team) => {
    console.log(team);


const generateManager = manager => {
    return
    `<div class="card mx-auto" style="width: 50%">
        
        <div class="container">
            <h4 class="card-header">Hanna L.</h4>
        </div>

        <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${manager.name}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto: ${manager.email}"> ${manager.email} </a></span></li>
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>

    </div>`

}
const generateIntern = intern => {
    return
    `<div class="card mx-auto" style="width: 50%">
        
        <div class="container">
            <h4 class="card-header">Hanna L.</h4>
        </div>

        <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${intern.name}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto: ${intern.email}"> ${intern.email} </a></span></li>
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">School: ${intern.school}</li>
        </ul>

    </div>`

}

const generateEngineer = engineer => {
    return 
    `<div class="card mx-auto" style="width: 50%">
        
        <div class="container">
            <h4 class="card-header">Hanna L.</h4>
        </div>

        <ul class="list-group list-group-flush">
            <li class="list-group-item">Name: ${engineer.name}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto: ${engineer.email}"> ${engineer.email} </a></span></li>
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">GitHub: <a target="_blank" href="https://github.com/ ${engineer.githubUsername}"> ${engineer.github} </a></li>
        </ul>

    </div>`
    

}
const html = [];

html.push(team) 

    .filter(employee => employee.getRole() === 'Manager')
    .map(manager => generateManager(manager))
    .join('')

    .filter(employee => employee.getRole() === 'Intern')
    .map(intern => generateIntern(intern))
    .join('')
    
    .filter(employee => employee.getRole() === 'Engineer')
    .map(engineer => generateEngineer(engineer))
    .join('')

return html.join('');
}


//export function to generate page
//module.export and arrow function, takes parameter of the team and returns the raw HTML of the whole HTML document 
module.exports = team => {

    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Password Generator</title>
        <link rel="style" href="./team-profile-generator" />
        <title>Team Profile Generator</title>
    </head>
    <body>

        <header>
            <h1>My Team</h1>
        </header>
        <main> ${generateTeam(team)} </main>

    </body>
    </html>`
//add nav bar
}



//return HTML at the end 
