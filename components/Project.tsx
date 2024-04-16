import React from 'react'
import {PROJECT_DATA} from '@/data/data'
import ProjectCard from './ProjectCard'
const Project = () => {
  return (
    <> 
    <h1 className='text-center pt-4 text-4xl text-white pb-12 '>My Projects</h1>
    <div className='flex flex-wrap gap-14 '>
    {PROJECT_DATA.map((items, index) =>(
                 <ProjectCard key={index} {...items}/>
    ))}
    </div>
   
   
    </>
  )
}

export default Project