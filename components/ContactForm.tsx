

export const ContactForm = () => {
  return (
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
  )
}
