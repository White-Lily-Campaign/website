const header = document.querySelector("header h1")

document.addEventListener("scroll", function (event) {

  const scroll = window.pageYOffset

  if (scroll > 50) {
  	header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})
