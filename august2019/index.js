fadeOut = "opacity: 0; z-index: -1";
fadeIn = "opacity: 1; z-index: 1";
//var about = document.querySelector(".about")

var navlinks = [".about", ".education", ".skills", ".experience", ".portfolio", ".contact"];
var sections = ["about", "education", "skills", "experience", "portfolio", "contact"];

for (let i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener("click", function () {
        document.getElementById(sections[i]).style.cssText = fadeIn;
        hideOthers(navlinks[i]);
    });
}


function hideOthers(section) {
    for (let i = 0; i < sections.length; i++) {
        if (sections[i] != section) {
            document.getElementById(sections[i]).style.cssText = fadeOut;
        }
    }
}

// window.onload = function() {
//     document.getElementById("education").style.cssText = cssString;
// }