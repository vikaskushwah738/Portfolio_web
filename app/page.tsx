import AboutSection from "@/components/AboutSection";
import { EmailSection } from "@/components/EmailSection";
import HeroSection from "@/components/HeroSection";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
          <HeroSection/>
          <AboutSection/>
          <Project/>
          <EmailSection />
    </main>
  );
}

// import { NextResponse } from "next/server";
// import { prisma } from "@/prisma/prisma";

// export async function POST(req: Request) {
//   try {
//     const { name, email, subject, message } = await req.json();

//     // Basic validation
//     if (!name || !email || !subject || !message) {
//       return NextResponse.json(
//         { error: "Name, email, subject, and message are mandatory to submit the form." },
//         { status: 400 }
//       );
//     }

//     // Store data in the database
//     const response = await prisma.clientData.create({
//       data: {
//         name,
//         email,
//         subject,
//         message,
//       },
//     });

//     return NextResponse.json(response);
//   } catch (error) {
//     console.error("Something went wrong:", error);
//     return NextResponse.json(
//       { error: "Something went wrong, please try again later." },
//       { status: 500 }
//     );
//   } finally {
//     await prisma.$disconnect();
//   }
// }

