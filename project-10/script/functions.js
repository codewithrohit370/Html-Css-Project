export function playAndPauseSong(song, playBtn) {
    
    if (song.paused) {
        song.play();
        document.querySelector('.playBtn').innerHTML = `<i class="fa-solid fa-pause"></i>`
        

    }
    else {
        song.pause();
        document.querySelector('.playBtn').innerHTML = `<i class="fa-solid fa-play"></i>`;
        
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