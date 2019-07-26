function BorkListView(borkList) {
this._borkList = borkList
}

BorkListView.prototype.generateHTML = function() {
  let tag = ""
  for (var i = 0; i < this._borkList._borks.length; ++i) {
    tag += "<div id=\"bork-container\"><div id=\"bork-title\">" + this._borkList._borks[i].title + "</div><div id=\"bork-url\">" + this._borkList._borks[i].link + "</div></div>"
  }
  return tag
}
