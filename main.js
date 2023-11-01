var oldSelected = null;
var oldTab = null;

document.addEventListener('DOMContentLoaded', function () {
    selectTab("home", "home-content");
}, false);

function selectTab(tabID, contentID) {
    if (oldSelected)
        oldSelected.className = "";
    if (oldTab)
        oldTab.className = "inactive";

    let newSelected = document.getElementById(tabID);
    oldSelected = newSelected;
    let newTab = document.getElementById(contentID);
    oldTab = newTab;

    newSelected.className = "selected";
    newTab.className = "active";
}