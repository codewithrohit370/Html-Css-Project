import { playAndPauseSong, formatTime, songPlay , randerSong } from "./script/functions.js";
import { songs } from "./script/song.js";


const themeBtn = document.querySelector(".theme-toggle");
const icon = themeBtn.querySelector("i");
let currentSong = null;
let currentPlayBtn = null;

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

// if(currentSong === null){
//     document.querySelector('.Audio-Container').classList.add('Hidden-container')
// }

document.body.addEventListener("keydown", (event) => {
    if (event.code === "Space" && currentSong) {
        event.preventDefault();
        playAndPauseSong(currentSong);
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
        let songID = button.dataset.songId;
        document.querySelector('.Audio-Container').innerHTML = songPlay(songID);
        randerSong(currentSong, currentPlayBtn);
    })
})
