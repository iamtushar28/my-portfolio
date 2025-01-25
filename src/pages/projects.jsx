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
        <div className="text-white text-lg font-bold tracking-[0.54px] mb-4">
          Project Showcase
        </div>
        {isMobile ? <Mobile /> : <Desktop />}
      </div>
    </section>
  );
}
 
export default Projects;
