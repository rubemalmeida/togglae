;(() => {
	var getAudioButton = () => {
		return document.querySelector('div[data-tutorial-tooltip-id="game-self-video"] > div[class="Layout"] > div[class="Tooltip"] > button')
		|| document.querySelector('div[data-tutorial-tooltip-id="game-self-video"] > * > button[aria-label="Microphone"]')
		|| document.querySelector('.GameVideo-self-video-container button')
		|| document.querySelector('.GameCanvasContainer-main button')
		|| document.querySelector('.GameVideosContainer-videobar-content button')
	};
	var audioBtn = getAudioButton();
	audioBtn.click();

	var getIsMute = () => {
		const key = `${window.location.pathname.split('/').slice(2).join("\\")}/audioMuteClicked`
		return localStorage.getItem(key) === 'true'
	};

	var isMute = getIsMute();
	if(isMute === true) {
		console.log('You are mutted');
		return true;
	} else {
		console.log('All can ear you');
		return false;
	}
})();
