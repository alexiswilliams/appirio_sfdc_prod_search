// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
chrome.runtime.onInstalled.addListener(function() {
  for (let key of Object.keys(kSearchEngineIDValues)) {
    chrome.contextMenus.create({
      id: key,
      title: kSearchEngineIDValues[key] + " for %s'",
      type: 'normal',
      contexts: ['selection'],
    });
  }
});

chrome.contextMenus.onClicked.addListener(function(item, tab) {
  let url = kSearchEngineURLValues[item.menuItemId] + item.selectionText;
  chrome.tabs.create({url: url, index: tab.index + 1});
});
