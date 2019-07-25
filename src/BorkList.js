function BorkList() {
  this._borks = []
}

BorkList.prototype.addNew = function(bork) {
  this._borks.push({title: bork.getBorkTitle(), link: bork.getBorkLink()})
}
