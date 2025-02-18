const openTabSection = (
  evt: React.MouseEvent<HTMLLIElement, MouseEvent>,
  tabName: string,
) => {
  const tabcontent = document.getElementsByClassName("tabs_item")
  for (let i = 0; i < tabcontent.length; i++) {
    const styledElement = tabcontent[i] as HTMLElement
    styledElement.classList.remove("fadeInUp")
    styledElement.style.display = "none"
  }

  const tablinks = document.getElementsByTagName("li")
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("current", "")
  }

  const elt = document.getElementById(tabName)
  if (elt) {
    elt.style.display = "block"
    elt.className += " fadeInUp animated"
  }

  if (evt.currentTarget) {
    ;(evt.currentTarget as HTMLElement).className += "current"
  }
}

export default openTabSection
