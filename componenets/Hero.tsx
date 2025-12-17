import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-slate-900">
      <div
        aria-hidden
        className="hidden md:block absolute top-0 right-0 bottom-0 w-1/2 bg-[#2282C6]"
        style={{
          clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%)',
        }}
      />

   
      <div className="relative z-10 max-w-7xl mx-auto px-0 md:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-6 md:px-0">
        
          <div className="text-white px-6 md:px-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Safe. Smart. With Van Lock Security,
            </h1>
            <p className="mt-6 text-lg text-slate-200 max-w-xl">
              We specialize in advanced{' '}
              <span className="text-blue-200 font-semibold">Van Lock Security</span>{' '}
              solutions designed to safeguard your vehicle, tools, and livelihood. With expertly installed locks and anti-theft systems, we keep your van secure—day and night.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 bg-[#2282C6] hover:bg-blue-800 text-white rounded-md font-semibold shadow cursor-pointer">
                Get a Quote
              </button>
              <button className="px-6 py-3 bg-white text-slate-900 rounded-md font-semibold shadow cursor-pointer">
                Our Services
              </button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 sm:w-96 lg:w-[520px]">

              <div
                aria-hidden
                className="absolute right-0 bottom-0 -translate-y-6 lg:translate-y-0 w-[140%] h-full bg-[#2282C6] rounded-tl-2xl md:hidden"
                style={{ clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 0 100%)' }}
              />

      
              <div className="relative z-20 w-full">
                <Image
                  src="/heroVan.png"
                  alt="Van"
                  width={1200}
                  height={800}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  );
}