/* This is done automatically via "content_scripts" in manifest.json
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    console.log('chrome tab updated', { tabId, changeInfo, tab })

    if (tab.url.match(/^chrome:/)) return;

    if (changeInfo?.status !== 'complete') return;

    console.log('injecting content script')
    
    chrome.scripting.executeScript({
        target: {
            tabId,
            // allFrames: true,
        },
        files: ["content_script.js"],
    });
});
*/
