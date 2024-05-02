const startButton = document.getElementById('startButton');
const conversationDiv = document.getElementById('conversation');
console.log("started recog");
// Function to start speech recognition
startButton.addEventListener('click', () => {
    startSpeechRecognition();
});

function startSpeechRecognition() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
        console.log('Speech recognition started');
    };

    recognition.onresult = (event) => {
        const speechToText = event.results[0][0].transcript;
        conversationDiv.innerHTML += `<p>User: ${speechToText}</p>`;
        // Send the speechToText to the Hugging Face model and get response
        getHuggingFaceResponse(speechToText);
        
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
    };

    recognition.onend = () => {
        console.log('Speech recognition ended');
    };

    recognition.start();
}


    
async function getHuggingFaceResponse(data) {
        console.log(data);
        const response = await fetch(
            "https://api-inference.huggingface.co/models/microsoft/DialoGPT-large",
            {
                headers: { Authorization: "Bearer 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" },
                method: "POST",
                body: JSON.stringify( data ),
            }
        );
        
        const result = await response.json();
        // console.log(result);
        const fresult=JSON.stringify(result);

        // console.log(fresult);
        const ffresult=JSON.parse(fresult);
        // console.log(ffresult[0].generated_text);
        

    const modelResponse = ffresult[0].generated_text;
    
    conversationDiv.innerHTML += `<p>Model: ${modelResponse}</p>`;
    // Convert model response to speech audio
    textToSpeech(modelResponse);


        return result;
    }
    




// function textToSpeech(text) {
//     // Implement text-to-speech functionality (e.g., using Web Speech API, third-party libraries, etc.)
//     // Replace this with your actual implementation
//     console.log('Model reply:', text);
//     // For demonstration purposes, log the text to the console
// }

function textToSpeech(text) {
    // Implement text-to-speech functionality (e.g., using Web Speech API, third-party libraries, etc.)
    // Replace this with your actual implementation
    // const speakButton = document.getElementById('speakButton');
    // console.log(text);
    // Check if speech synthesis is supported by the browser
if ('speechSynthesis' in window) {
    // Function to speak the input text
    const speakText = () => {
        // Create a SpeechSynthesisUtterance object
        const utterance = new SpeechSynthesisUtterance();
        utterance.text = text; // Set the text to be spoken

        // Speak the text
        speechSynthesis.speak(utterance);
    };
    speakText();
    // Event listener for the speak button
    // speakButton.addEventListener('click', speakText);
} else {
    // Speech synthesis not supported, show error message
    alert('Speech synthesis is not supported in this browser. Please try a different browser.');
}



    console.log('Model reply:', text);
    // For demonstration purposes, log the text to the console
}