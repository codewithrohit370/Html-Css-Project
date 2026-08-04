let song = document.querySelector(".audio");
let range = document.querySelector(".song-time")
let playBtn = document.querySelector(".playBtn")
console.log(song)
console.log(range)
console.log(playBtn)
let isBtn = false;

document.querySelector('body').addEventListener('keydown',(event)=>{
    console.log(event.key)
    if (event.code === "Space") {
    playAndPauseSong();
    }
})

song.addEventListener("timeupdate", () => {
    range.value = (song.currentTime / song.duration) * 100;
});


range.addEventListener("input", () => {
     song.currentTime = (range.value / 100) * song.duration
});

playBtn.addEventListener('click',playAndPauseSong)
function playAndPauseSong(){
        if(isBtn === false){
            song.play();
            document.querySelector('.playBtn').innerHTML = `<i class="fa-solid fa-pause"></i>`
            isBtn = true;
            
        }
        else{
            song.pause();
            document.querySelector('.playBtn').innerHTML = `<i class="fa-solid fa-play"></i>`;
            isBtn = false
        }    
}





