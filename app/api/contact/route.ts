import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_HoNpT38m_3UPBk6FbwYEQPwXXMbTXdtpv");

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Send the email using Resend
    await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>", 
      to: "dhruvmoreutk@gmail.com", 
      subject: `New Portfolio Message from ${name}`,
      replyTo: email,
      html: `
        <h3>You have a new message from your portfolio website!</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

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
