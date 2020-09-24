import { Algorithm } from "jsonwebtoken";

//--------- constructor() related

export interface TokenConstructor {
	new (options: TokenOptions): TokenInterface;
}

export interface TokenInterface {
	options: TokenOptions;
	authOptions: TokenAuthOptions;

	auth(options: TokenOptions): Promise<Object>;
	create(options: TokenAuthOptions): Promise<Object>;
}

export interface TokenOptions {
	algorithm?: Array<Algorithm>;
}

export const TokenDefault: TokenOptions = {
	algorithm: ["RS256"],
};

//----------- auth() related

export type Type = "accessToken" | "refreshToken";

export interface TokenAuthOptions extends TokenOptions {
	type: Type;
	token: string;
}

export const TokenAuthDefault: TokenAuthOptions = {
	algorithm: ["RS256"],
	type: "accessToken",
	token: "na",
};
