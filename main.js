document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const change = document.getElementById("button");

    function getRandomColor() {
       
        return '#' + Math.floor(Math.random()*16777215).toString(16);
    }

    change.addEventListener("click", function() {
        display.style.backgroundColor = getRandomColor();
    });
});