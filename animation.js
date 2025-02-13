// Initialize variables that will allow the changingColorAndSize function to produce desired output
let textColors = ["#012556", "#3280C9", "#3F3FFC"];
let fontSize = 10;
let variableFont = true;
let index = 0;

// Function to change the color and size of the text
function changingColorAndSize() {
    let textElem = document.getElementById('textElem');
    textElem.style.color = textColors[index];
    textElem.style.fontSize = fontSize + 'px';

    // Logic to increase and decrease font size
    if (variableFont) {
        fontSize += 2; // Increments font size
        if (fontSize >= 24) {
            variableFont = false;
        }
    } else {
        fontSize -= 2; // Decrements font size
        if (fontSize <= 16) {
            variableFont = true;
            index = (index + 1) % textColors.length; // Change color when size resets
        }
    }
}

// Call the changingColorAndSize function every 150 milliseconds
setInterval(changingColorAndSize, 150);
