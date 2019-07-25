function Boaglar(link, title) {
  this._link = link
  this._title = title
}

Boaglar.prototype.getBoaglar = function () {
  return this._title + " - " + this._link
};
