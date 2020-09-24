import {
	TokenOptions,
	TokenDefault,
	TokenInterface,
	TokenConstructor,
	TokenAuthOptions,
	TokenAuthDefault,
} from "../Intefaces/Token.interfaces";

export const Token: TokenConstructor = class Token implements TokenInterface {
	readonly options: TokenOptions;
	authOptions: TokenAuthOptions;

	constructor(options: TokenOptions) {
		this.options = { ...TokenDefault, ...options };
		this.authOptions = TokenAuthDefault;
	}

	auth(options: TokenAuthOptions): Promise<Object> {
		return new Promise((resolve, reject) => {
			this.authOptions = { ...this.authOptions, ...this.options, ...options };
		});
	}

	create(): Promise<Object> {
		return new Promise((resolve, reject) => {});
	}
};
