var win = Titanium.UI.currentWindow;

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
                diag.show();
            };
            xhr.open("POST", "http://192.168.11.8:5000/input");
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