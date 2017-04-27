var Triangle = require("../lib/triangle.js");

describe("area Triangle", function() {
  it("debe calcular el area de un triángulo correctamente", function() {
    var a = new Triangle({ width: 20, height:20 });
    var result = a.area();
     result.should.equal(200);
  })
});