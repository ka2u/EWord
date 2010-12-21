var win = Titanium.UI.currentWindow;

function loadInput() {
    var text = Titanium.UI.createTextField({hintText: 'word',
                                            width: '200%',
                                            top: 100});
    var button = Titanium.UI.createButton({title: 'send',
                                           width: '200%',
                                           top: 170});

    buttion.addEventListener('click', function(e) {
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