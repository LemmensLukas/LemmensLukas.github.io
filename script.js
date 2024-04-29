const text = "SOFTWARE DEVELOPER";
const delay = 200; // Delay between each letter in milliseconds

const typingElement = document.getElementById("typing-text");

function typeText(index) {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        setTimeout(function() {
            typeText(index + 1);
        }, delay);
    } else {
        // Text typed completely, start over
        setTimeout(function() {
            typingElement.innerHTML = "";
            typeText(0);
        }, delay * 3); // Delay before starting over
    }
}

// Start typing
typeText(0);


