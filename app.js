window.openFolder = function (folder) {
  const section = document.getElementById(folder)
  section.scrollIntoView({ behavior: "smooth" })
}
