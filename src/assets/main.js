function hwhAudioPlay(elem, max, times) {
    elem.play();
    var start = 0;
    elem.addEventListener("ended", function () {
        start++;
        if (start < max) {

            setTimeout(function () { elem.play(); }, times);
        } else {
            elem.pause();
        }
    });
}

var myAuto = document.getElementById('sound');
hwhAudioPlay(myAuto, 3, 2000);