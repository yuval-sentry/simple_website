function load() {
    var box = document.getElementById("box1");
    box.addEventListener("click", onBoxClick);
};
function onBoxClick(e) {
    var box = e.target;
    if (box.style.backgroundColor == "blue") {
        box.style.backgroundColor = "white";
    }
    else {
        box.style.backgroundColor = "blue";
    }
};
window.onload = load;
