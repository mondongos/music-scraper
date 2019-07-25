describe("A Bork", function() {
  let bork

  beforeEach(function() {
    bork = new Bork("https://youtube.com", "Youtube Artist")
  })

  it("should create a new bork", function() {
    expect(bork._link).toEqual("https://youtube.com", "Youtube Artist")
  })

  it("should return the bork link", function() {
    expect(bork.getBorkLink()).toEqual("https://youtube.com")
  })

  it("should return the bork title", function() {
    expect(bork.getBorkTitle()).toEqual("Youtube Artist")
  })
})
