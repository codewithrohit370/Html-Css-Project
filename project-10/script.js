let song = document.querySelector(".audio");
let range = document.querySelector(".song-time")
let playBtn = document.querySelector(".playBtn")
let audioTime = song.loadedmetadata
console.log(song)
console.log(range)
console.log(playBtn)
let isBtn = false;

playBtn.addEventListener('click',()=>{
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
})




