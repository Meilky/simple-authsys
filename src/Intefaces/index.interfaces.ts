export interface SetupOptions {
	storageType: string;
	accessTokenKey: string;
	refreshTokenKey: string;
}

interface SQLType {
	username: string;
	password: string;
	db: string;
	host: string;
}
