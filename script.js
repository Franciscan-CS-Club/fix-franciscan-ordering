console.log("Hello!");

//Change the favicon
iconurl = chrome.runtime.getURL("icons/burger.png");
favicons = document.querySelectorAll('[rel="SHORTCUT ICON"], [rel="apple-touch-icon"], [rel="shortcut icon"]');
favicons.forEach(favicon => favicon.href = iconurl);