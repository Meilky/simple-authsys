import { OQuery } from "./Query.interface";

export interface CUser {
	new (options: OUser): IUser;
}

export interface IUser {
	loadUser(options: OQuery): Promise<OUser>;
	getOptions(): OUser;
	setOptions(options: OUser): boolean;
}

export interface OUser<T = string> {
	id?: number | null;
	username?: string | null;
	email?: string | null;
	password: T;
	firstName?: string | null;
	lastName?: string | null;
	birthday?: Date | null;
	creationDate?: Date | null;
}

export const DUser: OUser<null> = {
	id: null,
	username: null,
	email: null,
	password: null,
	firstName: null,
	lastName: null,
	birthday: null,
	creationDate: null,
};
