import { playAndPauseSong, formatTime, songPlay, randerSong } from "./script/functions.js";
import { songs } from "./script/song.js";


const themeBtn = document.querySelector(".theme-toggle");
const icon = themeBtn.querySelector("i");
let currentSong = null;
let currentPlayBtn = null;
let activeSong = null;
let songID = null;

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }

});

document.body.addEventListener("keydown", (event) => {

    if (!currentSong) return;

    if (event.code === "Space") {
        event.preventDefault();
        playAndPauseSong(currentSong);
    }

    if (event.code === "ArrowRight") {
        document.querySelector(".nextBtn").click();
    }

    if (event.code === "ArrowLeft") {
        document.querySelector(".previousBtn").click();
    }

});



let html = '';
songs.forEach((song) => {
    html += `
                <div class="song-item" data-song-id="${song.songId}" >
                    <img src="${song.songImage}" alt="">
                    <div>
                        <h4>${song.songName}</h4>
                        <p>${song.ArtistName}</p>
                    </div>
                </div>
            `
})
document.querySelector('.song-list').innerHTML = html;

let songbtn = document.querySelectorAll('.song-item')
songbtn.forEach((button) => {
    button.addEventListener('click', () => {
        songID = Number(button.dataset.songId);
        playSong(songID);
    })
})

function playSong(songID) {

    if (currentSong) {
        currentSong.pause();
        currentSong.currentTime = 0;
    }

    const button = document.querySelector(
        `[data-song-id="${songID}"]`
    );
    if (activeSong) {
        activeSong.classList.remove("active-song");
    }

    activeSong = button;
    activeSong.classList.add("active-song");

    document.querySelector(".Audio-Container").innerHTML = songPlay(songID);
    currentSong = document.querySelector(".audio");

    randerSong(activeSong, songID, (currentId) => {

        let newSongid = currentId + 1;

        if (newSongid > songs.length) {
            newSongid = 1;
        }
        if (newSongid < 1) {
            newSongid = songs.length
        }

        playSong(newSongid);

    });
}
