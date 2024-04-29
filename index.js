// onclick="location.href='./search.html'"
// onclick="location.href='./edit.html'"

let isAdded = [], isRemoved = [];
let x = 0, rowIndex = 0;

let searching = document.querySelector(".searching");
let adding = document.querySelector(".adding");
let editing = document.querySelector(".editing");
let display = document.querySelector(".display");
let modal = document.querySelector(".modal-overlay");

document.getElementById("companyName").addEventListener("click", function(){
    document.querySelectorAll("#lastColumn").forEach((element) => {
        if(element.style.display === "none"){
            element.style.display = "block";
        }
    });
    if (display.classList.contains("displayHidden")){
        display.classList.remove("displayHidden");
    }
    if (!searching.classList.contains("searchEmployeeHidden")){
        searching.classList.add("searchEmployeeHidden");
    }
    if (adding.classList.contains("containerHidden")){
        adding.classList.remove("containerHidden");
    }
    if (!editing.classList.contains("editingHidden")){
        editing.classList.add("editingHidden");
    }
});

function Employee(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
}

function enterData(name, position, salary) {
    // table
    let table = document.getElementById("myTable");
    let row = document.createElement("tr"); // row
    row.id = `row${rowIndex++}`;

    // 3 columns
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    let cell3 = document.createElement("td");

    // Delete Button
    let cell4 = document.createElement("td");
    let lastColumnButton = document.createElement("button");
    lastColumnButton.classList.add("deleteButton", `button${x++}`);
    lastColumnButton.innerText = "Delete";

    cell1.innerText = name;
    cell1.classList.add("tableColumn", "firstColumn");
    cell2.innerText = position;
    cell2.classList.add("tableColumn");
    cell3.innerText = salary;
    cell3.classList.add("tableColumn", "secondLastColumn");
    cell4.id = "lastColumn";
    cell4.appendChild(lastColumnButton);

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);

    table.appendChild(row);
}

isAdded.push(new Employee("Sneha", "CTO", 700000));
isAdded.push(new Employee("Tushar", "CFO", 300000));
isAdded.push(new Employee("Arsalan", "CMO", 400000));
isAdded.push(new Employee("Nihal", "MD", 500000));
isAdded.push(new Employee("Rahul", "Chairman", 600000));

for (let i = 0; i < isAdded.length; i++) {
    enterData(isAdded[i].name, isAdded[i].position, isAdded[i].salary);
}

document.getElementById("credentials").addEventListener("submit", function(event){
    event.preventDefault();
    let name = document.getElementById("eName").value;
    let position = document.getElementById("ePosition").value;
    let salary = parseInt(document.getElementById("eSalary").value);
    isAdded.push(new Employee(name, position, salary));
    enterData(name, position, salary);
});

// Delete any row by clicking 
document.addEventListener('click', (event) => {
    let table = document.getElementById("myTable");
    if (event.target.classList.contains('deleteButton')) {
        const index = parseInt(event.target.classList[1].slice(6)); //Extract the index from the class
        isRemoved.push(isAdded[index]);
        const tableRow = event.target.closest('tr');
        table.deleteRow(tableRow.rowIndex);
    }
});

// searching an employee
document.querySelector("#searchEmployee").addEventListener("click", function(){
    searching.classList.remove("searchEmployeeHidden");
    adding.classList.add("containerHidden");
    if (!editing.classList.contains("editingHidden")){
        editing.classList.add("editingHidden");
    }
    if (display.classList.contains("displayHidden")){
        display.classList.remove("displayHidden");
    }
    document.querySelectorAll("#lastColumn").forEach((element) => {
        element.style.display = "none";
    });

    let table = display;
    let parent = table.parentNode;
    parent.insertBefore(searching, table);

    // Searching an employee based on name and position
    document.querySelector(".searchInput").addEventListener("input", function(event){
        event.preventDefault();
        const filter = this.value.toLowerCase();
        const rows = document.getElementById("myTable").rows;

        for (let i = 1; i < rows.length; i++) {
            const name = rows[i].cells[0].textContent.toLowerCase();
            const position = rows[i].cells[1].textContent.toLowerCase();
            if (name.includes(filter) || position.includes(filter)){
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    });
});

// Editing an employee's details
document.getElementById("editEmployee").addEventListener("click", function(){
    editing.classList.remove("editingHidden");
    adding.classList.add("containerHidden");
    if (!display.classList.contains("displayHidden")){
        display.classList.add("displayHidden");
    }
    console.log(display.classList);

    if(!searching.classList.contains("searchEmployeeHidden")){
        searching.classList.add("searchEmployeeHidden");
    }
});

document.getElementById("searchForEdit").addEventListener("submit", function(event){
    event.preventDefault();
    let name = document.getElementById("search").value.toLowerCase();
    let flag = 0;
    for (let i = 0; i < isAdded.length; i++) {
        if (isAdded[i].name.toLowerCase() === name) {
            flag = 1;
            rowIndex = i;
            break;
        }
    }
    if (flag === 1) {
        console.log("Employee is present!");
        // document.querySelector(".editEmployee").classList.remove("editEmployeeHidden");
        modal.classList.add("open-modal");
    } else {
        alert("Employee is not present!");
        console.log("Employee is not present!");
    }
});

// When updated details are entered and save button is clicked
document.getElementById("saveChanges").addEventListener("click", function(event){
    event.preventDefault();
    // document.querySelector(".editEmployee").classList.add("editEmployeeHidden");
    modal.classList.remove("open-modal");
    let newPosition = document.getElementById("newPosition").value;
    let newSalary = parseInt(document.getElementById("newSalary").value);
    isAdded[rowIndex].position = newPosition;
    isAdded[rowIndex].salary = newSalary;
    let cell_1 = document.getElementById("myTable").rows[rowIndex + 1].cells[1];
    cell_1.innerHTML = newPosition;
    let cell_2 = document.getElementById("myTable").rows[rowIndex + 1].cells[2];
    cell_2.innerHTML = newSalary;

    let table = display;
    let parent = table.parentNode;
    parent.insertBefore(editing, table);

    if (display.classList.contains("displayHidden")){
        display.classList.remove("displayHidden");
    }
});

const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", function () {
    modal.classList.remove("open-modal");
});