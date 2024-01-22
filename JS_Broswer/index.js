// index.js
const body = document.querySelector("body");
const recipeListEl = document.createElement("ol"); // Create a unordered list element

const stepOneEl = document.createElement("li"); // Create a new list item element
stepOneEl.innerText = "Toast some bread"; // Update the text of the list item
recipeListEl.appendChild(stepOneEl); // Add the item as a child of the recipe list

const stepTwoEl = document.createElement("li"); // Repeat for the second instruction
stepTwoEl.innerText = "Spread butter on the toast";
recipeListEl.appendChild(stepTwoEl);

body.appendChild(recipeListEl);

// Function to add a recipe to the bottom of the page
function addRecipe(title, steps) {
    // Create a new paragraph element for the title
    const titleElement = document.createElement('p');
    titleElement.textContent = title;

    // Create an ordered list for the steps
    const stepsList = document.createElement('ol');

    // Use the .map method to create list items for each step
    steps.map(step => {
        const stepItem = document.createElement('li');
        stepItem.textContent = step;
        stepsList.appendChild(stepItem);
    });

    // Create a container div for the recipe
    const recipeContainer = document.createElement('div');

    // Append the title and steps list to the container
    recipeContainer.appendChild(titleElement);
    recipeContainer.appendChild(stepsList);

    // Append the container to the body of the document
    document.body.appendChild(recipeContainer);
}

// Add the first recipe
addRecipe("Recipe 1", ["Step 1", "Step 2", "Step 3"]);

// Add the second recipe
addRecipe("Recipe 2", ["Step A", "Step B", "Step C"]);


// index.js

// Function to fetch and display a random joke
async function fetchRandomJoke() {
    try {
        // Send an HTTP GET request to the joke API
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');

        // Check if the request was successful (status code 200)
        if (response.ok) {
            // Parse the JSON response
            const joke = await response.json();

            // Display the joke on the webpage
            displayJoke(joke);
        }
    } catch (error) {
        // Handle any other errors that may occur during the fetch
        console.error('An error occurred while fetching the joke:', error);
    }
}

// Function to display a joke on the webpage
function displayJoke(joke) {
    // Create elements for the joke details
    const jokeContainer = document.createElement('div');
    const idElement = document.createElement('p');
    const typeElement = document.createElement('p');
    const setupElement = document.createElement('p');
    const punchlineElement = document.createElement('p');

    // Set the text content of the elements
    idElement.textContent = 'ID: ' + joke.id;
    typeElement.textContent = 'Type: ' + joke.type;
    setupElement.textContent = 'Setup: ' + joke.setup;
    punchlineElement.textContent = 'Punchline: ' + joke.punchline;

    // Append elements to the container
    jokeContainer.appendChild(idElement);
    jokeContainer.appendChild(typeElement);
    jokeContainer.appendChild(setupElement);
    jokeContainer.appendChild(punchlineElement);

    // Get the body element and append the joke container
    const bodyElement = document.body;
    bodyElement.appendChild(jokeContainer);
}

// Call the fetchRandomJoke function to fetch and display a random joke
fetchRandomJoke();




