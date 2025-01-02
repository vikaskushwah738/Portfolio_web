import { prisma } from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!email || !phone || !name || !message) {
      return NextResponse.json(
        { error: "Email, phone number, and name are required" },
        { status: 400 }
      );
    }

    const project = await prisma.clientData.create({
      data: { 
        name, 
        email, 
        phone, 
        message 
  },
    });

    console.log("Customer data saved successfully", name);
    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    console.error("Error in API:", error);
    return NextResponse.json(
      { message: "Something went wrong, try again later" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const clientinfo = await prisma.clientData.findMany();
    return NextResponse.json(clientinfo, { status: 200 });
  } catch (error) {
    console.error("Error fetching client info:", error);
    return NextResponse.json(
      { message: "Could not fetch client info" },
      { status: 500 }
    );
  }
}
