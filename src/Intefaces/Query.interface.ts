import MySQL, { MysqlError } from "mysql";

export interface CQuery {
	new (options: OQuery): IQuery;
}

export interface IQuery {
	executeQuery(options: OexecuteQuery): Promise<MySQL.MysqlError | IexecuteQueryData>;
	destroyCon(): void;
	getFields(): MySQL.FieldInfo[] | null;
	getErr(): MySQL.MysqlError | null;
	getResult(): any;
}

export interface OQuery {
	username: string;
	password: string;
	host: string;
	db: string;
}

export interface OexecuteQuery {
	query: string;
	data: string[];
}

export interface IexecuteQueryData {
	result: any;
	fields: MySQL.FieldInfo[];
}
