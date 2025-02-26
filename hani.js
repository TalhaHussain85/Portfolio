document.addEventListener("DOMContentLoaded", function () {
    // Reveal Elements on Scroll
    const sections = document.querySelectorAll(".main, .main1 div");
    const header = document.querySelector("header");
    const button = document.getElementById("startBtn");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    sections.forEach(section => observer.observe(section));
    setTimeout(() => {
        header.style.opacity = 1;
        header.style.transform = "translateY(0)";
    }, 500);
    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            button.style.opacity = 1;
            button.style.transform = "translateY(0)";
        }
    });
    // Active Nav Link
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

window.onscroll = function () { showButton() };

function showButton() {
    let btn = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}