const btn = document.querySelector('.talk');
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

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

function takeCommand(message) {
    if(message.includes('olá') || message.includes('hey') || message.includes('hello')) {
        speak("Olá, seja bem vindo, me chamo Lequisi, infelizmente minha voz ainda é de homem, ainda estou tentando dar um jeito nisso, mas me conta, tá tudo bem com você? como poderia te ajudar?");
    } else if (message.includes("open google")) {
        window.open("https://www.google.com", "_blank");
        speak("Abrindo o Google");
    } else if (message.includes("open youtube")) {
        window.open("https://www.youtube.com", "_blank");
        speak("Abrindo o Youtube");
    } else if (message.includes("open github")) {
        window.open("https://www.github.com/Jhon-Wesley7/", "_blank");
        speak("Abrindo o seu Github");
    }else if (message.includes("open chat")) {
        window.open("https://www.chatgpt.com/", "_blank");
        speak("Abrindo um dos meus irmãos");
    } else if (message.includes("calculadora")) {
        window.open("https://www.google.com/search?q=calculadora");
        speak("Abrindo a Calculadora");
    } else if (message.includes("open WhatsApp")) {
        window.open("https://www.web.whatsapp.com", "_blank");
        speak("Abrindo o seu WhatsApp");
    } else if (message.includes("open animes")) {
        window.open("https://www.crunchyroll.com/pt-br/", "_blank");
        speak("Abrindo o melhor site de animes");
    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }
}