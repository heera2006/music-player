const songs = [
    {
        title: "we don't talk anymore",
        artist: "selena gomez",
        src: "song Audio.mpeg.mp3"
    }
];
const audio = document.getElementById("audio");
const playPause = document.getElementById("playPause");
const progress = document.getElementById("progress");
const icon = playPause.querySelector("i");

let isPlaying = false;

// Play / Pause
playPause.addEventListener("click", () => {
    if (!isPlaying) {
        audio.play();
        icon.classList.replace("fa-play", "fa-pause");
    } else {
        audio.pause();
        icon.classList.replace("fa-pause", "fa-play");
    }
    isPlaying = !isPlaying;
});

// Progress update
audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
});

// Seek
progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});