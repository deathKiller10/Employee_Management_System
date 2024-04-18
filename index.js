let records = [];

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

    records.push(Employee);

    // let table = document.getElementById("myTable");
    // let row = document.createElement("tr");
    // let cell1 = document.createElement("td");
    // let cell2 = document.createElement("td");
    // let cell3 = document.createElement("td");

    // // Delete Button
    // let cell4 = document.createElement("td");
    // let lastColumnButton = document.createElement("button");
    // lastColumnButton.classList.add("deleteButton");
    // lastColumnButton.innerText = "Delete";

    // cell1.innerText = name;
    // cell1.classList.add("tableColumn", "firstColumn");
    // cell2.innerText = position;
    // cell2.classList.add("tableColumn");
    // cell3.innerText = salary;
    // cell3.classList.add("tableColumn", "secondLastColumn");
    // cell4.id = "lastColumn";
    // cell4.appendChild(lastColumnButton);

    // row.appendChild(cell1);
    // row.appendChild(cell2);
    // row.appendChild(cell3);
    // row.appendChild(cell4);

    // table.appendChild(row);
});

document.querySelector(".displayTable").addEventListener("click", function(){
    console.log("Displaying table...");
    let table = document.getElementById("myTable");
    let row = document.createElement("tr");
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    let cell3 = document.createElement("td");

    // Delete Button
    let cell4 = document.createElement("td");
    let lastColumnButton = document.createElement("button");
    lastColumnButton.classList.add("deleteButton");
    lastColumnButton.innerText = "Delete";

    cell1.innerText = records[records.length - 1]["name"];
    cell1.classList.add("tableColumn", "firstColumn");
    cell2.innerText = records[records.length - 1]["position"];
    cell2.classList.add("tableColumn");
    cell3.innerText = records[records.length - 1]["salary"];
    cell3.classList.add("tableColumn", "secondLastColumn");
    cell4.id = "lastColumn";
    cell4.appendChild(lastColumnButton);

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);

    table.appendChild(row);
})
