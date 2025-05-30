const typingElement = document.getElementById("typing");
const phrases = ["Go.", "Fuck.", "Your.", "Self -_-"];
let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function type() {
  const currentPhrase = phrases[phraseIndex];
  if (isDeleting) {
    letterIndex--;
  } else {
    letterIndex++;
  }

  typingElement.textContent = currentPhrase.slice(0, letterIndex);

  if (!isDeleting && letterIndex === currentPhrase.length) {
    setTimeout(() => isDeleting = true, 1000);
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
  }

  const speed = isDeleting ? 60 : 100;
  setTimeout(type, speed);
}

type();
