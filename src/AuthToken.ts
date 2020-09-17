import jwt from "jsonwebtoken";
import {
	AuthTokenConstructor,
	AuthTokenInterface,
	AuthTokenOptions,
} from "./intefaces/authToken.interfaces";

const AuthToken: AuthTokenConstructor = class AuthToken implements AuthTokenInterface {
	private tok: string;
	private data: object | null;
	private error: object | null;

	constructor(options: AuthTokenOptions) {
		this.tok = options.token;
		this.data = null;
		this.error = null;
	}

	authenticate(): Promise<object> {
		return new Promise((resolve, rejects) => {
			const key = process.env.TokenKey;

			if (typeof key === "undefined") {
				return rejects(
					new Error(
						"The process.env.TokenKey isn't supose to be null, got to https://github.com/Meilky/simple-authsys/blob/master/README.md to resolve this error",
					),
				);
			}

			this.verifyToken(key)
				.then((data) => {
					return resolve(data);
				})
				.catch((err) => {
					return rejects(err);
				});
		});
	}

	private verifyToken(key: string): Promise<object> {
		return new Promise((resolve, rejects) => {
			jwt.verify(this.tok, key.toString(), { algorithms: ["RS256"] }, (err, decoded) => {
				if (err) {
					this.error = err;
					return rejects(err);
				} else {
					if (typeof decoded === "undefined") {
						return rejects(new Error("No data found in the token"));
					}
					this.data = decoded;
					return resolve(decoded);
				}
			});
		});
	}

	getData() {
		return this.data;
	}

	getError() {
		return this.error;
	}
};

export { AuthToken };
