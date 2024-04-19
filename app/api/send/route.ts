// import { EmailTemplate } from '@/components/EmailTemplate';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);
// const  Emailfrom=process.env.FROM_EMAIL as string;
// export async function POST() {
//   try {
//     const data = await resend.emails.send({
//       from:Emailfrom,
//       to: ['delivered@resend.dev'],
//       subject: 'Hello world',
//       react: EmailTemplate({ firstName: 'John' }),
//     });

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error });
//   }
// }
