import { NextFunction, Response, Request } from "express";
import { SetupOptions } from "./intefaces/index.interfaces";
import { AuthToken } from "./authToken";
import { AuthTokenOptions } from "./intefaces/authToken.interfaces";

let opt: SetupOptions;

const setup = (options: SetupOptions): void => {
	opt = options;
};

const auth = (req: Request, res: Response, next: NextFunction): void => {
	if (typeof opt === "undefined") {
		const err = new Error(
			"You can't use the authentification if you doesn't run the setup sequence, go to https://github.com/Meilky/simple-authsys/blob/master/README.md to resolve your error.",
		);

		req.body.authentification.error = err;
		res.status(403).json({ error: err });
		throw err;
	} else {
		const accessToken = req.body.accessToken;

		if (typeof accessToken === "string") {
			const options: AuthTokenOptions = { token: accessToken, type: "accessToken" };
			const authentification = new AuthToken(options);
			authentification
				.authenticate()
				.then((data) => {
					req.body.authTokenData = data;
					next();
				})
				.catch((err) => {
					res.status(403).json({ authentification: { error: err } });
				});
		} else {
			res.status(403).json({
				authentification: {
					error: new Error("The type of the accessToken is not a string"),
				},
			});
		}
	}
};

export { setup, auth };
