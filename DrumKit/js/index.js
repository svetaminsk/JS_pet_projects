const playSound = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
    }
    const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

window.addEventListener('keydown', playSound);

const randomPattern = () => {
    const patterns = [
        ['J', 'G', 'S', 'J', 'G', 'S', 'F'], 
        ['D', 'S', 'D', 'S', 'D', 'S', 'H'], 
        ['G', 'G', 'J', 'G', 'G', 'J', 'H']
    ];
    const randomNum = Math.floor(Math.random() * (patterns.length));
    const block = document.querySelector('blockquote');
    pattern = patterns[randomNum].join(' ');
    block.innerHTML = pattern;
}
const btn = document.querySelector('button');
btn.addEventListener('click', randomPattern);


