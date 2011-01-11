var win = Titanium.UI.currentWindow;
var tabGroup = win.tabGroup;

function loadInput() {
    var text = Titanium.UI.createTextField({hintText: 'word',
                                            width: '200%',
                                            top: 100});
    var button = Titanium.UI.createButton({title: 'send',
                                           width: '200%',
                                           top: 170});

    button.addEventListener('click', function(e) {
            var xhr = Titanium.Network.createHTTPClient();
            xhr.onload = function() {
                var mess = JSON.parse(this.responseText);
                var diag = Titanium.UI.createAlertDialog({message: mess.result});
                if (mess.result == 'done') {
                    text.value = "";
                    tabGroup.setActiveTab(0);
                    tabGroup.reload(); //from list.js
                }
                else {
                    diag.show();
                }
            };
            //xhr.open("POST", "http://192.168.11.10:5000/input");
            //xhr.open("POST", "http://192.168.11.6:5080/input");
            xhr.open("POST", "http://learn2crawl.org:5080/input");
            xhr.send({word: text.value});
        });
    var controls = Ti.UI.createView({
            width: 270,
            height: 'auto'
        });
    controls.add(text);
    controls.add(button);
    win.add(controls);
}

loadInput();