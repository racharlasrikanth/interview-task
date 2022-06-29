// DOM => document object model

function init() {
  const hamburger = document.querySelector(".hamburger");
  const sidebarContainer = document.querySelector(".sidebar-container");

  const toggleSidebar = () => {
    sidebarContainer.classList.toggle("show-sidebar");
  };

  hamburger.addEventListener("click", toggleSidebar);
}
init();
