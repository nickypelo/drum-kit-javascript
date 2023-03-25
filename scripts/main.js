const key = document.querySelector(".soul");

key.addEventListener('click', ()=>{
    const song = document.querySelector('audio');
    if(song.play){
        song.pause();
    }
    song.play();

})

