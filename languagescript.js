function selectLanguage() {
    var selectedLanguage = document.getElementById("languageSelect").value;
    if (selectedLanguage !== "") {
        // Redirect to native language selection page
        window.location.href = "native-language.html?language=" + encodeURIComponent(selectedLanguage);
    } else {
        alert("Please select a language.");
    }
}