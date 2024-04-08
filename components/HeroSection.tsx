'use client'
import Image from 'next/image'
import React from 'react'
import TextAnimation from './TeaxtAnimation'

const HeroSection = () => {

    return (
        <section className='py-16'>
            <div className='container mx-auto px-4 lg:px-0'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
                    <div className='col-span-7 flex flex-col justify-center'>
                        <h1 className='text-white text-4xl lg:text-6xl sm:text-5xl font-extralight'>
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-600 font-medium'>
                                Hello I'm {" "}
                            </span>
                            <br />
                            <TextAnimation />
                        </h1>
                        <p className='mt-6 mb-8 text-[#ADB7BE] text-base sm:text-lg lg:text-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quibusdam minus laborum placeat enim, sunt dolore beatae repellat quae. Non, accusantium voluptatem? Iste cumque provident, distinctio nam eius reiciendis consectetur.
                        </p>
                        <div className='space-x-4'>
                            <button className='px-6 py-3  rounded-xl bg-white text-black sm:w-auto w-full bg-gradient-to-br from-blue-500 via-red-500 hover:bg-slate-800'>
                                Hire me
                            </button>
                            <button className='px-1 py-1 rounded-xl mt-3  bg-transparent hover:text-black sm:w-auto w-full bg-gradient-to-br from-blue-500 to-red-500'>
                                <span className='block bg-black hover:bg-slate-800 rounded-xl px-5 py-2 text-white'>Download CV</span>
                            </button>
                        </div>
                    </div>
                    <div className='col-span-5 flex justify-center items-center'>
                        <div className='relative rounded-full shadow-lg shadow-red-500/50 bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]'>
                            <Image
                                src='/me.png'
                                alt='developer images'
                                layout='fill'
                                objectFit='cover'
                                className='rounded-full'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;
