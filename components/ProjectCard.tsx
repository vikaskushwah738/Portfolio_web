import React from 'react'
import { FiEye } from "react-icons/fi";
import { FaCode } from "react-icons/fa";
import Link from 'next/link';
interface projectCard {
  title: string,
  // description: string,
  img: string,
  link:string
  
}
const ProjectCard = ({ img, title, link }: projectCard) => {
  return (
    <>
      <div className='w-[520px] border-2 relative border-purple-500 rounded-xl group bg-[#181818] '>
        <div className='h-52 w-full md:h-56 rounded-t-xl relative group'
          style={{ background: `url(${img})`, backgroundSize: "cover" }}>
           <div className='pt-10 items-center justify-center overlay gap-4 absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
                    <Link href={link} target='_blank' className='h-12 w-12 border-2 relative rounded-full border-[#ADB7BE] hover:border-white'>
                      <FiEye className='h-8 w-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#ADB7BE]  cursor-pointer hover:text-white' />
                    </Link>
                    <Link href={'/'} className='h-12 w-12 border-2 relative rounded-full border-[#ADB7BE] hover:border-white'>
                      <FaCode className='h-8 w-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#ADB7BE]  cursor-pointer hover:text-white'/>
                    </Link>
           </div>
        </div>
        <div className='text-white px-5'>
         <p className='text-2xl pt-5 text-center'>{title}</p> 
        {/* <p className='text-lg pt-3 pb-5'>{description}</p> */}
        </div>
      </div>
    </>
  ) 
}

export default ProjectCard