const AUDIO = document.querySelector('audio')
const play = document.querySelector('.play');
play.addEventListener('click', function () { 
    AUDIO.play()
    console.log(AUDIO)
})