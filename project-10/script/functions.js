import { songs } from "./song.js";

export function playAndPauseSong(song) {

    const playBtns = document.querySelectorAll(".playBtn");

    if (song.paused) {
        song.play();

        playBtns.forEach(btn => {
            btn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        });

    } else {

        song.pause();

        playBtns.forEach(btn => {
            btn.innerHTML = `<i class="fa-solid fa-play"></i>`;
        });

    }
}

export function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    return `${minutes}:${seconds}`;
}

export function songPlay(songid) {
    let html = "";
    songs.forEach((song) => {
        if (song.songId === songid) {
            html = `
            <img class="album-cover" src="${song.songImage}">

            <div class="player-content">

                <!-- Desktop -->
                <div class="desktop-player">

                    <div class="song-details">
                        <h2 class="song-name">${song.songName}</h2>
                        <p class="artist-name">${song.ArtistName}</p>
                    </div>

                    <audio class="audio">
                        <source src="${song.songSrc}">
                    </audio>

                    <input class="song-time" type="range">

                    <div class="time-info">
                        <span class="current-time">0:00</span>
                        <span class="duration">0:00</span>
                    </div>

                    <div class="buttons">
                        <button class="previousBtn"><i class="fa-solid fa-backward-step"></i></button>
                        <button class="playBtn"><i class="fa-solid fa-play"></i></button>
                        <button class="nextBtn"><i class="fa-solid fa-forward-step"></i></button>
                    </div>

                </div>

                <!-- Mobile -->
                <div class="mobile-player">

                    <span class="current-time">0:00</span>

                    <input class="song-time" type="range">

                    <span class="duration">0:00</span>

                    <button class="previousBtn"><i class="fa-solid fa-backward-step"></i></button>
                    <button class="playBtn"><i class="fa-solid fa-play"></i></button>
                    <button class="nextBtn"><i class="fa-solid fa-forward-step"></i></button>
                </div>

            </div>
            `
        }
    })
    return html;
}

export function randerSong(activeSong, songid , onSongEnd) {

    const currentSong = document.querySelector(".audio");

    const playBtns = document.querySelectorAll(".playBtn");
    const ranges = document.querySelectorAll(".song-time");
    const currentTimes = document.querySelectorAll(".current-time");
    const durations = document.querySelectorAll(".duration");
    const nextSong = document.querySelectorAll('.nextBtn');
    const previousBtn = document.querySelectorAll(".previousBtn")

    nextSong.forEach((songBtn)=>{
        songBtn.addEventListener('click',()=>{
        onSongEnd(songid);
    });
});

    previousBtn.forEach((songBtn)=>{
        songBtn.addEventListener('click',()=>{
        onSongEnd(songid-2)
    });
});

    currentSong.play();
    playBtns.forEach(btn => {
        btn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    });

    currentSong.addEventListener("loadedmetadata", () => {
        durations.forEach(duration => {
            duration.innerText = formatTime(currentSong.duration);
        });
    });

    currentSong.addEventListener("timeupdate", () => {

        if (currentSong.duration) {

            const value =
                (currentSong.currentTime / currentSong.duration) * 100;

            ranges.forEach(range => {
                range.value = value;
            });

            currentTimes.forEach(time => {
                time.innerText = formatTime(currentSong.currentTime);
            });

            durations.forEach(time => {
                time.innerText = formatTime(currentSong.duration);
            });
        }

    });

    ranges.forEach(range => {
        range.addEventListener("input", () => {
            currentSong.currentTime =
                (range.value / 100) * currentSong.duration;
        });
    });

    playBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            playAndPauseSong(currentSong);
        });
    });

    currentSong.addEventListener("ended", () => {
        onSongEnd(songid);
    });

}
