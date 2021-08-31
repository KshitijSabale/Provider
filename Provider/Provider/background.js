
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.inject === "reinject") {
            // console.log(request.tabId);
            chrome.scripting.executeScript({
                target: {
                    tabId: request.tabId
                },
                files: ['content_script.js'],
            });
            sendResponse({
                injected: "YES INJECTED"
            });
        }
    }
);


chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.send === "reload") {
            // console.log(sender.tab.id);
            chrome.tabs.reload(sender.tab.id);
            sendResponse({
                received: "YES DONE"
            });
        }
    }
);

chrome.tabs.onActivated.addListener(onActivate = (activeInfo) => {
    console.log("onActivated");
    if (activeInfo.tabId) {
        chrome.tabs.get(activeInfo.tabId, (tab) => {
            if (tab.active) {
                let urll = tab.url;
                urll = urll.split('?')[0];
                if (urll === "https://www.youtube.com/watch") {
                    console.log(`onActivated injected contentScript in tab id ${activeInfo.tabId}`);
                    chrome.scripting.executeScript({
                        target: {
                            tabId: activeInfo.tabId
                        },
                        files: ['content_script.js'],
                    });
                }
            }
        });
    }
});

let tabIdToPrevUrl = {};
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (tab.active && changeInfo.url) {
        console.log("onUpdated");
        let prevUrl = "";
        let curUrl = changeInfo.url.split('&')[0];
        if (tabIdToPrevUrl[tabId]) {
            prevUrl = tabIdToPrevUrl[tabId];
        }
        if (prevUrl !== curUrl) {

            console.log(`onUpdated injected contentScript in tab id ${tabId}`);
            chrome.scripting.executeScript({
                target: {
                    tabId: tabId
                },
                files: ['content_script.js'],
            });
        }
        tabIdToPrevUrl[tabId] = curUrl;
    }
});


chrome.webNavigation.onCommitted.addListener((details) => {
    // console.log("webNavigation");
    if (["reload"].includes(details.transitionType)) {
        chrome.webNavigation.onCompleted.addListener(function onComplete() {
            let urll = details.url;
            urll = urll.split('?')[0];
            if (urll === "https://www.youtube.com/watch") {
                console.log(`onWebNavigation injected contentScript in tab id ${details.tabId}`);
                chrome.scripting.executeScript({
                    target: {
                        tabId: details.tabId
                    },
                    files: ['content_script.js'],
                });
            }
            chrome.webNavigation.onCompleted.removeListener(onComplete);
        });
    }
});

