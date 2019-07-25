describe("A Boaglar", function() {
  let boaglar

  beforeEach(function() {
    boaglar = new Boaglar("https://youtube.com", "Youtube Artist")
  })

  it("should create a new boaglar", function() {
    expect(boaglar._link).toEqual("https://youtube.com", "Youtube Artist")
  })

  it("should return the boaglar", function() {
    expect(boaglar.getBoaglar()).toEqual("Youtube Artist - https://youtube.com")
  })
})
