// "use client"
import { PAYLOAD } from "../auth/model/payload";

export async function login(data: PAYLOAD) {
    const res = await fetch('/auth/login', {
        method: "POST",
        body: JSON.stringify(data),
    });
    
    if (!res.ok) {
        throw new Error(`Login failed: ${res.statusText}`);
    }
    
    const result = await res.json();
    
    return result.token;
}


export async function userDetails(token:string) {

    const response = await fetch('/auth/login', {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    return response.json();
}
