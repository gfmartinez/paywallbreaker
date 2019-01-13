'use strict';

let breakPaywall = document.getElementById('breakPaywall');

chrome.storage.sync.get('cssMatchArray', function(cssMatchArray) {
  breakPaywall.onclick = function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: 'var cssMatchArray = ' + JSON.stringify(cssMatchArray)
      }, function() {
        chrome.tabs.executeScript(tabs[0].id, {file: 'inject.js'});
      });
    });
  };

});
