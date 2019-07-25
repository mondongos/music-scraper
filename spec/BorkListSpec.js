describe("Bork Lists", function() {
  let borkList
  let bork

  beforeEach(function() {
    borkList = new BorkList()
    bork = new Bork("facebook.com", "Facebook")
  });

  describe("when creating a bork", function() {
    it("should add a bork to the bork list", function() {
      borkList.addNew(bork)
      expect(borkList._borks.length).toEqual(1)
    });

    it("should have a title", function() {
      borkList.addNew(bork)
      expect(borkList._borks[0].title).toEqual("Facebook")
    })

    it("should have a link", function() {
      borkList.addNew(bork)
      expect(borkList._borks[0].link).toEqual("facebook.com")
    })
  })

  describe("when reading a note", function() {
    // to be completed
  })

  describe("when editing a note", function() {
    // to be completed
  })

  describe("when deleting a note", function() {
    // to be completed
  })
})
