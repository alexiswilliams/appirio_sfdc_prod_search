// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: 'AppirioSDFCSearch',
    title: "Search Appirio SFDC prod org for '%s'",
    type: 'normal',
    contexts: ['selection'],
  });
});

chrome.contextMenus.onClicked.addListener(function(item, tab) {
  let url =
    'https://appirio.my.salesforce.com/_ui/search/ui/UnifiedSearchResults?searchType=2&str='+ item.selectionText;
  chrome.tabs.create({url: url, index: tab.index + 1});
});
