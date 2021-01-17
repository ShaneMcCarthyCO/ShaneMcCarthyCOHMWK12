use employees;

INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 125000, 1),
    ('Salesperson', 90000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Account Manager', 150000, 3),
    ('Accountant', 170000, 3),
    ('Legal Team Lead', 275000, 4),
    ('Lawyer', 195000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Bob', 'Schmidt', 1, NULL),
    ('Mike', 'Nelson', 2, 1),
    ('Ann', 'Robinson', 3, NULL),
    ('Carl', 'Ball', 4, 3),
    ('Kim', 'Smith', 5, NULL),
    ('Ricky', 'Brown', 6, 5),
    ('Shane', 'Lewis', 7, NULL),
    ('Tom', 'Concord', 8, 7);