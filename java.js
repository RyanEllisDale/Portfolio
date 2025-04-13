// Nav Scrolling
function Scroll(ID) {
  var element = document.getElementById(ID);
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
  });

  // Get the element's position relative to the viewport
  var rect = element.getBoundingClientRect();

  // Calculate the position where you want the element to appear (e.g., 100px above)
  var offset = 100; // The offset from the top of the element

  // Scroll to the desired position
  window.scrollTo({
    top: rect.top + window.pageYOffset - offset,
    behavior: 'smooth'
  });
}

// Collapsables
var coll = document.getElementsByClassName("collapsible");
var i;

// Looping through collapsables
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () // event listener 
    {
      this.classList.toggle("active");
      var content = this.lastChild;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.style.padding = 0;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.padding = getComputedStyle(document.body).getPropertyValue("--PaddingA0");
      }
    });
}
