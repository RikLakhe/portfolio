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

        if (j === names[i].length) {
            isDeleting = true;
            setTimeout(type, 1000); // Pause before deleting
        } else if (j === 0) {
            isDeleting = false;
            i++;
            if (i === names.length) i = 0; // Loop back to the first name
        }

        setTimeout(type, isDeleting ? 100 : 200); // Speed of typing and deleting
    }
}

document.addEventListener('DOMContentLoaded', type);
