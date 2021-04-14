//Change the favicon
var iconurl = chrome.runtime.getURL("icons/burger.png");
favicons = document.querySelectorAll('[rel="SHORTCUT ICON"], [rel="apple-touch-icon"], [rel="shortcut icon"]');
favicons.forEach(favicon => favicon.href = iconurl);

//Change check boxes to radio buttons
function setRadialButtons() {
    feature_boxes = document.getElementsByClassName("featureset");

    for (let i = 0; i < feature_boxes.length; i++) {
        let current_box = feature_boxes[i];
        let max_spans = current_box.querySelectorAll("span");
        for (let j =0; j < max_spans.length; j++){
            if (max_spans[j].innerText == "max: 1"){
                max_spans[j].innerText = "";
                current_box.querySelector('[id$=max]').remove();
                radioButtons = current_box.getElementsByClassName("featurecontrol");
                for (k=0; k<radioButtons.length; k++){
                    button = radioButtons[k];
                    button.type = "radio";
                    button.removeAttribute("onchange");
                }
            }
        }
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

//Called every time the url arguments change
window.onhashchange = function()
{
    setRadialButtons();
    setDropDownNumber();
}

//Called every time the page is loaded
window.onload = function()
{
    setRadialButtons(); //Needs to be in both on the off chance someone reloads the page while in the order screen
    setDropDownNumber();
}

// Change number input to dropdown
function setDropDownNumber(){

    feature_boxes = document.getElementsByClassName("featureitemlist")
    var a = document.getElementsByClassName('featurecontrol control--qty notrequired');
    var src, el, attrs;
    for(var i=0,l=a.length;i<l;i++) {
        src = a[i];
        el = document.createElement('select');
        attrs = src.attributes;
        for(var j=0,k=attrs.length;j<k;j++) {
            el.setAttribute(attrs[j].name, attrs[j].value);
        }
        el.innerHTML = src.innerHTML;
        src.parentNode.replaceChild(el, src);
        a[i].removeAttribute("size");
        var attStyle = document.createAttribute("style");        // Create a "href" attribute
        attStyle.value = "width:40px";
        a[i].setAttributeNode(attStyle); 
    }
    for (var o="";o<=10;o++){
        $("select").append($('<option></option>').val(o).html(o))
    }
}