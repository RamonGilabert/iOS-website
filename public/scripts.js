document.addEventListener("DOMContentLoaded", function() {

  var linksNodeList = document.getElementById("navigation").getElementsByTagName("li");
  var linkText = document.getElementById("navigation").getElementsByTagName("p")[0];
  var header = document.getElementById("header-section");
  var logo = document.getElementById("logo");
  var mouse = document.getElementById("mouse");
  var links = [];

  for (var i = 0; i < linksNodeList.length; i++) {
    links[i] = linksNodeList[i];
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
  });

  window.onscroll = function() {
    if (window.scrollY >= convertPercentage("0%") && window.scrollY <= convertPercentage("100%")) {
      window.requestAnimationFrame(updateParallax);
    }
  }

  function updateParallax() {
    var slowScroll = -window.scrollY / 2;
    var opacityValue = 1 - (window.scrollY / convertPercentage("85%"));

    logo.style.transform = "translateY(" + slowScroll + "px)"
    mouse.style.animationIterationCount = "0";
    mouse.style.opacity = opacityValue;
  }

  function convertPercentage(value) {
    if (typeof(value) === "string") { value = parseFloat(value.replace("%", "")) }

    return window.innerHeight * value / 100
  }
});
