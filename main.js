let hamburger = document.getElementById("hamburger");
let dropdown_box = document.getElementById("dropdown-box");

function clear_dropdown() {
  dropdown_box.style.display = "none";
}
function dropdown_menu() {
  dropdown_box.style.display = "block";
  dropdown_box.style.position = "absolute";
}
hamburger.addEventListener("click", dropdown_menu);
hamburger.addEventListener("dblclick", clear_dropdown);
