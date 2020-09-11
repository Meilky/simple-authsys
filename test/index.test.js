const { authsys } = require("../lib");

test("return the good string", () => {
	expect(authsys({ name: "joe" })).toBe("Hello joe");
});
