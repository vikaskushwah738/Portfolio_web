'use client'
import Image from 'next/image';
import TAB_DATA from "@/data/data.js"
import React, { useState, useTransition } from 'react';
import TabButton from './TabButton';

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending ,startTrasition] = useTransition();
  const handleTabChange = (id:any) => {
    console.log("Selected tab:", id);
     startTrasition(() => {
      setTab(id);
    });
  };
  const selectedTab = TAB_DATA.find((t) => t.id === tab);
  return (
    <section className='text-white'>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-4 xl:gap-16 sm:py-16">
        <div>
          <Image src='/Designer.png' alt='about' width={500} height={500} />
        </div>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-3xl font-bold mb-4'>About Me</h2>
          <p className="text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, architecto consequuntur esse, alias illo
            harum autem est eaque vero voluptatibus cupiditate quia laudantium ducimus blanditiis? Fugit, magni quae
            dolores quo suscipit voluptas earum id quaerat dicta, quidem doloribus quisquam natus distinctio vero. Vel
            quis nam autem voluptas ducimus vel quia nesciunt corporis soluta,
            eius, inventore praesentium similique? Voluptatem quas maxime modi incidunt voluptates voluptatum ipsam officia
          </p>
          <div className='flex flex-row mt-8'>
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
            <TabButton selectTab={() => handleTabChange("certification")} active={tab === "certification"}>Certification</TabButton>
          </div>
          <div className="mt-8">
          {selectedTab && selectedTab.content }
          console.log("Selected tab content:", selectedTab);
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
