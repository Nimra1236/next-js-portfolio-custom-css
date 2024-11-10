"use client"
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { SiReact } from 'react-icons/si'
import { FaBootstrap } from "react-icons/fa";

const Skills = () => {

  const skills = [  // Fixed variable name from "Skills" to "skills"
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Next.js",
      Icon: RiNextjsFill,
    },
    {
      text: "Tailwind CSS",
      Icon: RiTailwindCssFill,
    },
    {
      text: "Javascript",
      Icon: IoLogoJavascript,
    },
    {
      text: "Python",
      Icon: SiPython,
    },
    {
      text: "HTML",
      Icon: FaHtml5,
    },
    {
      text: "CSS",
      Icon: FaCss3Alt,
    },
    {
      text: "Typescript",
      Icon: SiTypescript,
    },
    {
      text: "Bootstrap",
      Icon: FaBootstrap,
    },
  ];  

  return (

    <div className="max-w-5xl mx-auto px-8">

      <Title text="Skills 👩🏻‍💻📓" className='flex flex-col items-center justify-center -rotate-6' />
      <HoverEffect items={skills} />
    </div>
  )
}

export default Skills