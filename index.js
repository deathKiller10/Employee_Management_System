let isAdded = [], isRemoved = [];
let x = 0, rowIndex = 0;

document.getElementById("credentials").addEventListener("submit", function(event){
    event.preventDefault();

    let name = document.getElementById("eName").value;
    let position = document.getElementById("ePosition").value;
    let salary = document.getElementById("eSalary").value;

    let Employee = {
        name: name,
        position: position,
        salary: salary
    }

    isAdded.push(Employee);

    // table
    let table = document.getElementById("myTable");
    let row = document.createElement("tr"); // row
    row.id = `row${++rowIndex}`;

    // 3 columns
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    let cell3 = document.createElement("td");

    // Delete Button
    let cell4 = document.createElement("td");
    let lastColumnButton = document.createElement("button");
    lastColumnButton.classList.add("deleteButton", `button${++x}`);
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
});

// Delete any row by clicking on the delete button
document.addEventListener('click', (event) => {
    let table = document.getElementById("myTable");
    if (event.target.classList.contains('deleteButton')) {
        const index = parseInt(event.target.classList[1].slice(6)); //Extract the index from the class
        isRemoved.push(isAdded[index-1]);
        console.log(isRemoved);
        const tableRow = event.target.closest('tr');
        table.deleteRow(tableRow.rowIndex);
    }
});

