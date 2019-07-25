function Bork(link, title) {
  this._link = link
  this._title = title
}

Bork.prototype.getBorkLink = function () {
  return this._link
};

Bork.prototype.getBorkTitle = function() {
  return this._title
}
