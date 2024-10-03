let names = ["Tom", "Lily", "Jose", "Sarah"];
let height = [65, 60, 72, 68];

let $ = function (id) { return document.querySelector("#"+id); };

document.addEventListener("DOMContentLoaded", function () {
    $("show_results").addEventListener("click", showResults);
    $("add").addEventListener("click", addHeight);
    $("display_height").addEventListener("click", displayHeight);
    $('name').focus();
});

function showResults() {
    let sum = 0;
    for (let i = 0; i < height.length; i++) {
        sum += height[i];
    }
    let average = Math.ceil(sum/height.length);

    let highest = height[0];
    let tallest = 0;
    for (let i = 0; i < height.length; i++){
        if (height[i] > highest) {
            highest = height[i];
            tallest = i;
        }
    }

    let tallestName = names[tallest];
    $("result").innerHTML = "<h2>Results</h2><p>Average Height = " + average + "<br>Highest height = " + tallestName + " with a height of " + highest + "</p>";
}

function addHeight() {
    let nameInput = $("name").value;
    let heightInput = $("height").value;

    if (nameInput == "" || isNaN(heightInput) || heightInput < 0 || heightInput > 100) {
        alert("You must enter a name and a valid height");
        $('name').focus();
        return;
    }
    names.push(nameInput);
    height.push(parseFloat(heightInput));

    $('name').value="";
    $('height').value="";
    $('name').focus();
}

function displayHeight() {
    let table = $("height_table");
    table.innerHTML = "";

    let tableHeader = document.createElement("h2");
    tableHeader.textContent = "Heights";
    table.appendChild(tableHeader);

    let headerRow = document.createElement("tr");

    let nameHeader = document.createElement("th");
    nameHeader.textContent="Name";
    headerRow.appendChild(nameHeader);

    let heightHeader = document.createElement("th");
    heightHeader.textContent="Height";
    headerRow.appendChild(heightHeader);

    table.appendChild(headerRow);

    for (let i = 0; i < names.length; i++){
        let row = document.createElement("tr");

        let nameColumn = document.createElement("td");
        nameColumn.textContent = names[i];
        row.appendChild(nameColumn);

        let heightColumn = document.createElement("td");
        heightColumn.textContent = height[i];
        row.appendChild(heightColumn);

        table.appendChild(row);  
    }
}
