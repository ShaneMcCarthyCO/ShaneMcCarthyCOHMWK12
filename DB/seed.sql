USE Employees;

----- Department Seeds -----

INSERT INTO department (name)
VALUES ("Accounting"),("Finance"),("Operations"),("IT");

----- Role Seeds -----

INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 45000, 1), ("Chief Accounting Officer", 200000, 1), ("Accountant II", 75000, 1), ("Chief Financial officer", 250000, 2), ("Analyst", 40000, 3), ("Operations Specialist", 50000, 3), ("System Adminstrator", 80000, 4), ("IT Coordinator", 50000, 4), ("IT Manager", 100000, 4);

----- Employees Seeds -----

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Carrie", "Sanchez", 3, null), ("William", "Toms", 4, null), ("Kelly", "Dante", 6, null), ("Melissa", "Chang", 2, 4), ("Ellie", "Wilson", 1, 3), ("Rosie", "Cole", 1, 3), ("Joe", "Schmidt", 5, 7), ("Zach", "Connor", 7, 10), ("Martin", "Banks", 8, 10); 