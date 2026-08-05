let song = document.querySelector(".audio");
let range = document.querySelector(".song-time")
let playBtn = document.querySelector(".playBtn")
let currentTime = document.querySelector(".current-time");
let duration = document.querySelector(".duration");
let isBtn = false;



const themeBtn = document.querySelector(".theme-toggle");
const icon = themeBtn.querySelector("i");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }else{
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }

});

document.querySelector('body').addEventListener('keydown', (event) => {
    console.log(event.key)
    if (event.code === "Space") {
        event.preventDefault();
        playAndPauseSong();
    }
})
song.addEventListener("loadedmetadata", () => {
    duration.innerText = formatTime(song.duration);
});

song.addEventListener("timeupdate", () => {
    if (song.duration) {
        range.value = (song.currentTime / song.duration) * 100;
        currentTime.innerText = formatTime(song.currentTime);
        duration.innerText = formatTime(song.duration);
    }
});


range.addEventListener("input", () => {
    song.currentTime = (range.value / 100) * song.duration
});

playBtn.addEventListener('click', playAndPauseSong)
function playAndPauseSong() {
    if (isBtn === false) {
        song.play();
        document.querySelector('.playBtn').innerHTML = `<i class="fa-solid fa-pause"></i>`
        isBtn = true;

    }
    else {
        song.pause();
        document.querySelector('.playBtn').innerHTML = `<i class="fa-solid fa-play"></i>`;
        isBtn = false
    }
}

function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    return `${minutes}:${seconds}`;
}





