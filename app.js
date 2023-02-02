const dropdownMenus = document.getElementsByClassName("dropdown-menu");
const mobileMenu = document.getElementById("mobile-menu");
const mobileDropdownMenu = document.getElementById("mobile-menu-dropdown");

function toggleMenu(e) {
  closeAllMenus();
  var item = this;
  var menu = item.nextSibling;
  while (menu && menu.nodeType != 1) {
    menu = menu.nextSibling;
  }
  if (!menu) return;
  menu.classList.add("show");
}

mobileMenu.addEventListener("click", function (e) {
  mobileDropdownMenu.classList.toggle("open");
});

window.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".dropdown-item").forEach(function (item) {
    item.addEventListener("click", toggleMenu, true);
  });
});

window.addEventListener("click", closeAllMenus, true);

function closeAllMenus() {
  Array.prototype.forEach.call(dropdownMenus, function (el) {
    el.classList.remove("show");
  });
}
