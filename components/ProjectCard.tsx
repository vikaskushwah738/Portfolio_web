import Image from 'next/image'
import React from 'react'

interface projectCard{
    title: string,
    description: string,
    img: string,
    tag: string
}

const ProjectCard = ({title, description,img, tag}:projectCard) => { 
   
  return (
    <>
        <div className='w-[250px] border-2 border-purple-500 rounded-xl px-7 bg-[#181818] '>
          <div className='flex justify-center items-center pt-2'>
          <Image src={img} alt='hello' height={220} width={150}/>
          </div>
            
            <p className='text-white text-2xl pt-5 text-center'>{title}</p>
            <p className='text-white text-lg pt-3 pb-5'>{description}</p>
        </div>
    </>
  )
}

export default ProjectCard