"use client"
import Image from 'next/image';
import TAB_DATA from "@/data/data.js"
import React, { useState, useTransition } from 'react';
import TabButton from './TabButton';
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTrasition] = useTransition();
  const handleTabChange = (id: string) => {
    startTrasition(() => {
      setTab(id);
    });
  };
  const selectedTab = TAB_DATA.find((t) => t.id === tab);
  return (
    <section className='text-white lg:px-16 md:px-8 px-5'>
      <div className=" lg:flex gap-8 items-center py-4 xl:gap-16 sm:py-16">
        <div className='lg:w-1/2 flex justify-center items-center'>
          <Image src='/Designer.png' alt='about' width={500} height={500} />
        </div>
        <div className='lg:w-1/2 mt-4 md:mt-0 text-left flex flex-col h-full lg:pt-0 md:pt-8 pt-5 '>
          <h2 className='text-3xl font-bold mb-4'>About Me</h2>
          <p className="text-base md:text-lg">
            Welcome to my corner of the digital world! I am Vikas Kushwah, a web developer with a
            passion for creativity and innovation. With I&apos;ve honed my skills in React, Nextjs, HTML, CSS, Javasript.
            Whether it&apos;s designing captivating interfaces, crafting compelling content, or delving into
            the intricacies of  web developer, I thrive on pushing boundaries and delivering excellence.
            Beyond work, Let&apos;s connect and explore the possibilities together!
          </p>
          <div className='flex flex-row mt-8'>
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
            <TabButton selectTab={() => handleTabChange("cert")} active={tab === "cert"}>Certification</TabButton>
          </div>
          <div className="mt-8">
            {selectedTab && selectedTab.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
