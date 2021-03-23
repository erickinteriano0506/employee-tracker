const mysql = require('mysql');
const inquirer = require('inquirer');
const connection = require('connection');
const consoleTable = require('console.table');

const connection = mysql.createConnection({
    host: 'locahost',
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
    const query = 'SELECT * FROM employee';
    connection.query(query, (err, res) => {
        console.table(res);
        runSearch();
    })
};

const departmentSearch = () => {
    const query = 'SELECT * FROM department';
    connection.query(query, (err, res) => {
        console.table(res)
        runSearch();
    })
};

const roleSearch = () => {
    const query = 'SELECT * from role';
    connection.query(query, (err, res) => {
        console.table(res);
        runSearch();
    })
}
