const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");
const instructions = document.getElementById("instructions");
const imageContainer = document.getElementById("image-container");

// The list of messages to cycle through
const messages = [
    "No",
    "please no 🥺",
    "Don't do this to me!!😢",
    "This could be a Mistake..😣",
    "Please Don't do It..🫠",
    "Think again! 💔",
    "Are you absolutely sure?😒",
    "Surely not...🙅‍♂️",
    "I thought You Click Yes😢",
    "I can't believe you are doing this..",
    "You are breaking my heart 💔",
    "Please reconsider..☹️",
    "I promise I'll be the best Valentine ever! 🥰",
    "I will love you forever! ❤️",
    "Please say yes! 🙏",
];

let messageIndex = 0;

noBtn.addEventListener("mouseover", () => {
    // 1. Move the button
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // 2. Change the text
    // We increment the index and use the modulo (%) operator to 
    // loop back to the start if they keep trying!
    messageIndex = (messageIndex + 1) % messages.length;
    noBtn.innerText = messages[messageIndex];
});

yesBtn.addEventListener("click", () => {
    question.innerHTML = "YAY!!! <br> Best decision ever 🥰 <br> <p style='font-size: 1rem;'>I love you ❤️</p>";
    
    // Using a cute placeholder image
    imageContainer.innerHTML = `<img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3ZyeHNodDBicjZmamIxem1qbjg4NGswYjF2ZHYyYjdueHVicThjdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/s6fnVyWTfM2nUKuMVY/giphy.gif" alt="Celebration">`;

    document.querySelector(".buttons").style.display = "none";
    instructions.style.display = "none";

    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ff85a1', '#ffffff']
    });
});