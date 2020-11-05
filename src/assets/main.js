let btn = document.getElementById('btn');

let sound = document.getElementById('sound');

let canUse = true


btn.addEventListener('click', () => {
    if (canUse) {
        console.log(1)
        sound.play()
        canUse = false
        setTimeout(() => {
            canUse = true
        }, 3000)
    }


})
