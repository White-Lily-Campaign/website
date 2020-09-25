
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0.40) {
      entry.target.classList.add("animate")
    } else {
      entry.target.classList.remove("animate")
    }
  })
}, {
  threshold: [0, 0.40, 0.8, 1]
})


// const images = document.querySelectorAll('images');
// images.forEach(image => {
//     observer.observe(image)
// })

const animatedElements = document.querySelectorAll('section#s2');
animatedElements.forEach(animatedElement => {
observer.observe(animatedElement)
})
