var btn = document.getElementById('btn');
var btn1 = document.getElementById('btn1');
var sound = document.getElementById('sound');
btn.onclick = function () {
    sound.play()

}

btn1.onclick = function () {
    sound.pause();
}
