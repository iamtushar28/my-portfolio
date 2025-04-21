import React, { useEffect, useState } from 'react';
import Desktop from "@/components/projects/Desktop";
import Mobile from "@/components/projects/Mobile";

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth < 800);
  };

  useEffect(() => {
    checkIsMobile(); // Check initially
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return ( 
    <section className="pt-32 px-5 sm:px-10">
      <div className="flex flex-col max-w-7xl mx-auto">
        {/* title */}
        <h2 className='text-3xl md:text-6xl md:mb-4 mb-2'>Turning ideas into <br /> <span className='capitalize text-[#f33f3f] font-semibold'>products</span> that matter.</h2>
        {isMobile ? <Mobile /> : <Desktop />}
      </div>
    </section>
  );
}
 
export default Projects;
