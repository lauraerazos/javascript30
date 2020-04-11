const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');   
    }
}

var sound = false;
function clickaction(b) {
    const audio = document.querySelector(`audio[data-key="${b.id}"]`);
    if (!sound) {
        audio.play();
        sound = true;
    } else {
        audio.pause();
        sound = false;
    } 
    audio.currentTime = 0;
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));