const closeMenu = () => {
  const checkBoxTag =  document.getElementById("close-button"); 
  checkBoxTag.checked = false
}

const menuList = document.querySelector("#menuList"); 
menuList.addEventListener("click", closeMenu)




  