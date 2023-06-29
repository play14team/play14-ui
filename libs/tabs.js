const openTabSection = (evt, tabName) => {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabs_item");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("fadeInUp");
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByTagName("li");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("current", "");
  }

  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName).className += " fadeInUp animated";
  evt.currentTarget.className += "current";
};

export default openTabSection;
