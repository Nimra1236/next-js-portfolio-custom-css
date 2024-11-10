import React from 'react'

import { FaGithub } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";

import { BsTwitterX } from "react-icons/bs";
import Link from 'next/link';
import { cn } from '@/lib/utils';


const Navbar = ({className}:{className?:string}) => {

const socials = [

{
  link:"https://www.linkedin.com/in/nimra-ali-5b55111b2/",

  label:"LinkedIn",

  Icon: FaLinkedin,
},

{
  link:"https://github.com/nimraali",

  label:"GitHub",

  Icon:FaGithub,
},


{
  link:"https://x.com/Namra1236",

  label:"Twitter",

  Icon: BsTwitterX,
},
]

  return (
    <nav className= {cn("py-10 flex justify-between items-center", className)}>

      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-purple-500 -rotate-2">Nimra Ali 👩🏻</h1>

      <div className="flex items-center gap-5">
        {socials.map((social,index)=>{

            const Icon = social.Icon

          return <Link href={social.link} 

          key = {index} 

          aria-label={social.label}>

            <Icon className="w-5 h-5 hover:scale-125 transition-all"/>
            
             </Link>
        })}
      </div>

  </nav>
  )
}

export default Navbar