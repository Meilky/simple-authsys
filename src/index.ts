import { NextFunction, Response, Request } from "express";
import { ISetupOptions, DSetupOptions } from "./Intefaces/index.interfaces";

let opts: ISetupOptions;
let setupSequenceExecuted: boolean = false;

export const setup = (options: ISetupOptions): void => {
	opts = { ...DSetupOptions, ...options };
	setupSequenceExecuted = true;
};

export const auth = (req: Request, res: Response, next: NextFunction): void => {
	const username: string = req.body.username;
	const email: string = req.body.email;
	const password: string = req.body.password;

	let err: boolean | string = false;

	if (!setupSequenceExecuted) {
		console.error("You can't authenticate if the setup sequence as not been executed.");
		err = "You can't authenticate if the setup sequence as not been executed.";
	} else if (!username) {
		err = "You need to specify a username.";
	} else if (!email) {
		err = "You need to specify a email.";
	} else if (!password) {
		err = "You need to specify a email.";
	}

	if (err) {
		req.body.auth = {
			error: err,
			username: username,
			email: email,
		};

		if (opts.sendError) {
			res.status(403).json({
				error: err,
			});
		} else next();
	}
};
