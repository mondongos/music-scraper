describe("Bork Lists", function() {
  let borkList
  let bork
  let bork2

  beforeEach(function() {
    borkList = new BorkList()
    bork = new Bork("soundcloud.com", "JJ Cale")
    bork2 = new Bork("youtube.com", "Eric Clapton")
  });

  describe("when creating a bork", function() {
    it("should add a bork to the bork list", function() {
      borkList.addNew(bork)
      expect(borkList._borks.length).toEqual(1)
    });

    it("should have a title", function() {
      borkList.addNew(bork)
      expect(borkList._borks[0].title).toEqual("JJ Cale")
    })

    it("should have a link", function() {
      borkList.addNew(bork)
      expect(borkList._borks[0].link).toEqual("soundcloud.com")
    })

    it("should create a new bork", function() {
      expect(borkList.createBork("soundcloud.com", "JJ Cale")).toEqual(bork)
    })

  })

  describe("when reading a bork", function() {
    it("should display list of objects", function() {
      borkList.addNew(bork)
      borkList.addNew(bork2)
      expect(borkList.viewBorks()).toEqual("JJ Cale - soundcloud.comEric Clapton - youtube.com")
    })
  })

  describe("when editing a bork", function() {
    // to be completed
  })

  describe("when deleting a bork", function() {
    // to be completed
  })
})
