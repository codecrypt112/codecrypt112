import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!email.includes("@") || message.length < 10) {
      return NextResponse.json(
        { error: "Invalid input" },
        { status: 400 }
      );
    }

    // In production, integrate with Resend, SendGrid, or similar
    // For now, log the contact and return success
    console.log(`[Contact] ${name} <${email}>: ${message}`);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
