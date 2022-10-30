function CheckBuyerRequests() {
  const request_children = document.querySelector(
    '#main-wrapper > div.main-content.js-main-content > section > div > article > div.db-new-main-table.align-top.js-db-table > table > tbody > tr'
  ).children.length;

  console.info('Requests', request_children);
  if (request_children > 1) {
    sendNotification();
    myStopFunction();
  }
}

function myStopFunction() {
  clearInterval(myInterval);
}

function sendNotification() {
  chrome.runtime.sendMessage('', {
    type: 'notification',
    options: {
      title: 'Buyer Requests',
      message: 'There are buyer requests available',
      iconUrl: './icons/fiver48.png',
      type: 'basic',
      requireInteraction: true,
    },
  });
}

console.info('script running successfully...');

setTimeout(() => {
  console.info('Running after timeout...');

  CheckBuyerRequests();
}, 10000);

const myInterval = setInterval(() => {
  console.info('Running refresh...');

  location.reload();
}, 30000);
