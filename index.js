// onclick="location.href='./search.html'"

let isAdded = [], isRemoved = [];
let x = 0, rowIndex = 0;

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

document.querySelector("#searchEmployee").addEventListener("click", function(){
    document.querySelector(".searching").classList.remove("searchEmployeeHidden");
    document.querySelector(".adding").classList.add("containerHidden");

    let table = document.querySelector(".display");
    let parent = table.parentNode;
    parent.insertBefore(document.querySelector(".searching"), table);
});

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