const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const answer = document.getElementById("answer");
const loveButton = document.getElementById("loveButton");
const finalAnswer = document.getElementById("finalAnswer");

yesButton.addEventListener("click", () => {
  answer.textContent = "YES! Aku simpan jawaban ini di hati. ❤️";
  createHeartBurst();
});

function moveNoButton() {
  const padding = 20;
  const maxX = Math.max(padding, window.innerWidth - noButton.offsetWidth - padding);
  const maxY = Math.max(padding, window.innerHeight - noButton.offsetHeight - padding);

  noButton.style.position = "fixed";
  noButton.style.left = `${Math.random() * (maxX - padding) + padding}px`;
  noButton.style.top = `${Math.random() * (maxY - padding) + padding}px`;
  noButton.style.zIndex = "10";
}

noButton.addEventListener("mouseenter", moveNoButton);
noButton.addEventListener("touchstart", (event) => {
  event.preventDefault();
  moveNoButton();
});

loveButton.addEventListener("click", () => {
  finalAnswer.textContent = "Pesan terakhir: semoga kita selalu punya alasan untuk memilih satu sama lain. 💕";
  loveButton.textContent = "Aku sayang kamu ❤️";
  createHeartBurst();
});

function createHeartBurst() {
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement("span");
    heart.textContent = "❤";
    heart.style.position = "fixed";
    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.zIndex = "20";
    heart.style.pointerEvents = "none";
    heart.style.fontSize = `${14 + Math.random() * 18}px`;
    heart.style.transform = "translate(-50%, -50%)";
    heart.style.transition = "transform 1s ease, opacity 1s ease";

    document.body.appendChild(heart);

    requestAnimationFrame(() => {
      const x = (Math.random() - 0.5) * window.innerWidth * 0.8;
      const y = (Math.random() - 0.5) * window.innerHeight * 0.7;
      heart.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
      heart.style.opacity = "0";
    });

    setTimeout(() => heart.remove(), 1100);
  }
}
