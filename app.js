// * Employee management system using basic javascript

"use strict";

const prompt = require("prompt-sync")({ sigint : true });

let employees = []; // array of objects that will store the employees' information

console.log("This is an Employee Management System\n");
console.log("Consider the following options...\n");
console.log("1. Display the employee records");
console.log("2. Add a new employee");
console.log("3. Delete an employee's records");
console.log("4. Edit an employee's record");
console.log("5. Display a specific employee's record");
console.log("\nMake your choice...");

function Employee(name, position, salary){
    this.name = name;
    this.position = position;
    this.salary = salary;
}

employees.push(new Employee("Priyanshu", "Chairman", 100000));
employees.push(new Employee("Snehzzy", "CTO", 100000));

function addEmployee(){
    let empName = prompt("Employee name: ");
    let empPosition = prompt("Employee posiiton: ");
    let empSalary = parseInt(prompt("Employee salary: "));

    let employee = new Employee(empName, empPosition, empSalary);
    employees.push(employee);
    console.log("Employee added!\n");
}

function displayEmployees(){
    for (let i in employees){
        console.log(employees[i]);
    }
}

function deleteEmployee() {
    let toBeDeleted = prompt("\nEnter the name of the employee whose records are to be deleted: ");
    for (let j in employees){
        if (employees[j]["name"] === toBeDeleted){
            employees.splice(j,1);
            console.log("Employee deleted!\n");
        }
    }
}

function searchEmployees(){
    let flag = 0;
    let toBeSearched = prompt("Enter the name or position of the employee to be searched: ");
    for (let k in employees){
        if (employees[k]["name"] === toBeSearched || employees[k]["position"] === toBeSearched){
            flag = 1;
            console.log(employees[k]);
        }
    }
    if (flag === 0){
        console.log("Employee NOT found!");
    }
}

addEmployee();
// addEmployee();
// displayEmployees();
// deleteEmployee();
// displayEmployees();
searchEmployees();