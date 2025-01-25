import { projects } from '@/data/projects';
import CustomImage from '@/components/shared/CustomImage';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Mobile() {
  const [showProject, setShowProject] = useState(0);
  const [showLoader, setShowLoader] = useState(true)

  const handleMouseClick = (index) => {
    setShowProject(showProject === index ? null : index);
  };

  return (
    <div className=' flex flex-col justify-center w-full gap-4 mt-6'>
      {projects.map((project, index) => (
        <div key={index} className=''>
          <div
            className={`flex flex-col bg-white bg-opacity-[8%] py-4 px-[13px] rounded-lg transition-all duration-500 ease-in-out overflow-hidden ${showProject === index ? 'max-h-[1000px]' : 'max-h-16'
              } `}>
            <div className='flex items-center justify-between'>
              <p className='tracking-[0.42px]'>{project.title}</p>

              <div className='flex gap-3 items-center'>

                {project?.preview && (
                  <Link href={project.preview} target='_blank'>
                    <CustomImage
                      src={`/preview.svg`}
                      width={20}
                      height={20}
                      alt='social media icon'
                      className='hover:scale-105 transition-all ease-in'
                    />
                  </Link>
                )}

                {project?.github && (
                  <Link
                    href={project.github}
                    target='_blank'
                    className='hover:scale-105 transition-all ease-in'>
                    <CustomImage
                      src={`/github.svg`}
                      width={20}
                      height={20}
                      alt='social media icon'
                    />
                  </Link>
                )}

                <CustomImage
                  src={`/toggle.svg`}
                  width={30}
                  height={30}
                  alt='toggle icon'
                  className='cursor-pointer transition-all ease-in hover:bg-white rounded-full'
                  onClick={() => handleMouseClick(index)}
                />
              </div>
            </div>
            <div className={`mt-[26px] relative`}>
              <div className='h-full z-10 absolute inset-0 w-full' style={{ display: showLoader ? "block" : "none" }}>
                <div role="status" className='grid place-content-center h-full'>
                  <svg aria-hidden="true" className="w-12 h-12 mr-2 text-[#f33f3f] animate-spin fill-[#f33f3f]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
              <CustomImage
                loading='lazy'
                src={project.src}
                width={672}
                height={501}
                alt={project.alt}
                className='bg-white bg-opacity-25 aspect-[1.34] object-cover object-center w-full overflow-hidden self-stretch grow max-md:max-w-full rounded-lg mb-4'
                onLoad={() => setShowLoader(false)}
              />
              <p className='text-sm tracking-[0.42px]'>{project.description}</p>
              <p className='capitalize text-zinc-500 cursor-pointer hover:text-white transition-all duration-300 text-sm'>
              Built and deployed in - {project.date}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
