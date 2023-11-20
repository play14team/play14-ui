const openTabSection = (evt: any, tabName: string) => {
  let i, tablinks
  const tabcontent = document.getElementsByClassName("tabs_item")
  for (i = 0; i < tabcontent.length; i++) {
    const styledElement = tabcontent[i] as any
    styledElement.classList.remove("fadeInUp")
    styledElement.style.display = "none"
  }

  tablinks = document.getElementsByTagName("li")
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("current", "")
  }

  const elt = document.getElementById(tabName)
  if (elt) {
    elt.style.display = "block"
    elt.className += " fadeInUp animated"
  }

  evt.currentTarget.className += "current"
}

export default openTabSection
