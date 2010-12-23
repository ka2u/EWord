var win = Titanium.UI.currentWindow;

function loadWords() {
    var rowData = [];
    //var words = eval('[' +
    //                 '{"word": "ellaborate", "definition": " this word means", "priority": 1},' +
    //                 '{"word": "programming", "definition": " this word means2", "priority": 2}' +
    //                 ']');
    var loader = Ti.Network.createHTTPClient();
    loader.open("GET", "http://192.168.11.8:5000/list");
    loader.onload = function() {
        var words = JSON.parse(this.responseText);
        for (var i = 0; i < words.length; i++) {
            var word = words[i].word;
            var defin = words[i].definition;
            var priority = words[i].priority;
            var word_lbl = Titanium.UI.createLabel({
                    text: word,
                    left: 54,
                    top: 0,
                    bottom: 2,
                    height: 'auto',
                    width: 236,
                    textAlign: 'left',
                    font:{ fontSize:18, fontWeight:'bold' }
                });
            var row = Titanium.UI.createTableViewRow({height:'auto'});
            var post_view = Titanium.UI.createView({height:'auto', layout:'vertical', top:5, right:5, bottom:5, left:5});
            word_lbl.addEventListener('click', function() {
                    var xhr = Titanium.Network.createHTTPClient();
                    xhr.open("POST", "http://192.168.11.8:5000/def");
                    xhr.onload = function() {
                        var mess = JSON.parse(this.responseText);
                        var diag = Titanium.UI.createAlertDialog({message: mess.def});
                        diag.show();
                    };
                    xhr.send({word: this.text});
                });
            post_view.add(word_lbl);
            row.add(post_view);
            row.className = "item" + i;
            rowData[i] = row;
        }
        var tableView = Titanium.UI.createTableView({data: rowData});
        win.add(tableView);
    }
    loader.send();
}

loadWords();