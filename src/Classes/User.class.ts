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

//Class related

interface CUser {
	new (options: OUser): IUser;
}

interface IUser {
	loadUser(): Promise<IUserData>;
	getOptions(): IUserData;
	setOptions(options: OUser): boolean;
}

interface OUser<T = string> {
	username?: string | null;
	email: T;
	password: T;
	firstName?: string | null;
	lastName?: string | null;
	birthday?: Date | null;
	creationDate?: Date | null;
}

interface IUserData<T = string> extends OUser<T> {
	id?: number | null;
}

const DUser: IUserData<null> = {
	id: null,
	username: null,
	email: null,
	password: null,
	firstName: null,
	lastName: null,
	birthday: null,
	creationDate: null,
};
