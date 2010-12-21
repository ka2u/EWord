var ListWin = Titanium.UI.createWindow({
        title: "EWord List",
        backgroundColor: "#fff",
        url: "list.js"
    });

var InputWin = Titanium.UI.createWindow({
        title: "EWord Input",
        backgroundColor: "#fff",
        url: "input.js"
    });


var tabGroup = Titanium.UI.createTabGroup();
var listTab = Titanium.UI.createTab({
        title: "EWord List",
        window: ListWin
    });

var inputTab = Titanium.UI.createTab({
        title: "EWord Input",
        window: InputWin
    });

tabGroup.addTab(listTab);
tabGroup.addTab(inputTab);
tabGroup.open();





