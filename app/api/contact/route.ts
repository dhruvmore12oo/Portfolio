import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Since this is a template frontend and we do not have Resend API keys provided by the user,
    // we will simulate the email sending delay and return a success response.
    // In production, this would be replaced with actual email logic like:
    // await resend.emails.send({ ... })

    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Basic mock success
    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error: ", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
