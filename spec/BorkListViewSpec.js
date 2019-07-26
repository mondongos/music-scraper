describe("Bork List Views", function() {
  let borkList
  let bork
  let bork2
  let borkListView

  beforeEach(function() {
    borkList = new BorkList()
    bork = new Bork("soundcloud.com", "JJ Cale")
    bork2 = new Bork("youtube.com", "Eric Clapton")
    borkList.addNew(bork)
    borkListView = new BorkListView(borkList)
  });

  it("should add a notelist object to the view", function() {
    borkList.addNew(bork2)
    expect(borkListView._borkList).toEqual(borkList)
  })

  it("should display bork list as html", function() {
    expect(borkListView.generateHTML()).toEqual("<div id=\"bork-container\"><div id=\"bork-title\">JJ Cale</div><div id=\"bork-url\">soundcloud.com</div></div>")
  })
})
