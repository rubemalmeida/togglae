;(() => {
	var getAudioButton = () => {
		return document.querySelector('.GameVideo-self-video-container button')
		|| document.querySelector('.GameVideosContainer-videobar-content button')
		|| document.querySelector('.GameCanvasContainer-main button')
	};
	var audioBtn = getAudioButton();
	audioBtn.click();

	var getIsMute = () => {
		const key = `${window.location.pathname.split('/').slice(2).join("\\")}/audioMuteClicked`
		return localStorage.getItem(key) === 'true'
	};

	var isMute = getIsMute();
	if(isMute) {
		console.log('You are mutted');
		return true;
	} else {
		console.log('All can ear you');
		return false;
	}
})();
