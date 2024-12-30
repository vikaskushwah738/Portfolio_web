import { NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma";

export async function POST(req: Request){
    try{
        const {name, email , subject , message}= await req.json();
        if(!name || !email || !subject || !message){
            return NextResponse.json({error : 'email and name is mondory for submit form '},
                {status : 400}
            )
        }
        const response= await prisma.clientData.create({
            data:{
                name, 
                email, 
                subject, 
                message
            }
        })
        return NextResponse.json(response);
    } catch (error){
        console.log('somethink went wrong', error)
        return NextResponse.json({error : "somethink went wrong, try again later"}, {status : 500})
    } finally {
        await prisma.$disconnect();
      }
}



