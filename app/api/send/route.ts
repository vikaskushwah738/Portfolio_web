import { EmailTemplate } from '@/components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const  Emailfrom=process.env.FROM_EMAIL as string;

export async function POST() {
  if (!resend || !Emailfrom) {
    return NextResponse.json({
      message: "we did not send email"
    });
  }
  try {
    const data = await resend.emails.send({
      from:Emailfrom,
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
