import { NextFunction, Response, Request } from "express";
import { SetupOptions } from "./Intefaces/index.interfaces";

let opt: SetupOptions;

export const setup = (options: SetupOptions): void => {
	opt = options;
};

export const auth = (req: Request, res: Response, next: NextFunction): void => {};
