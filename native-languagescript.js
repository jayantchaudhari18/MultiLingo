function selectNativeLanguage() {
    var selectedLanguage = decodeURIComponent(window.location.search).split('=')[1];
    var selectedNativeLanguage = document.getElementById("nativeLanguageSelect").value;
    if (selectedNativeLanguage !== "") {
        // Redirect to dashboard or further actions
        window.location.href = "hug.html";
        alert("Language Selected: " + selectedLanguage + "\nNative Language Selected: " + selectedNativeLanguage);
    } else {
        alert("Please select your native language.");
    }
}