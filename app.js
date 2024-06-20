const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);
    
    // Configurar para voz feminina brasileira
    const voices = window.speechSynthesis.getVoices();
    const brazilianVoice = voices.find(voice => voice.lang === 'pt-BR' && voice.name.includes('Google'));
    text_speak.voice = brazilianVoice;

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Bom dia chefe...");
    } else if (hour >= 12 && hour < 18) {
        speak("Boa tarde chefe...");
    } else {
        speak("Boa noite chefe...");
    }
}

window.addEventListener('load', () => {
    speak("Inicializando a LEXI...");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'pt-BR';  // Definindo para reconhecimento de fala em português brasileiro

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Ouvindo...";
    recognition.start();
});

function takeCommand(message) {
    if(message.includes('olá') || message.includes('hey') || message.includes('hello')) {
        speak("Olá, seja bem vindo, me chamo Lexi, como posso te ajudar?");
    } else if (message.includes("thor")) {
        speak("Acesso negado");
    } else if (message.includes("thor filho de odin")) {
        speak("Acesso negado");
    } else if (message.includes("vingador mais forte")) {
        speak("negado");
    } else if (message.includes("playboyzinho")) {
        window.open("https://www.instagram.com/jhonwesley.dev/")
        speak("Bem vindo playboyzinho");
    } else if (message.includes("fechar")) {
        speak("Até logo mestre Jhon")
        window.close("file:///C:/Users/jwbf2/Documents/GitHub/IA_Assistant/index.html");
    } else if (message.includes("oi lexi me chamo nara")) {
        speak("olá Nara, o meu criador Jhon Wesley fala muito bem de você, não precisa ter ciumes de mim, sou apenas uma inteligencia artificial");
    } else if (message.includes("abrir google")) {
        window.open("https://www.google.com", "_blank");
        speak("Abrindo o Google");
    } else if (message.includes("abrir youtube")) {
        window.open("https://www.youtube.com", "_blank");
        speak("Abrindo o Youtube");
    } else if (message.includes("abrir github")) {
        window.open("https://www.github.com/Jhon-Wesley7/", "_blank");
        speak("Abrindo o seu Github");
    } else if (message.includes("abrir chat")) {
        window.open("https://www.chatgpt.com/", "_blank");
        speak("Abrindo um dos meus irmãos");
    } else if (message.includes("calculadora")) {
        window.open("https://www.google.com/search?q=calculadora");
        speak("Abrindo a Calculadora");
    } else if (message.includes("abrir WhatsApp")) {
        window.open("https://www.web.whatsapp.com", "_blank");
        speak("Abrindo o seu WhatsApp");
    } else if (message.includes("abrir animes")) {
        window.open("https://www.crunchyroll.com/pt-br/", "_blank");
        speak("Abrindo o melhor site de animes");
    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "Aqui está algumas informações sobre " + message + " no Google";
        speak(finalText);
    }
}
