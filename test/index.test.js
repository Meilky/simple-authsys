const authsys = require("../lib");

test("Run without the setup sequence", () => {
	try {
		authsys.auth();
	} catch (error) {
		expect(error).toBeInstanceOf(Error);
		expect(error).toHaveProperty("message", "Something bad happened!");
	}
});
