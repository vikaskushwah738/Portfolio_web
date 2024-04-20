import Link from 'next/link';

export const EmailSection = () => {
    return (
        <section className='grid md:grid-cols-2 my-12 py-24 gap-4 relative'>
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
                <form className='flex flex-col'>
                    <div className='mb-6'>
                        <label
                            htmlFor='email'
                            className='mb-2 text-white block text-sm font-medium'>
                            Your E-mail
                        </label>
                        <input
                            type="email"
                            id='email'
                            required
                            placeholder='jdjbdjb@gmail.com'
                            className='bg-[#18191E] broder broder-[#33353F] rounded-md placeholder-[#9CA2A9] text-gray-100 text-sm block p-2.5 w-full md:w-3/4  '
                        />
                    </div>
                    <div className='mb-6'>
                        <label
                            htmlFor='subject'
                            className='mb-2 text-white block text-sm font-medium'>
                            Subject
                        </label>
                        <input
                            type="text"
                            id='subject'
                            required
                            placeholder='Just say hi'
                            className='bg-[#18191E] broder broder-[#33353F] rounded-md placeholder-[#9CA2A9] text-gray-100 text-sm block p-2.5 w-full md:w-3/4  '
                        />
                    </div>
                    <div>
                        <label
                            htmlFor='message'
                            className='mb-2 text-white text-sm block font-medium'>
                            Massage
                        </label>
                        <textarea
                            id='message'
                            required
                            placeholder='Message'
                            className='bg-[#18191E] broder broder-[#33353F] rounded-md placeholder-[#9CA2A9] text-gray-100 text-sm block p-2.5 w-full md:w-3/4  '
                        />
                    </div>
                    <button
                    type='submit'
                    className='bg-purple-500 rounded-lg md:mx-28  mx-auto hover:bg-purple-600 text-white font-medium py-2 w-1/3 mt-6'
                    >Submit</button>
                </form>
            </div>
        </section>
    );
}
