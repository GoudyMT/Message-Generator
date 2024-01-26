const quotes = [
    {
        quote: "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.",
        author: "Albert Einstein",
        imageUrl: "albert.png"
    },
    {
        quote: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin, but by the content of their character.",
        author: "Martin Luther King Jr.",
        imageUrl: "martin.png"
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi",
        imageUrl: "ghandi.png"
    },
    {
        quote: "Be less curious about people and more curious about ideas.",
        author: "Marie Curie",
        imageUrl: "marie.png"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
        imageUrl: "winston.png"
    },
    {
        quote: "Not all of us can do great things. But we can do small things with great love.",
        author: "Mother Teresa",
        imageUrl: "mother.png"
    },
    {
        quote: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs",
        imageUrl: "steve.jpg"
    },
    {
        quote: "Feet, what do I need you for when I have wings to fly?",
        author: "Frida Kahlo",
        imageUrl: "frida.jpg"
    },
    {
        quote: "Learning never exhausts the mind.",
        author: "Leonardo da Vinci",
        imageUrl: "leonardo.png"
    }
];

const quotesHistory = []; // Array to store the history of quotes

// Function to generate a random number
function generateRandomNumber() {
    return Math.floor(Math.random() * 9) + 1;
}

// Function to display quote, author, and image
function displayInformation() {
    const randomNumber = generateRandomNumber() - 1; // Subtract 1 to match array index (0-8)
    const selectedQuote = quotes[randomNumber];

    // Add the selected quote to the history
    quotesHistory.push(selectedQuote);
    
    console.log("Quote:", selectedQuote.quote);
    console.log("Author:", selectedQuote.author);
    
    // Create an image element and set its source to the author's image URL
    const image = new Image();
    image.src = selectedQuote.imageUrl;
    image.alt = `Image of ${selectedQuote.author}`;
    image.className = 'generated-image'; // Apply the CSS class
    
    // Assuming you have a div with the ID 'content' in your HTML
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear previous content
    contentDiv.appendChild(image); // Add image to div
    contentDiv.innerHTML += `<p>${selectedQuote.quote} - ${selectedQuote.author}</p>`; // Add quote and aut
    contentDiv.className ='generated-text';
}

// Call the function to display the information
displayInformation();

document.addEventListener('DOMContentLoaded', (event) => {
    // Attach click event listener to the button
    const button = document.getElementById('quoteButton');
    button.addEventListener('click', displayInformation);
});

function displayHistory() {
    const historyDiv = document.getElementById('history'); // Get the div where history will be displayed
    historyDiv.innerHTML = ''; // Clear previous history

    // Create a list of history items
    quotesHistory.forEach((quoteItem, index) => {
        historyDiv.innerHTML += `
            <div class="history-item">
                <p><strong>Quote ${index + 1}:</strong> ${quoteItem.quote}</p>
                <p> - ${quoteItem.author}</p>
            </div>
        `;
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    // ... existing code for the quote button ...

    // Attach click event listener to the history button
    const historyButton = document.getElementById('historyButton');
    historyButton.addEventListener('click', displayHistory);
});