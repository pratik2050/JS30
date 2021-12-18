function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	
	key.classList.add('play');				//adding play css to key


	if (!audio) 
		return;						//if no audio found end

	audio.currentTime = 0;      		//rewind to start

	audio.play();

}

function removeTransition(e) {
	if (e.propertyName !== 'transform') 
		return;
	this.classList.remove('play');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
	key.addEventListener('transitionend', removeTransition)
});


window.addEventListener('keydown', playSound);
