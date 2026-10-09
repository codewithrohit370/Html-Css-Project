import { playAndPauseSong, formatTime, songPlay, randerSong, toggleShuffle, toggleLoop } from "./script/functions.js";
import { songs } from "./script/song.js";


const themeBtn = document.querySelector(".theme-toggle");
const icon = themeBtn.querySelector("i");
let currentSong = null;
let currentPlayBtn = null;
let activeSong = null;
let songID = null;
const audioContainer = document.querySelector(".Audio-Container");
const closePlayer = document.querySelector(".close-player");
const fullPlayer = document.querySelector(".full-player");


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

    const currentSongData = songs.find(
        song => song.songId === songID
    );

    document.querySelector(".full-album-cover").src =
        currentSongData.songImage;

    document.querySelector(".full-song-name").innerText =
        currentSongData.songName;

    document.querySelector(".full-artist-name").innerText =
        currentSongData.ArtistName;

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



audioContainer.addEventListener("click", (event) => {

    if (
        event.target.closest("button") ||
        event.target.closest("input") ||
        event.target.closest("audio")
    ) {
        return;
    }

    fullPlayer.classList.add("active");

    gsap.fromTo(
        fullPlayer,
        {
            y: "100%",
            opacity: 0
        },
        {
            y: "0%",
            opacity: 1,
            duration: 0.5,
            ease: "power3.out"
        }
    );
});



closePlayer.addEventListener("click", () => {

    gsap.to(fullPlayer, {
        y: "100%",
        opacity: 0,
        duration: 0.45,
        ease: "power3.in",

        onComplete: () => {
            fullPlayer.classList.remove("active");
        }
    });

});


const fullShuffle = document.querySelector(".full-shuffle");
const fullLoop = document.querySelector(".full-loop");

fullShuffle.addEventListener("click", () => {

    const state = toggleShuffle();

    fullShuffle.classList.toggle("active", state.shuffle);
    fullLoop.classList.toggle("active", state.loop);

});

fullLoop.addEventListener("click", () => {

    const state = toggleLoop();

    fullShuffle.classList.toggle("active", state.shuffle);
    fullLoop.classList.toggle("active", state.loop);

});



const searchInput = document.querySelector(".searchInput");
const songList = document.querySelector(".song-list");

// Search songs by name or artist
searchInput.addEventListener("input", () => {

    const searchValue = searchInput.value
        .trim()
        .toLowerCase();

    const filteredSongs = songs.filter((song) => {
        return (
            song.songName.toLowerCase().includes(searchValue) ||
            song.ArtistName.toLowerCase().includes(searchValue)
        );
    });

    // Display matching songs
    songList.innerHTML = "";

    if (filteredSongs.length === 0) {
        songList.innerHTML = `
            <p class="no-results">
                No songs found!
            </p>
        `;
        return;
    }

    filteredSongs.forEach((song) => {
        songList.innerHTML += `
            <div class="song-item" data-song-id="${song.songId}">
                <img src="${song.songImage}" alt="${song.songName}">

                <div>
                    <h4>${song.songName}</h4>
                    <p>${song.ArtistName}</p>
                </div>
            </div>
        `;
    });

    // Add click events to filtered songs
    document.querySelectorAll(".song-item").forEach((button) => {
        button.addEventListener("click", () => {
            songID = Number(button.dataset.songId);
            playSong(songID);
        });
    });

});





