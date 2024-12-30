import Link from 'next/link';
import { ContactForm } from './ContactForm';

export const EmailSection = () => {
    return (
        <section className='grid md:grid-cols-2 my-12 py-24 gap-4 relative g:px-16 md:px-8 px-5' id='contact'>
            <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent  rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4  -left-4 transform -translate-x-1/2 -translate-1/2'></div>
            <div className="z-10">
                <h1 className='text-xl font-bold text-white my-2'>Welcome</h1>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    I&apos;m currently looking for new opportuities, my in box always open.
                    Whether you have a question or just want to say hi, I&apos;ll try my best
                    to get back to you!
                </p>
                <div className='socials flex flex-row gap-2'>
                    <Link href='/'>Linkdin</Link>
                    <Link href='/'>Gitbub</Link>
                </div>
            </div>
            <div>
                <ContactForm />
            </div>
        </section>
    );
}
