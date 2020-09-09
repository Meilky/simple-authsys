class AuthSys {
	n: string = "";
	setup(name: string): void {
		this.n = name;
	}

	getName(): string {
		return this.n;
	}
}

export { AuthSys };
