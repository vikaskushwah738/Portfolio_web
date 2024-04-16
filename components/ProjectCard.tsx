import Image from 'next/image'
import React from 'react'
interface projectCard {
  title: string,
  description: string,
  img: string,
  tag: string
}
const ProjectCard = ({ title, description, img, tag }: projectCard) => {
  return (
    <>
      <div className='w-[250px] border-2 border-purple-500 rounded-xl  bg-[#181818] '>
        <div className='h-52 w-full md:h-56 rounded-t-xl relative group'
          style={{ background: `url(${img})`, backgroundSize: "cover" }}>
        </div>
        <div className='text-white px-5'>
        <p className='text-2xl pt-5 text-center'>{title}</p>
        <p className='text-lg pt-3 pb-5'>{description}</p>
        </div>
      </div>
    </>
  )
}

export default ProjectCard