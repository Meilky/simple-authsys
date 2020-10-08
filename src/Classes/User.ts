interface UserConstructor {
	new (options: UserOptions): UserInterface;
}

interface UserInterface {
	loadUser(): Promise<object>;

	getData(): object | null;

	getError(): object | null;
}

interface UserOptions {
	email: string;
	username?: string;
}

const UserOptionsDefault: UserOptions = {
	email: "Joe@gmail.com",
	username: "Joe",
};

const User: UserConstructor = class User implements UserInterface {
	protected opts: UserOptions;
	protected error: object | null;
	protected data: object | null;

	constructor(options: UserOptions) {
		this.opts = { ...UserOptionsDefault, ...options };
		this.error = null;
		this.data = null;
	}

	loadUser(): Promise<object> {
		return new Promise((resolve, rejects) => {});
	}

	getData(): object | null {
		return this.data;
	}

	getError(): object | null {
		return this.error;
	}
};
