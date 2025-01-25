import CustomImage from '@/components/shared/CustomImage';
import Link from 'next/link';
import Image from 'next/image';
import Tushar from '@/styles/tushar28.jpg'

const About = () => {
  return (
    <section className='px-5 sm:px-10 mx-auto pt-[166px]'>
      <div className='grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto'>
        <div>
          <Image src={Tushar} alt='tushar' className='rounded-xl' />
        </div>

        <div className='animate-fade animate-duration-[2000ms] animate-ease-in'>
          <h3 className='text-[#f33f3f] mb-[14px] font-semibold'>Who am I?</h3>
          <h3 className='mb-2 text-[28px] font-bold tracking-[0.84px]'>
            I’m Tushar Suryawanshi, a Frontend Developer
          </h3>
          <p className='leading-[150%] tracking-[0.48px] lg:w-[90%] mb-5'>
            As a passionate frontend developer, I specialize in creating exceptional web experiences that combine clean code with beautiful user interfaces. With expertise in React.js, Next.js, and modern frontend technologies, I transform design concepts into responsive, performant, and user-friendly applications.
            <br />
            <br />
            I have a strong foundation in JavaScript and modern web development practices, allowing me to build scalable and maintainable applications. My approach combines technical excellence with an eye for detail, ensuring that every project not only functions flawlessly but also provides an engaging user experience. I’m particularly skilled in component-based architecture, state management, and optimizing web performance.
          </p>
          <div className='flex gap-3 mb-10'>
            <div className='flex items-center'>
              <CustomImage width={16.2} height={16.2} src={`/map.svg`} alt='map pin' />
              <span className='md:text-sm text-xs ml-[6px] text-zinc-400 capitalize'>satara, maharashtra</span>
            </div>
            <div className='flex items-center'>
              <CustomImage
                width={16.2}
                height={16.2}
                src={`/mail.svg`}
                alt='mail icon'
              />
              <a
                href='mailto:iamtushar2830@gmail.com'
                className='underline text-sm ml-[6px] text-zinc-400 hover:text-white transition-all duration-300'>
                iamtushar2830@gmail.com
              </a>
            </div>
          </div>
          <div className='flex gap-3 items-center'>
            <Link
              href='/tushar.pdf'  // Point to the PDF file in the public folder
              target='_blank'
              className='px-6 py-[17px] flex border border-[#f33f3f] rounded-lg hover:bg-[#f33f3f] transition-all ease-in w-max'
            >
              <CustomImage
                width={20}
                height={20}
                src='/resume.svg'
                alt='resume icon'
                className='mr-3'
              />
              View resume
            </Link>

            <hr className='opacity-30 w-[50px] hidden sm:block' />
            <ul className='gap-4 hidden sm:flex'>
              <Link
                href={'https://www.linkedin.com/in/tushar-suryawanshi-599806299/'}
                target='_blank'
                className='ease-in transition-all hover:scale-110'>
                <li className='tracking-[0.42px] text-sm'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='group'
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'>
                    <path
                      id='Vector'
                      d='M14.8189 0H1.18111C0.867861 0 0.567441 0.124438 0.34594 0.34594C0.124438 0.567441 0 0.867861 0 1.18111V14.8189C0 15.1321 0.124438 15.4326 0.34594 15.6541C0.567441 15.8756 0.867861 16 1.18111 16H14.8189C15.1321 16 15.4326 15.8756 15.6541 15.6541C15.8756 15.4326 16 15.1321 16 14.8189V1.18111C16 0.867861 15.8756 0.567441 15.6541 0.34594C15.4326 0.124438 15.1321 0 14.8189 0ZM4.76889 13.63H2.36333V5.98889H4.76889V13.63ZM3.56445 4.93C3.29158 4.92846 3.02528 4.84613 2.79916 4.69339C2.57304 4.54065 2.39723 4.32435 2.29392 4.07179C2.19061 3.81923 2.16443 3.54173 2.21869 3.2743C2.27294 3.00688 2.4052 2.76152 2.59877 2.56919C2.79234 2.37686 3.03854 2.24618 3.30631 2.19364C3.57408 2.1411 3.85141 2.16906 4.1033 2.27399C4.35519 2.37892 4.57036 2.55611 4.72164 2.78321C4.87293 3.01031 4.95355 3.27713 4.95333 3.55C4.95591 3.73269 4.92167 3.91403 4.85267 4.0832C4.78368 4.25238 4.68132 4.40593 4.55171 4.53471C4.42211 4.66349 4.2679 4.76486 4.09828 4.83277C3.92867 4.90068 3.74711 4.93375 3.56445 4.93ZM13.6356 13.6367H11.2311V9.46222C11.2311 8.23111 10.7078 7.85111 10.0322 7.85111C9.31889 7.85111 8.61889 8.38889 8.61889 9.49333V13.6367H6.21333V5.99445H8.52667V7.05333H8.55778C8.79 6.58333 9.60333 5.78 10.8444 5.78C12.1867 5.78 13.6367 6.57667 13.6367 8.91L13.6356 13.6367Z'
                      className='fill-white'
                    />
                  </svg>
                </li>
              </Link>
              <Link
                href={'https://github.com/iamtushar28'}
                target='_blank'
                className='ease-in transition-all hover:scale-110'>
                <li className='tracking-[0.42px] text-sm'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='group'
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'>
                    <path
                      d='M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z'
                      className='fill-white'
                    />
                  </svg>
                </li>
              </Link>

            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
