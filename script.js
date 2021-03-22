console.log("Hello!");

//Change the favicon
iconurl = chrome.runtime.getURL("icons/burger.png");
favicons = document.querySelectorAll('[rel="SHORTCUT ICON"], [rel="apple-touch-icon"], [rel="shortcut icon"]');
favicons.forEach(favicon => favicon.href = iconurl);

//Change check boxes to radio buttons
var feature_boxes = document.getElementsByClassName("featureset");
bread = feature_boxes[0]
max_span = bread.querySelectorAll("span")[1];
var i;
for (i = 0; i < feature_boxes.length; i++) {
    if (max_span.innerText == "max: 1"){
        radioButton = bread.querySelectorAll("input")
        radioButton 
    }
} 

// Clear cart funtion
function clearCart() {
    var cartProductRow = document.getElementsByClassName("cartProductRow")
    var i;
    for (i = 0; i < cartProductRow.length; i++) {
        bread = cartProductRow[i] 
        remove_button = bread.querySelectorAll("a")
        window.location.href = remove_button[0];
    }
}