import { NextFunction, Response, Request } from "express";
import { SetupOptions } from "./intefaces/index.interfaces";

let opt: SetupOptions;

const setup = (options: SetupOptions): void => {
	opt = options;
};

const auth = (req: Request, res: Response, next: NextFunction): void => {
	if (typeof opt === "undefined") {
		throw new Error(
			"You can't use the authentification if you doesn't run the setup sequence, go to https://github.com/Meilky/simple-authsys/blob/master/README.md to resolve your error.",
		);
	} else {
		const user = req.body.user;
		const password = req.body.password;
	}
};

export { setup, auth };
