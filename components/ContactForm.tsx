"use client"
import { useState } from "react"
import toast from "react-hot-toast";
import { PhoneInput } from "react-international-phone";

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const toastId = toast.loading("Please wait...");
        try {
            const res = await fetch(`https://vikas-me.vercel.app/api/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, phone, email, message }),
            });

            if (res.ok) {
                toast.success("Successfully submitted! We’ll contact you soon.", { id: toastId });
                setName("");
                setPhone("");
                setEmail("");
                setMessage("");

            } else {
                const errorData = await res.json();
                toast.error(errorData.message || "Submission failed.", { id: toastId });
            }
        } catch (error) {
            console.log('somethink went wrong', error)
            toast.error("Network error. Please try again later.", { id: toastId });
        }
    };
    return (
        <form className='flex flex-col' onSubmit={handleSubmit}>
            <div className='mb-6'>
                <label
                    htmlFor='fname'
                    className='mb-2 text-white block text-sm font-medium'>
                    Name
                </label>
                <input
                    type="text"
                    id='fname'
                    name='fname'
                    required
                    value={name}
                    onChange={(e) => setName(name)}
                    placeholder='Enter your name'
                    className='bg-[#18191E] broder broder-[#33353F] rounded-md placeholder-[#9CA2A9] text-gray-100 text-sm block p-2.5 w-full md:w-3/4  '
                />
            </div>
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
                    value={email}
                    onChange={(e) => setEmail(email)}
                    placeholder='jdjbdjb@gmail.com'
                    className='bg-[#18191E] broder broder-[#33353F] rounded-md placeholder-[#9CA2A9] text-gray-100 text-sm block p-2.5 w-full md:w-3/4  '
                />
            </div>
            <div className='mb-6'>
                <label
                    htmlFor='subject'
                    className='mb-2 text-white block text-sm font-medium'>
                    Phone Number
                </label>
                <PhoneInput
                    defaultCountry="in"
                    value={phone}
                    inputStyle={{ backgroundColor: "#F3F4F6", border: "none", fontSize: "16px", paddingLeft: "6px" }}
                    onChange={(phone) => setPhone(phone)}
                    placeholder="Phone Number"
                    className="w-full border border-gray-300 rounded-xl focus:outline-none bg-gray-100"
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
                    value={message}
                    onChange={(e) => setMessage(message)}
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
