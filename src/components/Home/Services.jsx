import { services } from '@/data/services';
import Image from 'next/image';

const Services = () => {
  return (
    <section className='max-w-7xl mx-auto pt-14 pb-20 flex flex-col items-center px-5 sm:px-10'>
      <h2 className='text-2xl font-bold tracking-[0.72px] mb-4'>My Services</h2>
      <p className='text-white opacity-30 text-sm tracking-[0.42px] mb-12'>
        Services I offer to my clients
      </p>
      <div className='grid grid-flow-row md:grid-cols-2 xl:grid-cols-3 w-[85%] md:w-11/12 gap-[55px]'>
        {services.map(({ id, title, tools }) => (
          <div
            key={id}
            className='text-center py-[50px] px-[65.5px] bg-white bg-opacity-[4%] border border-transparent duration-300 hover:border-[#FFFFFF1A] rounded-[6px] hover:bg-primary hover:bg-opacity-40 transition-all ease-out'>
            <h4 className='mb-4 font-bold'>{title}</h4>
            <p className='text-white text-opacity-40 text-sm mb-[26px]'>
              Tools used to achieve this
            </p>
            <div className='flex flex-wrap gap-[18px] justify-center'>
              {tools.map(({ id, name, icon }) => (
                <div key={id} className='flex gap-[6px] items-center'>
                  <div>
                    <Image
                      width={18}
                      height={18}
                      src={icon}
                      alt={name}
                      layout='responsive'
                    />
                  </div>
                  <p className='text-white text-opacity-70 text-sm'>{name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
