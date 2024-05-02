// Define avatar speech
const avatarSpeech = [
    "Hello, I'm your virtual assistant.",
    "How can I assist you today?",
    "Feel free to ask me anything."
];

// Function to play avatar speech
function playAvatarSpeech() {
    const conversationDiv = document.getElementById("conversation");
    avatarSpeech.forEach((speech, index) => {
        setTimeout(() => {
            conversationDiv.innerHTML += `<p class="avatar-speech">${speech}</p>`;
            // Scroll conversation to the bottom
            conversationDiv.scrollTop = conversationDiv.scrollHeight;
            // If it's the last speech, enable user input
            if (index === avatarSpeech.length - 1) {
                enableUserInput();
            }
        }, 2000 * index); // Delay each speech by 2 seconds
    });
}

// Function to enable user input
function enableUserInput() {
    const userInput = prompt("You can start a conversation with the avatar:");
    const conversationDiv = document.getElementById("conversation");
    conversationDiv.innerHTML += `<p class="user-speech">${userInput}</p>`;
    // Scroll conversation to the bottom
    conversationDiv.scrollTop = conversationDiv.scrollHeight;
    // You can handle the user input here and generate avatar responses accordingly
}

// Start the conversation when the page loads
window.onload = function() {
    playAvatarSpeech();
};
