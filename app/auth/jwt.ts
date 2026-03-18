import jwt from 'jsonwebtoken';
import { PAYLOAD } from './model/payload';
const SECRET = process.env.JWT_SECRET || "supersecret";

export function signToken(payload: PAYLOAD) {
    return jwt.sign(payload, SECRET, { expiresIn: "7d" })
}

export function verifyToken(token: string) {
    try {
        const data= jwt.verify(token, SECRET);
        console.log(data)
        return data;
    } catch {
        return null;
    }
}