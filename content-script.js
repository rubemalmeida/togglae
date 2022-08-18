;(() => {
	var getAudioButton = () => {
		return document.querySelector('div[data-tutorial-tooltip-id="game-self-video"] button')
		|| document.querySelector('.GameVideo-self-video-container button')
		|| document.querySelector('.GameCanvasContainer-main button')
		|| document.querySelector('.GameVideosContainer-videobar-content button')
	};

	var getIsMute = () => {
		const key = `${window.location.pathname.split('/').slice(2).join("\\")}/audioMuteClicked`
		return localStorage.getItem(key) === 'true'
	};

	var isMute = getIsMute();
	if(isMute === true) {
		localStorage.setItem(`${window.location.pathname.split('/').slice(2).join("\\")}/userSettings/disableAutoMute`, true);
	}

	var audioBtn = getAudioButton();
	audioBtn.click();
	
	isMute = getIsMute();
	if(isMute === true) {
		console.log('You are mutted');
		return true;
	} else {
		console.log('All can ear you');
		return false;
	}
})();
