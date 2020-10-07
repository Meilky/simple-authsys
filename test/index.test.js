const authsys = require("../lib");
const express = require("express");
const http = require("http");
const app = express();

const port = 3000;

app.get("/test", (req, res) => {});

http.createServer(app).listen(port, () => {
	describe("Setup function", () => {
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
	});
});
