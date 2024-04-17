import Link from 'next/link';
import * as React from 'react';
interface EmailTemplateProps {
    firstName: string;
}
export const EmailTemplate = ({ firstName }: EmailTemplateProps) => {
    return (
        <section className='grid md:grid-cols-2 my-12 py-24 gap-4'>
            <div> 
                <h1 className='text-xl font-bold text-white my-2'>Welcome, {firstName}!</h1>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    I'm currently looking for new opportuities, my in box always open.
                    Whether you have a question or just want to say hi, I'll try my best
                    to get back to you!
                </p>
                <div className='socials flex flex-row gap-2'>
                    <Link href='/'>Linkdin</Link>
                    <Link href='/'>Gitbub</Link>
                </div>
            </div>
             <div>
                <form className='flex flex-col gap-4'>
                    <label htmlFor='email' className='text-white'>Your email</label>
                    <input
                     type="email"
                     id='email'
                     required
                     placeholder='jdjbdjb@gmail.com'
                     />
                </form>
             </div>
        </section>
    );
}
