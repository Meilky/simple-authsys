export interface ISetupOptions extends IDSetupOptions {
	accessTokenKey: string;
	refreshTokenKey: string;
}

interface ISQLType {
	username: string;
	password: string;
	db: string;
	host: string;
}

interface IDSetupOptions {
	sendError?: boolean;
	storageType: "json" | ISQLType;
}

export const DSetupOptions: IDSetupOptions = {
	sendError: true,
	storageType: "json",
};
