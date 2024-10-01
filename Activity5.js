let names = ["Tom", "Lily", "Jose", "Sarah"];
let height = [65, 60, 72, 68];

let $ = function (id) { return document.querySelector("#"+id); };

document.addEventListener("DOMContentLoaded", function () {
    $("show_results").addEventListener("click", showResults);
    $("add").addEventListener("click", addHeight);
    $("display_height").addEventListener("click", displayHeight);
});

function showResults() {

}

function addHeight() {

}

function displayHeight() {

}
