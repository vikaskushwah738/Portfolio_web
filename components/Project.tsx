import React from 'react'
import { PROJECT_DATA } from '@/data/data'
import ProjectCard from './ProjectCard'
const Project = () => {
  return (
    <section className='lg:px-16 md:px-8 px-5' id='project'>
      <h1 className='text-center pt-4 text-4xl text-white pb-12 '>My Projects</h1>
      <div className='flex flex-wrap gap-14 justify-center'>
        {PROJECT_DATA.map((items, index) => (
          <ProjectCard key={index} {...items} />
        ))}
      </div>
    </section >
  )
}

export default Project