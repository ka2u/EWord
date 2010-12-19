var win = Titanium.UI.currentWindow;

function loadWords() {
    var rowData = [];

    //var loader = Titanium.Network.createHTTPClient();
    //loader.open("GET", "http://");
    //loader.onload = fuction {};
    //loader.send();
    var words = eval('[' +
                     '{"word": "ellaborate", "definition": " this word means", "priority": 1},' +
                     '{"word": "programming", "definition": " this word means2", "priority": 2}' +
                     ']');
    var row = Titanium.UI.createTableViewRow({height:'auto'});
    var post_view = Titanium.UI.createView({height:'auto', layout:'vertical', top:5, right:5, bottom:5, left:5});

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
                font:{ fontSize:14 }
            });
        post_view.add(word_lbl);
        row.add(post_view);
        row.className = "item" + i;
        rowData[i] = row;
    }
    var tableView = Titanium.UI.createTableView({data: rowData});
    win.add(tableView);
}

loadWords();