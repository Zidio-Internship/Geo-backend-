import { Request,Response} from "express";
import {signup,login,generateOTP} from '../utils/hepler'


export async function signupUser (req:Request,res:Response) {
	try{
		const {email,fullname} = req.body;
		const otp = generateOTP()
		await signup(email,fullname,otp)

		return res.status(201).json({message:'success'})
	}catch(e:any){
		console.log(e)
		return res.status(500).json({message:'Something went wrong.'})
	}

}

export async function loginUser(req: Request, res: Response) {
	try {
		const { email} = req.body;
		const details = await login(email);


	} catch (e:any) {
		console.log(e);
		return res.status(500).json({ message: 'Something went wrong.' });
	}
}



export async function verifyOTP (req:Request,res:Response) {
	const {otp,email} = req.body
	const details = await login(email)
	if (otp ==details.otp){
		details.otp = null
		return res.status(200).json({message:'success'})
	}

	return res.status(404).json({message:'invalid code'})


}
