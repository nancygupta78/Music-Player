const songs = [
{
    title:"INAAM",
    artist:"Jasleen Royal , Badshah",
    src:"music/Inaam Jasleen Royal 128 Kbps.mp3",
    cover:"music pic/images.jfif"
},
{
    title:"Dhurandhar - Title Track",
    artist:"Hanumankind, Jasmine, SandlasSudhir Yaduvanshi",
    src:"music/Dhurandhar - Title Track - RaagTune.mp3",
    cover:"music pic/images (1).jfif"
},
{
    title:"Bandhu 2",
    artist:"Kavita Seth, Neeraj Shridhar",
    src:"music/Bandhu 2 Cocktail 2 128 Kbps.mp3",
    cover:"music pic/images (2).jfif"
},
{
    title:"Bairan",
    artist:"Sumit and Anuj",
    src:"music/Bairan - RaagTune.mp3",
    cover:"music pic/download.jfif"
}
];

let currentSong = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

function loadSong(index){
    title.textContent = songs[index].title;
    artist.textContent = songs[index].artist;
    cover.src = songs[index].cover;
    audio.src = songs[index].src;
}

loadSong(currentSong);

playBtn.onclick = () => {
    if(audio.paused){
        audio.play();
        playBtn.textContent="⏸";
    }else{
        audio.pause();
        playBtn.textContent="▶";
    }
};

nextBtn.onclick = () => {
    currentSong=(currentSong+1)%songs.length;
    loadSong(currentSong);
    audio.play();
    playBtn.textContent="⏸";
};

prevBtn.onclick = () => {
    currentSong=(currentSong-1+songs.length)%songs.length;
    loadSong(currentSong);
    audio.play();
    playBtn.textContent="⏸";
};

audio.addEventListener("timeupdate",()=>{
    progress.max=audio.duration;
    progress.value=audio.currentTime;
});

progress.addEventListener("input",()=>{
    audio.currentTime=progress.value;
});

volume.addEventListener("input",()=>{
    audio.volume=volume.value;
});

audio.addEventListener("ended",()=>{
    currentSong=(currentSong+1)%songs.length;
    loadSong(currentSong);
    audio.play();
});
audio.onplay=()=>{
    cover.classList.add("rotate");
}

audio.onpause=()=>{
    cover.classList.remove("rotate");
}
