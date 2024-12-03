document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.addEventListener("mouseover", () => {
            section.style.transform = "scale(1.05)";
            section.style.transition = "transform 0.3s ease";
        });
        section.addEventListener("mouseout", () => {
            section.style.transform = "scale(1)";
        });
    });

    document.querySelectorAll("a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
