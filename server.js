const mysql = require('mysql');
const inquirer = require('inquirer');

const consoleTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'cms_DB',
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
        console.log(answer);
        switch (answer.options) {
            case "View employees":
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
        console.table(res);
        runSearch();
    });
};

const departmentSearch = () => {
    connection.query('SELECT * FROM department', (err, res) => {
        if (err) throw err;
        console.log(res);
        console.table(res);
        runSearch();
    })
};

const roleSearch = () => {
    connection.query('SELECT * FROM role', (err, res) => {
        if (err) throw err;
        console.log(res);
        console.table(res);
        runSearch();
    })
};

const employeeAdd = () => {
    inquirer
        .prompt([
            {
                name: 'companyID',
                type: 'input',
                message: 'What is their ID number?'
            },
            {
                name: 'firstname',
                type: 'input',
                massage: 'What is the employees first name?',
            },
            {
                name: 'lastname',
                type: 'input',
                message: 'What is their last name?',
            },
            {
               name: 'roleID',
               type: 'input',
               message: 'What is their role ID?' 
            },
        ])
        .then((answer) => {
            connection.query(
                'INSERT INTO employee SET ?',
                {
                    id: answer.companyID,
                    first_name: answer.firstname,
                    last_name: answer.lastname,
                    role_id: answer.roleID,
                },
                (err) => {
                    if (err) throw err;
                    console.log('Employee has been added.');
                    runSearch();
                }
            )
        })
    
};

const departmentUpdate = () => {
    inquirer
        .prompt ([
            {
                name: 'department_id',
                type: 'input',
                message: 'What is the new department ID?'
            },
            {
                name: 'department',
                type: 'input',
                message: 'What department would you like to add?'
            },
        ])
        .then((answer) => {
            connection.query(
                'INSERT INTO department SET ?',
            {
                name: answer.department,
                id: answer.department_id,
            },
            (err) => {
                if (err) throw err;
                console.log('Department has been added.');
                runSearch();
            },
            )
        })
};

const roleAdd = () => {
    inquirer
        .prompt ([
            {
                name: 'roleID',
                type: 'input',
                message: 'What is the new role ID?',
            },
            {
                name: 'newRole',
                type: 'input',
                message: 'What role do you want to add?',
            },
            {
                name: 'salary',
                type: 'input',
                message: 'What is their salary?',
            },
        ])
        .then((answer => {
            connection.query(
                'INSERT INTO role SET ?',
                {
                   id: answer.roleID,
                   title: answer.newRole,
                   salary: answer.salary 
                },
                (err) => {
                    if (err) throw err;
                    console.log('Role has been added.');
                    runSearch();
                }
            );
        }));
};
                    