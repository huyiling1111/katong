let btn = document.getElementById('btn');

let sound = document.getElementById('sound');

btn.addEventListener('click', () => {
    setTimeout(() => { sound.play() }, 1000)
    setTimeout(() => { sound.pause() }, 3400)

})
