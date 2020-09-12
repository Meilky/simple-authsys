const authsys = require("../lib");

test("Run without the setup sequence", () => {
	try {
		authsys.auth();
	} catch (error) {
		expect(error).toBeInstanceOf(Error);
		expect(error).toHaveProperty(
			"message",
			"The process.env.TokenKey isn't supose to be null, got to https://github.com/Meilky/simple-authsys/blob/master/README.md to resolve this error",
		);
	}
});
