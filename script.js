// Navbar berubah saat scroll
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        navbar.style.background = "rgba(8,17,32,.9)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
    } else {
        navbar.style.background = "rgba(255,255,255,.05)";
        navbar.style.boxShadow = "none";
    }
});

// Efek mengetik
const text = [
    "Network Engineer",
    "Cloud Enthusiast",
    "Linux Administrator",
    "Web Developer"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function typingEffect() {

    current = text[i];

    if (!isDeleting) {
        j++;

        if (j == current.length) {
            isDeleting = true;

            setTimeout(typingEffect, 1500);

            document.getElementById("typing").innerHTML = current;

            return;
        }

    } else {

        j--;

        if (j == 0) {

            isDeleting = false;

            i++;

            if (i == text.length) i = 0;
        }

    }

    document.getElementById("typing").innerHTML = current.substring(0, j);

    setTimeout(typingEffect, isDeleting ? 60 : 120);

}

typingEffect();
