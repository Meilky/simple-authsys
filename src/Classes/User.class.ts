import { OexecuteQuery, OQuery } from "../Intefaces/Query.interface";
import { CUser, IUser, DUser, OUser } from "../Intefaces/User.interfaces";
import { Query } from "./Query.class";

export const User: CUser = class User implements IUser {
	private options: OUser;

	constructor(options: OUser) {
		this.options = { ...DUser, ...options };
	}

	loadUser(options: OQuery): Promise<OUser> {
		return new Promise((resolve, reject) => {
			const q = new Query(options);
			let qOptions: OexecuteQuery = { query: "", data: [] };

			if (this.options.id) {
				qOptions.query = "SELECT * FROM TUser WHERE id=?;";
				qOptions.data = [Number.parseInt(this.options.id)];
			} else if (this.options.email) {
				qOptions.query = "SELECT * FROM TUser WHERE email=?;";
				qOptions.data = [this.options.email.toString()];
			} else if (this.options.username) {
				qOptions.query = "SELECT * FROM TUser WHERE username=?;";
				qOptions.data = [this.options.username.toString()];
			} else {
				return reject(
					new Error("You need to set an id or a email or a username to load a user."),
				);
			}

			q.executeQuery(qOptions)
				.then((data) => {
					this.options = data.result[0];
				})
				.reject((err) => {
					return reject(err);
				});
		});
	}

	getOptions(): OUser {
		return this.options;
	}

	setOptions(options: OUser): boolean {
		this.options = { ...this.options, ...options };
		return true;
	}
};
