import { signToken, verifyToken } from "../jwt";
import { PAYLOAD } from "../model/payload";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    const body: PAYLOAD = await request.json();

    const token: string = signToken({ email: body.email, password: body.password });
    return Response.json({ token });
}


export async function GET(request: Request) {
    // Get header
    const authHeader = request.headers.get("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Extract token
    const token = authHeader.split(" ")[1];

    // Verify token
    const payload = verifyToken(token);

    if (!payload) {
        return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 });
    }

    return NextResponse.json({ user: payload });
}
