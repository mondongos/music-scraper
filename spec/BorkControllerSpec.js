describe("Bork Controller", function() {
  let borkList
  let controller

  beforeEach(function() {
    controller = new BorkController()
  })

  it("creates a borklist and adds to a bork controller", function() {
    controller.createBorkList()
    expect(controller._borkList).toEqual(new BorkList())
  })

  it("adds a bork to a list", function() {
    controller.createBorkList()
    controller.addBorkToList("spotify.com", "ZZ Top")
    expect(controller._borkList.viewBorks()).toEqual("ZZ Top - spotify.com")
  })

  it("generates an HTML view", function() {
    controller.createBorkList()
    controller.addBorkToList("spotify.com", "ZZ Top")
    controller.createView(borkList)
    expect(controller._htmlList).toEqual("<div id=\"bork-container\"><div id=\"bork-title\">ZZ Top</div><div id=\"bork-url\">spotify.com</div></div>")
  })

  it("should push HTML to app", function() {
    controller.pushBork()
    expect(document.getElementById('app').innerHTML).toEqual("<div id=\"bork-container\"><div id=\"bork-title\">ZZ Top</div><div id=\"bork-url\">spotify.com</div></div>")
  })
})
