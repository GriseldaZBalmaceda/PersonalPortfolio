import {
  animate,
  stagger,
  inView,
} from "https://cdn.jsdelivr.net/npm/motion@latest/+esm"

// Animate folders on hover
document.querySelectorAll(".folder-image").forEach((folder) => {
  folder.addEventListener("mouseenter", () => {
    animate(
      folder,
      {
        y: -10,
        scale: 1.05,
        filter: "drop-shadow(0 5px 15px rgba(0, 0, 0, 0.3))",
      },
      { duration: 0.3 }
    )
  })

  folder.addEventListener("mouseleave", () => {
    animate(
      folder,
      {
        y: 0,
        scale: 1,
        filter: "drop-shadow(0 0px 0px rgba(0, 0, 0, 0))",
      },
      { duration: 0.3 }
    )
  })
})

inView(".about-section h1", (element) => {
  animate(
    element,
    { opacity: 1, x: [-100, 0] },
    {
      duration: 0.9,
      easing: [0.17, 0.55, 0.55, 1],
    }
  )

  return () => animate(element, { opacity: 0, x: -100 })
})
