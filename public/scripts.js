document.addEventListener("DOMContentLoaded", function() {

  var linksNodeList = document.getElementById("navigation").getElementsByTagName("li");
  var linkText = document.getElementById("navigation").getElementsByTagName("p")[0];
  var links = [];

  for (var i = 0; i < linksNodeList.length; i++) {
    links[i] = linksNodeList[i];
  }

  links.forEach(function(element) {
    element.addEventListener("mouseover", function() {
      linkText.textContent = "I Love You!";
      linkText.style.top = this.getBoundingClientRect().top - 18 + "px";
      linkText.style.opacity = 1;
      linkText.style.animationName = "link-animation";
      linkText.style.animationDuration = "0.5s";
    })

    element.addEventListener("mouseout", function() {
      linkText.style.animationName = "link-animation-bye";
      linkText.style.opacity = 0;
    })
  });
});
