const names = ["Rikesh Lal Shrestha", "Riklakhe"];
let i = 0;
let j = 0;
let currentName = '';
let isDeleting = false;
const typingElement = document.getElementById('hero-typing');

function type() {
    if (i < names.length) {
        if (!isDeleting && j <= names[i].length) {
            currentName = names[i].substring(0, j);
            j++;
            typingElement.textContent = currentName;
        }
        if (isDeleting && j <= names[i].length) {
            currentName = names[i].substring(0, j);
            typingElement.textContent = currentName;
            j--;
        }

        // When the name is fully typed, pause and then start deleting
        if (j === names[i].length) {
            isDeleting = true;
            setTimeout(type, 1000); // Pause before deleting
        } 
        // When the name is completely deleted, switch to the next name
        else if (j === 0) {
            isDeleting = false;
            i++;
            if (i === names.length) i = 0; // Loop back to the first name
        }

        // Adjust the typing speed
        let typingSpeed = isDeleting ? 50 : Math.random() * (200 - 100) + 100;
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener('DOMContentLoaded', type);
