const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const engineerQuestions = []

inquirer
  .prompt([
    {
      type: 'list',
      name: 'role',
      message: 'Enter Role',
      choices: ['Engineer', 'Manager', 'Intern'],
    }

  ])
  .then(role => {
  switch (role.role) {
    case "Engineer" :
      inquirer
      .prompt([
        {
          name: 'name',
          message: 'Enter Name',
        },
        {
          name: 'id',
          message: 'Enter Id'
        },
        {
          name: 'email',
          message: "Enter Email"
        },
        {
          name: 'github',
          message: 'Enter GitHub url'
        }
    
      ]).then(engineer =>{
       const eng = new Engineer(engineer.name, engineer.id, engineer.email, engineer.github);
       console.log("engineer: " + JSON.stringify(eng)) 
       console.info('Name: ' + engineer.name, ' Id: ' + engineer.id, ' Email: ' + engineer.email, ' Github: ' + engineer.github, );
      })
      break;
      case "Manager": 
      inquirer
      .prompt([
        {
          name: 'name',
          message: 'Enter Name',
        },
        {
          name: 'id',
          message: 'Enter Id'
        },
        {
          name: 'email',
          message: "Enter Email"
        }
    
      ]).then(manager =>{
        const man = new Manager(manager.name, manager.id, manager.email);
       console.log("manager: " + JSON.stringify(man)) 
        console.info('Name: ' + manager.name, ' Id: ' + manager.id, ' Email: ' + manager.email);
      })
      break;
      case "Intern": 
      inquirer
      .prompt([
        {
          name: 'name',
          message: 'Enter Name',
        },
        {
          name: 'id',
          message: 'Enter Id'
        },
        {
          name: 'email',
          message: "Enter Email"
        },
        {
          name: 'school',
          message: 'Enter School'
        } 

    
      ]).then(intern =>{
        const int = new Intern(intern.name, intern.id, intern.email, intern.school);
       console.log("intern: " + JSON.stringify(int))
        console.info('Name: ' + intern.name, ' Id: ' + intern.id, ' Email: ' + intern.email, ' School: ' + intern.school);
      })
  }

    
  });

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
