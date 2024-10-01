let names = ["Tom", "Lily", "Jose", "Sarah"];
let height = [65, 60, 72, 68];

let $ = function (id) { return document.querySelector("#"+id); };

document.addEventListener("DOMContentLoaded", function () {
    $("show_results").addEventListener("click", showResults);
    $("add").addEventListener("click", addHeight);
    $("display_height").addEventListener("click", displayHeight);
});

function showResults(names, height) {
    let sum = 0;
    for (let i = 0; i < height.length; i++) {
        sum += parseInt(height[i]);
    }
    let average = sum/height.length;

    let highest = height[0];
    let tallest = 0;
    for (let i = 0; i < height.length, i++){
        if (height[i] > highest) {
            highest = height[i];
            tallest = i;
        }
    }

    let tallestName = names[tallest];
    document.getElementById("result").innerHTML = "<h2>Results</h2><br><p>Average Height = " + average + "<br>Highest height = " + tallestName + "with a height of " + highest + "</p>";
}

function addHeight(names, height) {
    let nameInput = $("name");
    let heightInput = $("height");

    if (nameInput == "" || isNaN(heightInput) || heightInput <= 0 || heightInput > 100) {
        alert("You must enter a name and a valid height");
        nameInput.focus();
    }
    names.push(nameInput);
    height.push(parseFloat(heightInput));

    nameInput.focus();
}

function displayHeight(names, height) {
    let table = "<table border="1"><tr>";

    for (let i = 0; i < names.length; i++){
        table += "<tr>";
        for (let j = 0; j < names[i]
        
    }
}
