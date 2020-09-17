interface AuthTokenConstructor {
	new (options: AuthTokenOptions): AuthTokenInterface;
}

interface AuthTokenInterface {
	authenticate(): Promise<object>;

	getData(): object | null;

	getError(): object | null;
}

interface AuthTokenOptions {
	token: string;
	type: string;
}

export { AuthTokenOptions, AuthTokenInterface, AuthTokenConstructor };
