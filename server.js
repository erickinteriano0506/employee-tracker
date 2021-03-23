const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'locahost',
    port: 3350,
    user: 'root',
    password: 'password',
    database: 'cms_db',
});

inquirer
    .prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'options',
            choices: [
                "View employees",
                "View Departments",
                "View All Roles",
                "View All Employees By Department",
                "View All Employees By Role",
                "Add Employee",
                "Add Role",
                "Update Employee Role",
                "Add Department",
                "Exit",
            ]
        }
    ])
