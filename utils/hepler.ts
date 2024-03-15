import { pool } from "../db/db";
import crypto from 'crypto';


export function queryAsync(sql: string, values: any[]): Promise<void> {
	return new Promise((resolve, reject) => {
		pool.getConnection((err, connection) => {
			if (err) {
				reject(err);
				return;
			}

			connection.query(sql, values, (error: any, results: any) => {
				connection.release();
				if (error) {
					reject(error);
				} else {
					resolve(results);
				}
			});
		});
	});
}

export function createVerificationToken(): string {
	return crypto.randomBytes(40).toString("hex");
}

export function generateRefreshToken(): string {
	return crypto.randomBytes(40).toString("hex");
}


export async function signup (email:string,name:string,otp:number):Promise<any> {
	const query = `INSERT INTO User_Details (email, name,otp) VALUES (?,?, ?)`;

	try {
		const result = await queryAsync(query, [email, name,otp]);
		return result
	} catch (error:any) {
		console.log(error)
		throw new Error(error)

	}

}


export async function login (email:string):Promise<any>{
	const query = `SELECT * FROM User_Details WHERE email = ?`
	try{
		const result = await queryAsync(query,[email])
		return result
	}catch(e:any){
		console.log(e)
		throw new Error(e)
	}


}

export function generateOTP ():number {
	return Math.floor(1000 + Math.random() * 9000);
}
