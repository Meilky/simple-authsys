import { CUser, IUser, DUser, OUser, IUserData } from "../Intefaces/User.interfaces";
import {} from "./Query.class";

export const User: CUser = class User implements IUser {
	private options: IUserData;

	constructor(options: OUser) {
		this.options = { ...DUser, ...options };
	}

	loadUser(): Promise<IUserData> {
		return new Promise((resolve, reject) => {});
	}

	getOptions(): IUserData {
		return this.options;
	}

	setOptions(options: OUser): boolean {
		this.options = { ...this.options, ...options };
		return true;
	}
};
