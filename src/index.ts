class AuthSys {
	n: string = "";
	test: string = "just for test";
	setup(name: string): void {
		this.n = name;
	}

	getName(): string {
		return this.n;
	}
}

export { AuthSys };
