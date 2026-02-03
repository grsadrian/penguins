const sidebar = document.querySelector("#sidebar");
const listMenu = document.querySelector("#list-menu");
const closeMenu = document.querySelector("#close-menu");

listMenu.addEventListener("click", showSidebar);
closeMenu.addEventListener("click", hideSidebar);

function showSidebar() {
  sidebar.classList.add("active");
}

function hideSidebar() {
  sidebar.classList.remove("active");
}
