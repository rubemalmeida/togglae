chrome.commands.onCommand.addListener((command) => {
  if (command !== 'toggleGatherTownMic') return;
  const query = { url: '*://*.gather.town/*' };
  chrome.tabs.query(query, (tabs) => {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      files: ['content-script.js']
    },
    (isMute) => {
      if(isMute[0].result === false) {
        chrome.action.setIcon({path: '/assets/icon-normal-16x.png'});
        chrome.action.setTitle({title: 'All can ear you'});
        chrome.action.setBadgeText({text: 'ON'})
        chrome.action.setBadgeBackgroundColor({color: 'red'});
      }
      else {
        chrome.action.setIcon({path: '/assets/icon-no-speak-16x.png'});
        chrome.action.setTitle({title: 'Muted microphone'});
        chrome.action.setBadgeText({text: 'OFF'})
        chrome.action.setBadgeBackgroundColor({color: 'blue'});
      }
      setTimeout(() => {
        chrome.action.setBadgeText({text: ''})
        console.log('Clear icon text');
      }, 2000);
    });
  });
});
