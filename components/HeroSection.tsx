'use client'
import Image from 'next/image'
import React from 'react'
import TextAnimation from './TeaxtAnimation'

const HeroSection = () => {

    return (
        <section>
             
            <div className='grid grid-cols-1 lg:grid-cols-12'>
          
                <div className='col-span-7 place-self-center text-center
                sm:text-left'>
                    <h1 className='text-white mb-4 text-4xl lg:text-6xl
                     sm:text-5xl font-extralight'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r
                     from-purple-400 to-pink-600 font-medium'> Hello I'm {" "}</span>
                     <br />
                        <TextAnimation/>
                    </h1>
                    <p className='mb-6 text-[#ADB7BE] text-base sm:text-lg lg:text-xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quibusdam minus laborum placeat enim, sunt dolore beatae repellat quae. Non, accusantium voluptatem? Iste cumque provident, distinctio nam eius reiciendis consectetur.
                    </p>
                    <div>
                        <button className='px-6 py-3 rounded-xl bg-white 
                        text-black sm:w-fit mr-4 w-full bg-gradient-to-br 
                         from-blue-500 via-pink-500 hover:bg-slate-800 '>Hire me </button>
                        <button className='px-1 py-1 rounded-xl 
                         hover:text-black sm:w-fit w-full mt-3 bg-gradient-to-br 
                          from-blue-500 to-pink-500'>
                            <span className='block bg-black hover:bg-slate-800 
                            rounded-xl px-5 py-2 text-white'>Download CV</span></button>
                    </div>
                </div>
                <div className='col-span-5 mt-4 lg:mt-0 place-self-center'>
                    <div className='rounded-full relative bg-[#181818] mx-auto w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]'>
                        <Image
                            src={'/hero.png'}
                            alt='developer images'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={300}
                            height={300} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;
