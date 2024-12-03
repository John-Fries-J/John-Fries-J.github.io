document.addEventListener("DOMContentLoaded", () => {
    const phrases = ["I am John Fries", "A Developer", "A Creator", "Your Solution"];
    const dynamicText = document.getElementById("dynamic-text");
    let currentPhraseIndex = 0;
    let currentCharacterIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentPhrase = phrases[currentPhraseIndex];
        if (!isDeleting) {

            dynamicText.textContent = currentPhrase.substring(0, currentCharacterIndex + 1);
            currentCharacterIndex++;
            if (currentCharacterIndex === currentPhrase.length) {
                isDeleting = true;
                setTimeout(typeEffect, 1000); 
                return;
            }
        } else {
            dynamicText.textContent = currentPhrase.substring(0, currentCharacterIndex - 1);
            currentCharacterIndex--;
            if (currentCharacterIndex === 0) {
                isDeleting = false;
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            }
        }
        setTimeout(typeEffect, isDeleting ? 100 : 150);
    }

    typeEffect();

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
});
