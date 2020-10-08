const express = require("express");
const AuthSys = require("./../lib/");
const http = require("http");

const app = express();
const PORT = 3000;

AuthSys.setup({ storageType: "json", accessTokenKey: "akey", refreshTokenKey: "rkey" });

app.get("/", AuthSys.auth, (req, res) => {
	res.status(200).send({ success: "success" });
});

http.createServer(app).listen(PORT, () => {
	console.log("Server is running on port", PORT);
});
