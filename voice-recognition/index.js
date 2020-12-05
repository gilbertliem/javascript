const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const greetings = [
  `I'm good, thank you!`,
  `Hi user, how are you today?`,
  `have a good day!`,
];

const weather = [
  `Be careful with the strong wind today`,
  `prepare your umbrella!`,
  `It's going to be a hot day.`,
];

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log("voice activated");
};

recognition.onresult = function (event) {
  console.log(event);
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoud(transcript);
};

btn.addEventListener("click", () => {
  recognition.start();
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = `please speak again`;
  if (message.includes("how are you")) {
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
  }
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}
