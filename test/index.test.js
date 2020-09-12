const authsys = require("../lib");

test("Run without the setup sequence", () => {
	try {
		authsys.auth();
	} catch (error) {
		expect(error).toBeInstanceOf(Error);
		expect(error).toHaveProperty(
			"message",
			"You can't use the authentification if you doesn't run the setup sequence, go to https://github.com/Meilky/simple-authsys/blob/master/README.md to resolve your error.",
		);
	}
});
