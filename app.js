const btn = document.querySelector('.tallk');
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss...");
    } else if (hour >= 12 && hour < 18) {
        speak("Good Afternoon Sir...");
    } else {
        speak("Good Evening Boss...");
    }
}

window.addEventListener('load', () => {
    speak("Initializing LEXI...");
    wishMe();
});