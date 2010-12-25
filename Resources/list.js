var win = Titanium.UI.currentWindow;
var tableView = null;

function loadWords() {
    var rowData = [];
    var loader = Ti.Network.createHTTPClient();
    //loader.open("GET", "http://192.168.11.8:5000/list");
    //loader.open("GET", "http://192.168.11.6:5080/list");
    loader.open("GET", "http://learn2crawl.org:5080/list");
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
                    //xhr.open("POST", "http://192.168.11.8:5000/def");
                    //xhr.open("POST", "http://192.168.11.6:5080/def");
                    xhr.open("POST", "http://learn2crawl.org:5080/def");
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
        tableView = Titanium.UI.createTableView();
        tableView.setData(rowData);
        win.add(tableView);
    }
    loader.send();
}

var rel = null;
var menuClickHandler = function() {
        rel.addEventListener('click', function() {
                if (tableView) {
                    tableView.setData([]);
                    setTimeout(function() {
                            loadWords();
                        }, 1000);
                }
                else {
                    loadWords();
                }
            });
}
var activity = Ti.Android.currentActivity;
activity.onCreateOptionsMenu = function(e) {
    var menu = e.menu;
    rel = menu.add({title: 'reload'});
    menuClickHandler();
}

loadWords();