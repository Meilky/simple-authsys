interface MainOptions {
	name: string;
}

const authsys = (options: MainOptions): string => {
	return "Hello " + options.name;
};

const setup = (): void => {};

export { authsys, setup };
