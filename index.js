const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");
const removeemployee = require("./DB");

function EmployeeStatus() {
    console.log("Welcome to the Employee Management System")
    inquirer
        .prompt(
            {
                type: "list",
                message: "What would you like to do today?",
                name: "choice",
                choices: ["Add Department",
                    "Add Role",
                    "Add Employee",
                    "View Deparments",
                    "View Roles",
                    "View Employees",
                    "Update Employee Role",
                    "Exit"]
            }).then(function (response) {
                var choice = response.choice;
                switch (choice){
                    case "Add Department":
                        addDepartment();
                        break;
                    case "Add Role":
                        addRole();
                        break;
                    case "Add Employee":
                        addemployee()
                        break;
                    case "View Departments":
                        viewDepartments();
                        break;
                    case "View Roles":
                        viewRoles();
                        break;
                    case "View Employees":
                        viewEmployees();
                        break;
                    case "Update Employee Role":
                        updateRole();
                        break;
                    case "Remove Employee":
                        removeEmployee();
                        break;
                    case "Exit":
                        connection.end();
                }
            });


}
function addQuestions(){
    inquirer.prompt([
        {
            type:"input",
            name:"addEmp",
            message:"What is the name of the employee you want to add?",
        }
    ])
    EmployeeStatus()
}

function removeEmployee(){
    const Employees = removeemployee.findAllEmployees()
    const employeechoice = Employees.map(({id,first_name, last_name}) =>({
        name:`${first_name}${last_name}`,
        value:id

    }))
    const{employeeid} = prompt([
        {
            type:"list",
            name:"employeeid",
            message:"Which employee do you want to remove?",
            choices:employeechoice
        }
    ])
    removeemployee.removeemployee(employeeid)
    EmployeeStatus()
}

function updateRole(){
    const Employees = removeemployee.findAllEmployees()
    const employeechoice = Employees.map(({id,first_name, last_name}) =>({
        name:`${first_name}${last_name}`,
        value:id

    }))
    const{employeeid} = prompt([
        {
            type:"list",
            name:"employeeid",
            message:"Which employees role do you want to update?",
            choices:employeechoice
        }
    ])
   const roles = removeemployee.findAllRoles()
   const rolechoice = roles.map(({id, title}) =>({
       name: title,
       value:id
   }))
   const{roleid} = prompt([
{
    type:"list",
    name:"roleid",
    message:"What role do you want to assign to this employee?",
    choices:rolechoice
}

   ])
   db.updateEmployeeRole(employeeid, roleid)
    EmployeeStatus()
}

function addemployee(){
    const Employees = removeemployee.findAllEmployees()
    const employeechoice = Employees.map(({id,first_name, last_name}) =>({
        name:`${first_name}${last_name}`,
        value:id

    }))
    const{employeeid} = prompt([
        {
            type:"list",
            name:"employeeid",
            message:"Which employee do you want to add?",
            choices:employeechoice
        }
    ])
    removeemployee.removeemployee(employeeid)
    EmployeeStatus()
}
