var a = document.getElementById("one");
var b = document.getElementById("two");

function add() {
    if (a.value.trim() === "") return; // prevent empty task

    var c = document.createElement("p");
    c.textContent = a.value;

    var d = document.createElement("button");
    d.textContent = "delete";

    d.onclick = function () {
        c.remove();
    };

    c.append(d);
    b.append(c);

    a.value = ""; // clear input after adding
}