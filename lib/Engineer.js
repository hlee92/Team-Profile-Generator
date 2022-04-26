const Employee = require('./Employee');

module.exports = class Engineer extends Employee {

    constructor(name, email, id, github) {
        super(name, email, id)
        this.github = github

    }
    
    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

