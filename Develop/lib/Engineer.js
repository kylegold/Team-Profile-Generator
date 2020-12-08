// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('../lib/Employee.js')

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github
    }

    getRole(){
        return Engineer.name;
    }

    getGithub() {
        return this.github;
    }
}
const eng = new Engineer('kyle', 1, 'kyle@g.com', 'kylegold');
console.log(eng)
module.exports = Engineer;