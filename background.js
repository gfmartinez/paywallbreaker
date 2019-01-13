'use strict';

chrome.runtime.onInstalled.addListener(function() {
  const cssMatchArray = [
    '[class*="paywall"]',
    '[id*="paywall"]',
    '#ta_background',
    '#ta_invisible'
    ];

  chrome.storage.sync.set({ cssMatchArray });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        css: cssMatchArray,
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
