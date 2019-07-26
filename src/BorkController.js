function BorkController(borkList) {
  this._borkList = null
  this._htmlList = ""
}

BorkController.prototype.createBorkList = function() {
  this._borkList = new BorkList()
}

BorkController.prototype.addBorkToList = function(link, title) {
  let newBork = this._borkList.createBork(link, title)
  this._borkList.addNew(newBork)
}

BorkController.prototype.createView = function(borkList) {
  let newView = new BorkListView(this._borkList)
  this._htmlList = newView.generateHTML()
}

BorkController.prototype.pushBork = function() {
  console.log(document.getElementById('app'))
  document.getElementById('app').innerHTML = this._htmlList
}
