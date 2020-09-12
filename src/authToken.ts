import jwt, { Secret } from "jsonwebtoken";

interface AuthTokenConstructor {
	new (options: AuthTokenOptions): AuthTokenInterface;
}

interface AuthTokenInterface {
	tok: string;
	data: object | null;
	error: object | null;

	authenticate(): Promise<object>;

	getData(): object | null;

	getError(): object | null;
}

interface AuthTokenOptions {
	token: string;
	type: string;
}

const AuthToken: AuthTokenConstructor = class AuthToken implements AuthTokenInterface {
	tok: string;
	data: object | null;
	error: object | null;

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

			jwt.verify(this.tok, key.toString(), { algorithms: ["RS256"] }, (err, decoded) => {
				if (err) {
					this.error = err;
					return rejects(new Error(err.message));
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