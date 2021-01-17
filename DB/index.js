// const inquirer = require("inquirer");
// const mysql = require("mysql");
// const cTable = require("console.table")
const connection = require("./Connection")
class DB{
constructor(connection){
    this.connection = connection
}
createEmployee(employee) {
    return this.connection.query("INSERT INTO employee SET ?", employee);
}

createDepartment(department) {
    return this.connection.query("INSERT INTO department SET ?", department);
}

createRole(role) {
    return this.connection.query("INSERT INTO role SET ?", role);
}

removeEmployee(employee){
    return this.connection.query("DELETE FROM employee WHERE id = ?", employee)
}

removeDepartment(department){
    return this.connection.query("DELETE FROM department WHERE id = ?", department)
}

removerole(role){
    return this.connection.query("DELETE FROM role WHERE id = ?", role)
}

updateEmployeeRole(employeeId, roleId) {
    return this.connection.query(
      "UPDATE employee SET role_id = ? WHERE id = ?",
      [roleId, employeeId]
    );
    
  }

  findAllRoles() {
    return this.connection.query(
      "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
    );
  }

  findAllDepartments() {
    return this.connection.query(
      "SELECT department.name FROM department;"
    );
  }
  findAllEmployees() {
    return this.connection.query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
    )}

    findAllEmployeesByManager(managerId) {
    return this.connection.query(
      "SELECT employee.id, employee.first_name, employee.last_name, department.name AS department, role.title FROM employee LEFT JOIN role on role.id = employee.role_id LEFT JOIN department ON department.id = role.department_id WHERE manager_id = ?;",
      managerId
    );
  }

  findAllEmployeesByDepartment(departmentId) {
    return this.connection.query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.title FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department department on role.department_id = department.id WHERE department.id = ?;",
      departmentId
    );
  }

  findAllPossibleManagers(employeeId) {
    return this.connection.query(
      "SELECT id, first_name, last_name FROM employee WHERE id != ?",
      employeeId
    );
  }

  updateEmployeeManager(employeeId, managerId) {
    return this.connection.query(
      "UPDATE employee SET manager_id = ? WHERE id = ?",
      [managerId, employeeId]
    );
  }




}
module.exports = new DB(connection)

