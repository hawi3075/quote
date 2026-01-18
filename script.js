window.addEventListener('keydown', function(e) {
    // Select the audio element where data-key matches the key pressed
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    
    // Select the div key element to add the animation
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return; // stop the function if no audio found

    audio.currentTime = 0; // rewind to the start so you can hit it fast
    audio.play();

    key.classList.add('playing');
});

// Function to remove the "playing" class after the transition ends
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; 
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));