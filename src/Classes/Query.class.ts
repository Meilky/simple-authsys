import {
	CQuery,
	IexecuteQueryData,
	IQuery,
	OexecuteQuery,
	OQuery,
} from "../Intefaces/Query.interface";
import MySQL from "mysql";

export const Query: CQuery = class Query implements IQuery {
	private con: MySQL.Connection;
	private err: MySQL.MysqlError | null;
	private result: any;
	private fields: MySQL.FieldInfo[] | null;

	constructor(private options: OQuery) {
		this.con = MySQL.createConnection(this.options);
		this.err = null;
		this.fields = null;
	}

	executeQuery(options: OexecuteQuery): Promise<MySQL.MysqlError | IexecuteQueryData> {
		return new Promise((resolve, reject) => {
			this.con.connect((err) => {
				if (err) {
					this.err = err;
					return reject(err);
				}
				this.con.query(options.query, options.data, (err, result, fields) => {
					if (err) {
						this.err = err;
						return reject(err);
					} else {
						this.result = result;
						this.fields = <MySQL.FieldInfo[]>fields;
						return resolve({ result: result, fields: <MySQL.FieldInfo[]>fields });
					}
				});
			});
		});
	}

	destroyCon(): void {
		this.con.destroy();
	}

	getFields(): MySQL.FieldInfo[] | null {
		return this.fields;
	}

	getErr(): MySQL.MysqlError | null {
		return this.err;
	}

	getResult(): any {
		return this.result;
	}
};
