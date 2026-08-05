const { hello } = require("../src/index");

test("returns greeting", () => {
    expect(hello("John")).toBe("Hello John");
})