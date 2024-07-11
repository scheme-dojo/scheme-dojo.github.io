const closeMenu = () => {
  const checkBoxTag = document.getElementById("close-btn"); 
  checkBoxTag.checked = false;
}

const menuList = document.getElementById("menu-list"); 
menuList.addEventListener("click", closeMenu);