import { signToken, verifyToken } from "../jwt";
import { PAYLOAD } from "../model/payload";


export async function POST(request:PAYLOAD){
    const body: PAYLOAD = request;
   
   const token: string= signToken({email:body.email, password: body.password});
   return Response.json(token);
}


export async function GET(){
    return Response.json(verifyToken('ksflasfjksadf')); 
}
