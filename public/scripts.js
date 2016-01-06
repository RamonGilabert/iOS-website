document.addEventListener("DOMContentLoaded", function() {

  var linksNodeList = document.getElementById("navigation").getElementsByTagName("li"),
    linkText = document.getElementById("navigation").getElementsByTagName("p")[0],
    header = document.getElementById("header-section"),
    logo = document.getElementById("logo"),
    story = document.getElementById("story"),
    openSource = document.getElementById("open-source"),
    projects = document.getElementById("projects"),
    footer = document.getElementById("footer"),
    links = [],
    sections = [story, openSource, projects, footer],
    isTouchDevice = 'ontouchstart' in document.documentElement;

  for (var i = 0; i < linksNodeList.length; i++) {
    links[i] = linksNodeList[i];
  }

  if (isTouchDevice) {
    var mouseBody = document.getElementById("mouse-body");
    var text = document.getElementById("mouse").getElementsByTagName("p")[0];

    mouseBody.style.borderRadius = "4px";
    text.textContent = "Drag";
  }

  links.forEach(function(element) {
    element.addEventListener("mouseover", function() {
      linkText.style.top = this.getBoundingClientRect().top + window.scrollY - 18 + "px";
      linkText.style.opacity = 1;
      linkText.style.animationName = "link-animation";
      linkText.style.animationDuration = "0.5s";
      linkText.textContent = this.textContent;
    })

    element.addEventListener("mouseout", function() {
      linkText.style.animationName = "link-animation-bye";
      linkText.style.opacity = 0;
    })

    element.addEventListener("click", function() {
      var element = sections[links.indexOf(this)];
      var step = (element.offsetTop - window.scrollY - 75) / 25;
      var value = element.offsetTop - window.scrollY - 75

      var interval = window.setInterval(function() {
        if (value <= 0) {
          window.clearInterval(interval);
        } else {
          window.requestAnimationFrame(function() { window.scrollBy(0, step); })
          value -= step;
        }
      }, 15);
    })
  });

  window.onscroll = function() {
    if (window.scrollY >= convertPercentage("0%") && window.scrollY <= convertPercentage("100%")) {
      window.requestAnimationFrame(updateParallax);
    }
  }

  window.ondrag = function() {
    if (window.scrollY >= convertPercentage("0%") && window.scrollY <= convertPercentage("100%")) {
      window.requestAnimationFrame(updateParallax);
    }
  }

  function updateParallax() {
    var slowScroll = -window.scrollY / 2;
    var forwardScroll = window.scrollY / 2;

    logo.style.transform = "translateY(" + slowScroll + "px)"
    header.style.backgroundPosition = "0px " + forwardScroll + "px";
  }

  function convertPercentage(value) {
    if (typeof(value) === "string") { value = parseFloat(value.replace("%", "")) }

    return window.innerHeight * value / 100
  }
});
