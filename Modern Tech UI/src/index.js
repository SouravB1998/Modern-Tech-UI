let mobMenu = document.getElementById("menu-block");
const hamBurger = document.getElementById("check");

function toggleMenu() {
  if (hamBurger.checked) {
    mobMenu.classList.toggle("open");
  }

  mobMenu.classList.toggle("close");
}

let currentDesc = 1;
setDesc(currentDesc);

function selectImage(n) {
  setDesc((currentDesc = n));
}

function setDesc(n) {
  let i;
  let servicesDesc = document.getElementsByClassName("s-desc");
  let services = document.getElementsByClassName("srv-ls");

  for (i = 0; i < servicesDesc.length; i++) {
    servicesDesc[i].style.display = "none";
  }

  for (i = 0; i < services.length; i++) {
    services[i].className = services[i].className.replace(" active", "");
  }

  servicesDesc[currentDesc - 1].style.display = "block";
  services[currentDesc - 1].className += " active";
}

const putYear = document.getElementById("cr-year");
putYear.innerText = new Date().getFullYear();;
