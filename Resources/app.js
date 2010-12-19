var tabGroup = Titanium.UI.createTabGroup();
var mainWin = Titanium.UI.createWindow({
        title: "EWord List",
        backgroundColor: "#fff",
        url: "eword.js"
    });

var mainTab = Titanium.UI.createTab({
        title: "EWord",
        window: mainWin
    });

tabGroup.addTab(mainTab);
tabGroup.open();





