chrome.runtime.onMessage.addListener((data) => {
  console.info('background script running successfully ....');
  if (data.type === 'notification') {
    chrome.notifications.create('', data.options);
  }
});
