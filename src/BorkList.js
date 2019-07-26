function BorkList() {
  this._borks = []
}

BorkList.prototype.addNew = function(bork) {
  this._borks.push({
    title: bork.getBorkTitle(),
    link: bork.getBorkLink()
  })
}

BorkList.prototype.viewBorks = function() {
  let text = ""
  for (var i = 0; i < this._borks.length; i++) {
    text += this._borks[i].title + " - " + this._borks[i].link
  }
  return text
}

BorkList.prototype.createBork = function(link, title) {
  return new Bork(link, title)
}
