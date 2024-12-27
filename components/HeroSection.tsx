'use client'
import Image from 'next/image'
import React from 'react'
import TextAnimation from './TeaxtAnimation'
const HeroSection = () => {
    return (
        <section className='py-16 lg:px-16 md:px-8 px-5 mt-7'>
            <div className='container mx-auto px-4 lg:px-0'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
                    <div className='col-span-7 flex flex-col justify-center'>
                        <h1 className='text-white text-3xl lg:text-6xl sm:text-5xl font-extralight'>
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-600 font-medium'>
                                Hello I&apos;m {" "}
                            </span>
                            <br />
                            <TextAnimation />
                        </h1>
                        <p className='mt-6 text-[#ADB7BE] text-base sm:text-lg lg:text-xl'>
                            Explore a World of Possibilities Through Vikas Kushwah&apos;s Portfolio.
                        </p>
                        <p className='mt-2 mb-8 text-[#ADB7BE] text-base sm:text-lg lg:text-xl'>
                            Welcome to my portfolio! Here, I invite you to explore a glimpse of my creative journey. As a passionate web developer,
                            Each project reflects my dedication to excellence. Join me on a visual journey, where every pixel tells a story of inspiration and creativity.
                        </p>
                        <div className='md:space-x-4 '>
                            <button className='px-6 py-3 rounded-xl bg-white text-black sm:w-auto w-full bg-gradient-to-br from-blue-500 via-red-500 hover:bg-slate-800'>
                                Hire me
                            </button>
                            <button className='px-1 py-1 rounded-xl mt-3  bg-transparent hover:text-black sm:w-auto w-full bg-gradient-to-br from-blue-500 to-red-500'>
                                <span className='block bg-black hover:bg-slate-800 rounded-xl px-5 py-2 text-white'>Download CV</span>
                            </button> 
                        </div>
                    </div>
                    <div className='col-span-5 flex justify-center items-center'>
                        <div className='relative flex justify-center items-center rounded-full shadow-lg shadow-red-500/50 bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]'>
                            <Image
                                src='/me.png'
                                alt='developer images'
                                layout='responsive'
                                objectFit='cover'
                                className='rounded-full'
                                width={50}
                                height={50}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;
