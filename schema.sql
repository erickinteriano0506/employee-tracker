DROP DATABASE IF EXISTS cms_DB;
CREATE DATABASE cms_DB;

USE cms_DB;

CREATE TABLE department (
    id INT,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id),
)

INSERT INTO role (id, title, salary, department_id) values (1, 'Production Manager', 150000.25, 1);
INSERT INTO role (id, title, salary, department_id) values (1, 'Production Lead', 120000, 2);
INSERT INTO role (id, title, salary, department_id) values (1, 'Assembler', 100000.25, 3);
INSERT INTO role (id, title, salary, department_id) values (1, 'Assistant', 90000.25, 4);

INSERT INTO role (id, title, salary, department_id) values (2, 'Engineering Manager', 150000.25, 1);
INSERT INTO role (id, title, salary, department_id) values (2, 'Lead Engineer', 130000, 2);
INSERT INTO role (id, title, salary, department_id) values (2, 'Schematics', 110000.25, 3);
INSERT INTO role (id, title, salary, department_id) values (2, 'Grunt', 95000.25, 4);

INSERT INTO role (id, title, salary, department_id) values (3, 'Quality Manager', 150000.25, 1);
INSERT INTO role (id, title, salary, department_id) values (3, 'Inspector', 100000.25, 2);
INSERT INTO role (id, title, salary, department_id) values (3, 'Co-Inspector', 100000.25, 3);
INSERT INTO role (id, title, salary, department_id) values (3, 'Quality Assistant', 80000.25, 1);



INSERT INTO department (id, name) values (1,'Production');
INSERT INTO department (id, name) values (2,'Engineering');
INSERT INTO department (id, name) values (3,'Quality Control');

INSERT INTO employee (id, first_name, last_name, role_id, manager_id) values (1, 'James', 'Hetfield', 1, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) values (2, 'Tom', 'Araya', 2, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) values (3, 'Dave', 'Mustaine', 3, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) values (4, 'Bruce', 'Dickinson', 4, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) values (5, 'Kirk', 'Hammett', 5, 2);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) values (6, 'Kerry', 'King', 6, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) values (7, 'Marty', 'Freidman', 7, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) values (8, 'Dave', 'Murray', 8, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) values (9, 'Cliff', 'Burton', 9, 3);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) values (10, 'Jeff', 'Hanneman', 10, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) values (11, 'David', 'Ellefson', 11, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) values (12, 'Steve', 'Harris', 12, NULL);





SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;
