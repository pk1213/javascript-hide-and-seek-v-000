function getFirstSelector(selector) {

return  document.querySelector(selector);
}

function nestedTarget() {

return document.getElementById('nested').querySelector('div.target');


}

function increaseRankBy(n) {
var lst = document.querySelectorAll('.ranked-list');
for (var i=0; i<lst.length; i++) {
  var child = lst[i].children;

  for (var j=0; j<child.length; j++) {

    child[j].innerHTML = parseInt(child[j].innerHTML) + n;
}
}
}

function deepestChild() {

var dc = document.getElementById('grand-node')
var newnode = dc.children[0];
while (newnode) {

dc = newnode;
newnode = dc.children[0];

}

return dc;

}
