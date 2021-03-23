const mysql = require('mysql');
const inquirer = require('inquirer');

const consoleTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'cms_db',
});
connection.connect((err) => {
    if (err) throw err;
    runSearch();
}); 
const runSearch = () => {
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
            ],
        }
    ])
    .then((answer) => {
        switch (answer.action) {
            case "View Employees":
                employeeSearch();
                break;
            case "View Departments":
                departmentSearch();
                break;
            case "View All Roles":
                roleSearch();
                break;
            case "View All Employees By Department":
                empdepSearch();
                break;
            case "View All Employees By Role":
                emproleSearch();
                break;
            case "Add Employee":
                employeeAdd();
                break;
            case "Add Role":
                roleAdd();
                break;
            case "Update Employee Role":
                roleUpdate();
                break;
            case "Add Department":
                departmentUpdate();
                break;
            case "Exit":
                connection.end();
                break;
            default:
                console.log(`Invalid action ${answer.action}`);
                break;
        }
    });
};

const employeeSearch = () => {
    connection.query('SELECT * FROM employee', (err, res) => {
        if (err) throw err;
        console.log(res);
        runSearch();
    });
};

const departmentSearch = () => {
    connection.query('SELECT * FROM department', (err, res) => {
        if (err) throw err;
        console.log(res);
        runSearch();
    })
};

const roleSearch = () => {
    connection.query('SELECT * FROM role', (err, res) => {
        if (err) throw err;
        console.log(res);
        runSearch();
    })
};