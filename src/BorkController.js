function BorkController() {
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

BorkController.prototype.createView = function() {
  let newView = new BorkListView(this._borkList)
  this._htmlList += newView.generateHTML()
}

BorkController.prototype.pushBork = function() {
  document.getElementById('app').innerHTML = this._htmlList
}

function addToPage(singleBork) {
  document.
}
