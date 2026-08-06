import { playAndPauseSong , formatTime} from "./script/functions.js";
import { songs } from "./script/song.js";



const song = document.querySelector(".audio");
const range = document.querySelector(".song-time")
const playBtn = document.querySelector(".playBtn")
const currentTime = document.querySelector(".current-time");
const duration = document.querySelector(".duration");
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

document.body.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        event.preventDefault();
        playAndPauseSong(song, playBtn);
    }
});


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

playBtn.addEventListener("click", () => {
    playAndPauseSong(song, playBtn);
}); 
    







