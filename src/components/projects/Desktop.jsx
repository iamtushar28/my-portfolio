import Link from 'next/link';
import React from 'react';
import { projects } from '@/data/projects';
import CustomImage from '@/components/shared/CustomImage';
import { BsGithub } from "react-icons/bs"; //github icon
import { HiOutlineExternalLink } from "react-icons/hi"; //link icon
import { LuCalendar } from "react-icons/lu"; //calender icon

export default function Desktop() {

    return (
        <section className='flex flex-wrap justify-between gap-6 mt-6'>

            {projects.map((project, index) => (

                <div key={index} className='w-[23rem] h-fit pb-4 bg-zinc-800 rounded-2xl overflow-hidden'>

                    {/* project image */}
                    <CustomImage
                        loading='lazy'
                        src={project.src}
                        width={368}
                        height={224}
                        alt={project.alt}
                        className={`object-cover object-center`}
                    />

                    {/* project title */}
                    <h2 className='text-4xl px-4 pt-4'>{project.title}</h2>

                    <div className='flex justify-between items-center'>

                    {/* published date */}
                        <div className='px-4 flex items-center gap-2 mt-2 text-zinc-200'>
                            <LuCalendar />
                            <h4 className='capitalize'>{project.date}</h4>
                        </div>

                        {/* project status */}
                        <h4 className={`text-sm px-4 capitalize text-green-500 ${project.status === "🚀 New" ? 'animate-pulse' : 'hidden'}`}>
                            {project.status}
                        </h4>

                    </div>

                    {/* project discreption */}
                    <p className='p-4 text-zinc-300'>{project.description}</p>

                    {/* project links */}
                    <div className='flex justify-center gap-3'>

                        {/* github link */}
                        <Link
                            href={project.github}
                            target='_blank'
                            className='w-[10rem] py-2 text-white text-xl bg-[#24cfa6] rounded flex justify-center items-center gap-2 hover:bg-[#24cfa7e4] transition-all duration-200'>
                            <BsGithub />
                            Github
                        </Link>

                        {/* preview link */}
                        <Link
                            href={project.preview}
                            target='_blank'
                            className='w-[10rem] py-2 text-white text-xl bg-[#24cfa6] rounded flex justify-center items-center gap-2 hover:bg-[#24cfa7e4] transition-all duration-200'>
                            <HiOutlineExternalLink />
                            Preview
                        </Link>

                    </div>

                </div>

            ))}

        </section>
    );
}
