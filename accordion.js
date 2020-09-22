const dropdowns = document.querySelectorAll("aside ul li")

dropdowns.forEach(dropdown => {
  const toggler = dropdown.querySelector(".toggler")
  const panel = dropdown.querySelector(".panel")

  toggler.addEventListener("click", function (event) {
    dropdown.classList.toggle("open")
    event.preventDefault()

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px"
    }
  })
})
