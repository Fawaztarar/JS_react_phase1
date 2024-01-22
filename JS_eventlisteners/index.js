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
    // Update the setup, punchline, and ID elements with the joke content
    const setupElement = document.getElementById('jokeSetup');
    const punchlineElement = document.getElementById('jokePunchline');
    const idElement = document.getElementById('jokeId');
    
    setupElement.textContent = 'Setup: ' + joke.setup;
    punchlineElement.textContent = 'Punchline: ' + joke.punchline;
    idElement.textContent = 'ID: ' + joke.id;

    // Show the joke container
    const jokeContainer = document.getElementById('jokeContainer');
    jokeContainer.style.display = 'block';
}

// Attach an event listener to the button
const fetchButton = document.getElementById('fetchButton');
fetchButton.addEventListener('click', fetchRandomJoke);
