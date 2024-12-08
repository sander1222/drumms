import { sounds } from "./sounds.js";

const playSound = (soundFile) => {
  const audio = new Audio(soundFile);
  audio.play();
};

document.querySelectorAll(".sound-img").forEach((img) => {
  img.addEventListener("click", () => {
    const soundFile = sounds[img.id];
    if (soundFile) {
      playSound(soundFile);
    }
  });
});
