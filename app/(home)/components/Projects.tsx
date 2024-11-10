import { html } from 'framer-motion/client'
import { join } from 'path'
import React from 'react'
import { DiJavascript } from 'react-icons/di'
import { FaCss3Alt, FaHtml5 } from 'react-icons/fa'
import css from 'styled-jsx/css'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'


const Projects = () => {

  const projects = [
    {
      title: "Image Rotating Gallery",
      tech: [FaCss3Alt, FaHtml5, DiJavascript],
      cover: "/rotating-gallery.png",
      background: "bg-gray-500",
      link: "https://rotating-image-gallery-beta.vercel.app"
    },
    {
      title: "Resume Builder",
      tech: [FaCss3Alt, FaHtml5, DiJavascript],
      cover: "/resume-builder.png",
      background: "bg-pink-400",
      link: "https://hackathon-milestone-3-dynamic-resume.vercel.app"
    },
    {
      title: "Evento Clone",
      tech: [FaCss3Alt, FaHtml5],
      cover: "/evento.png",
      background: "bg-purple-300",
      link: "http://localhost:3000"
    },
    {
      title: "Netflix Clone",
      tech: [FaCss3Alt, FaHtml5],
      cover: "/netflix-clone.png",
      background: "bg-red-500",
      link: "http://localhost:3000"
    }
  ];

  return (
    <div className="py-10 p-5 sm:p-0">
      <Title text="Projects 🎨"
        className="flex flex-col items-center justify-center -rotate-6" />

      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {

          return (
            <Link href={project.link} key={index}>

              <div className={cn("p-5 rounded-md", project.background

              )}
              >

                <DirectionAwareHover
                  imageUrl={project.cover} className="w-full space-y-5
                cursor-pointer"
                >

                  <div className="space-y-5">

                    <h1 className="text-2xl font-bold">{project.title}</h1>

                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon className="w-8 h-8" key={index} />
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div >
  );
}

export default Projects;
