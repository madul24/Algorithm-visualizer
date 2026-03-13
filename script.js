// Get references to the Generate button and the container for bars
const generateBtn = document.getElementById("generate");
const arrayContainer = document.getElementById("array-container");

// Function to generate a random array of numbers
function generateArray(size = 10) {
    const arr = [];
    for (let i = 0; i < size; i++) {
        // Generate a random number between 10 and 300
        arr.push(Math.floor(Math.random() * 290) + 10)
    }
    return arr;
}

// Function to display the array as bars in the container
function displayArray(arr) {
    arrayContainer.innerHTML = "";  // Clear the container first
    for (let i = 0; i < arr.length; i++) {
        const bar = document.createElement("div");  // Create a new div for the bar
        bar.classList.add("bar");  // Add the CSS class for styling
        bar.style.height = `${arr[i]}px`;  // Set the height of the bar
        arrayContainer.appendChild(bar);  // Append the bar to the container
    }
}

// Event listener for the Generate button
generateBtn.addEventListener("click", () => {
    const arr = generateArray();  // Generate a new random array
    displayArray(arr);  // Display it as bars on the page

});