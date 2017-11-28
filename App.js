function hideOtherPages(item) {
    document.getElementById(item).style.display = "none";
}
function removeSelectedClassFromOthers(item) {
    document.getElementById(item).className = "";
}
function mainPage() {
    ["example-page", "contact-page", "another-page"].map(function (item) {
        hideOtherPages(item);
    });
    ["example-tile", "contact-tile", "another-tile"].map(function (item) {
        removeSelectedClassFromOthers(item);
    });
    document.getElementById('main-tile').className = 'selected';
    document.getElementById("main-page").style.display = "block";
}
function examplePage() {
    ["main-page", "contact-page", "another-page"].map(function (item) {
        hideOtherPages(item);
    });
    ["main-tile", "contact-tile", "another-tile"].map(function (item) {
        removeSelectedClassFromOthers(item);
    });
    document.getElementById('example-tile').className = 'selected';
    document.getElementById("example-page").style.display = "block";
}
function anotherPage() {
    ["main-page", "contact-page", "example-page"].map(function (item) {
        hideOtherPages(item);
    });
    ["main-tile", "contact-tile", "example-tile"].map(function (item) {
        removeSelectedClassFromOthers(item);
    });
    document.getElementById('another-tile').className = 'selected';
    document.getElementById("another-page").style.display = "block";
}
function contactPage() {
    ["main-page", "example-page", "another-page"].map(function (item) {
        hideOtherPages(item);
    });
    ["main-tile", "example-tile", "another-tile"].map(function (item) {
        removeSelectedClassFromOthers(item);
    });
    document.getElementById('contact-tile').className = 'selected';
    document.getElementById("contact-page").style.display = "block";
}
for (i = 1; i <= 35; i++)
{
    document.getElementById("example-page").innerHTML +='<div class="letter-tile" onclick="anotherPage()"><img class="letter-img" src="'+i+'.png" /></div>';
}