import { projects } from '@/data/projects';
import CustomImage from '@/components/shared/CustomImage';
import Link from 'next/link';
import React from 'react';

export default function Desktop() {

    return (
        <section className='flex flex-col gap-8'>
            {projects.map((project, index) => (

                <div
                    key={index}
                    className='w-full h-[20rem] px-4 flex justify-between items-center bg-[#1B1B1D] rounded-3xl'>

                    {/* Project Image */}
                    <CustomImage
                        loading='lazy'
                        src={project.src}
                        alt={project.alt}
                        width={120}
                        height={200}
                        className='h-[18rem] w-[32rem] rounded-xl' />

                    <div className='p-4 flex flex-col gap-4'>
                        {/* project discreption */}
                        <div className='flex flex-col gap-4'>

                            <div className='flex items-center justify-between'>
                                <h2 className='text-4xl'>
                                    {project.title}
                                </h2>

                                <h4 className={`text-sm capitalize text-green-500 
                                    ${project.status === "🧑‍💻 In Progress" ? 'animate-pulse' : ''}`}>
                                    {project.status}
                                </h4>

                            </div>

                            <div>
                                <p>
                                    {project.description}
                                </p>
                                <p className='capitalize text-zinc-500 cursor-pointer hover:text-white transition-all duration-300'>
                                    Built and deployed in - {project.date}
                                </p>
                            </div>
                        </div>

                        {/* project links */}
                        <div>
                            <h4 className='mb-2'>Project Links :
                            </h4>
                            <div className='flex gap-4 items-center'>

                                {/* github */}
                                {project?.github && (
                                    <Link
                                        href={project.github}
                                        target='_blank'
                                        className='hover:scale-125 transition-all ease-in'>

                                        <CustomImage
                                            src={`/github.svg`}
                                            width={26}
                                            height={26}
                                            alt='social media icon'
                                        />

                                    </Link>
                                )}

                                {/* preview */}
                                {project?.preview && (
                                    <Link
                                        href={project.preview}
                                        target='_blank'
                                        className='hover:scale-125 transition-all ease-in'>

                                        <CustomImage
                                            src={`/preview.svg`}
                                            width={26}
                                            height={26}
                                            alt='social media icon'
                                        />

                                    </Link>
                                )}

                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </section>
    );
}
