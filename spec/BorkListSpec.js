describe("Bork Lists", function() {
  let borkList
  let bork

  beforeEach(function() {
    borkList = new BorkList()
    bork = new Bork("facebook.com", "Facebook")
  });

  it("should add a bork to the bork list", function() {
    borkList.addNew(bork)
    expect(borkList._borks.length).toEqual(1)
  });

  it("should have a title", function() {
    borkList.addNew(bork)
    expect(borkList._borks[0].title).toEqual("Facebook")
  })

})
