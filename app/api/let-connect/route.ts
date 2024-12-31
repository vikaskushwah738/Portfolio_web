import { NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    // Basic validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Name, email, subject, and message are mandatory to submit the form." },
        { status: 400 }
      );
    }

    // Store data in the database
    const response = await prisma.clientData.create({
      data: {
        name,
        email,
        phone,
        message,
      },
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error("Something went wrong:", error);
    return NextResponse.json(
      { error: "Something went wrong, please try again later." },
      { status: 500 }
    );
  } 
  
}