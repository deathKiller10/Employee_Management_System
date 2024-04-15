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

    let table = document.getElementById("myTable");
    let row = document.createElement("tr");
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    let cell3 = document.createElement("td");
    let cell4 = document.createElement("td");

    cell1.innerText = name;
    cell2.innerText = position;
    cell3.innerText = salary;
    cell4.innerHTML = `<button class="deleteButton">Delete</button>`;

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);

    table.appendChild(row);
})

let deleteButtons = document.querySelectorAll(".deleteButton");
deleteButtons.forEach(btn => {
    btn.addEventListener("click", function(){
        console.log(btn);
    });
});


