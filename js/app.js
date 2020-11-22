const slider = document.querySelector(".testimonials__slider")
const menuBtn = document.querySelector(".header__nav-hamburger")
const menu = document.querySelector(".header__nav-menu")
const overlay = document.querySelector(".overlay")
const email = document.querySelector(".footer__newsletter-email")
const sendBtn = document.querySelector(".footer__newsletter-send")
const errMsg = document.querySelector(".err")

slider.addEventListener("touchmove", moveSlide, false)
slider.addEventListener("touchstart", initialPos, false)

menuBtn.addEventListener("click", openMenu)
sendBtn.addEventListener("click", checkEmail)

function moveSlide(e) {
  console.log(e.touches[0].clientX)
}

function initialPos(e) {
  console.log(e, "initial pos")
}

function openMenu(e) {
  if (menu.classList.contains("hidden")) {
    menu.classList.replace("hidden", "active")
    e.target.src = "./images/icon-close.svg"
    document.body.style.overflow = "hidden"
    overlay.classList.replace("hide", "show")
  } else {
    menu.classList.replace("active", "hidden")
    e.target.src = "./images/icon-hamburger.svg"
    document.body.style.overflow = "visible"
    overlay.classList.replace("show", "hide")
  }
}

function checkEmail() {
  const regEx = /\S+@\S+\.\S/gi

  if (!regEx.test(email.value)) {
    errMsg.classList.remove("hide")
    email.classList.add("alert")
    setTimeout(() => {
      errMsg.classList.add("hide")
      email.classList.remove("alert")
    }, 1500)
  }

}