import MySQL from "mysql";

export interface CQuery {
	new (options: OQuery): IQuery;
}

export interface IQuery {
	executeQuery(options: OexecuteQuery): Promise<IexecuteQueryData>;
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
	data: Array<string | number | null>;
}

export interface IexecuteQueryData {
	result: any;
	fields: MySQL.FieldInfo[];
}
