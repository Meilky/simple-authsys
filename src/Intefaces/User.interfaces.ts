export interface CUser {
	new (options: OUser): IUser;
}

export interface IUser {
	loadUser(): Promise<IUserData>;
	getOptions(): IUserData;
	setOptions(options: OUser): boolean;
}

export interface OUser<T = string> {
	username?: string | null;
	email: T;
	password: T;
	firstName?: string | null;
	lastName?: string | null;
	birthday?: Date | null;
	creationDate?: Date | null;
}

export interface IUserData<T = string> extends OUser<T> {
	id?: number | null;
}

export const DUser: IUserData<null> = {
	id: null,
	username: null,
	email: null,
	password: null,
	firstName: null,
	lastName: null,
	birthday: null,
	creationDate: null,
};
