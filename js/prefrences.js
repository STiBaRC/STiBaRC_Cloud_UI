document.getElementById("themechng").value = localStorage.getItem("theme");

document.getElementById("themechng").onchange = function(evt) {
    var value = document.getElementById("themechng").value;
    localStorage.setItem("theme", value);
    if (value != "custom") {
        document.getElementById("themecust").style.display = "none";
        loadTheme();
    } else {
        document.getElementById("themecust").style.display = "";
    }
}
document.getElementById("themecust").onchange = function(evt) {
    var value = document.getElementById("themecust").value;
    localStorage.setItem("customtheme", value);
    if (value.trim() != "") {
        loadTheme();
    }
}
