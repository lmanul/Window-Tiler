var windowTiler = new WindowTiler();

// Set up a click handler so that we can tile all the windows.
chrome.browserAction.onClicked.addListener(bind(windowTiler.start,
    windowTiler));

