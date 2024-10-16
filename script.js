document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("hero-typing");
    const texts = ["Rikesh Lal Shrestha", "Riklakhe"];
    let currentTextIndex = 0;
    let charIndex = 0;
    let typingInterval;
    
    function typeText() {
        if (charIndex < texts[currentTextIndex].length) {
            textElement.textContent += texts[currentTextIndex].charAt(charIndex);
            charIndex++;
            typingInterval = setTimeout(typeText, getRandomTypingSpeed());
        } else {
            setTimeout(deleteText, 1000); // Pause before starting to delete
        }
    }

    function deleteText() {
        if (charIndex > 0) {
            textElement.textContent = texts[currentTextIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(deleteText, getRandomTypingSpeed());
        } else {
            currentTextIndex++;
            if (currentTextIndex >= texts.length) {
                currentTextIndex = 0; // Reset to the first name after cycling through all names
                setTimeout(typeText, 2000); // Extra pause before restarting with the first name
            } else {
                setTimeout(typeText, 500); // Pause before starting to type the next text
            }
        }
    }

    function getRandomTypingSpeed() {
        return Math.floor(Math.random() * (150 - 80 + 1)) + 80; // Random speed between 80ms - 150ms
    }

    // Start the typing animation
    typeText();
});

document.addEventListener('DOMContentLoaded', type);
