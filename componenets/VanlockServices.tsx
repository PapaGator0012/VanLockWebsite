"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function VanLockServices() {
  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-20 text-center bg-white ">
     
      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-[#2282C6] font-semibold uppercase tracking-widest text-sm mb-2">
          Our Services
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          Our Van Lock Services
        </h2>
        <p className="text-black text-base md:text-lg">
          Van Lock London offers smart, reliable security systems tailored specifically for
          commercial and personal vans.
        </p>
      </div>

 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
    
        <div className="relative rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow cursor-pointer">
          <Image
            src="/loack3.png"
            alt="Van Dead Locks"
            width={400}
            height={400}
            className="w-full h-90 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0  p-3">
            <h3 className="font-semibold text-white text-sm sm:text-base">
              Van Dead Locks
            </h3>
          </div>
        </div>

     
        <div className="relative rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow cursor-pointer">
          <Image
            src="/loack1.png"
            alt="Van Hook Locks"
            width={400}
            height={400}
            className="w-full h-90 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0  p-3">
            <h3 className="font-semibold text-white text-sm sm:text-base">
              Van Hook Locks
            </h3>
          </div>
        </div>

       
        <div className="relative rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow cursor-pointer">
          <Image
            src="/loack2.png"
            alt="Van Slam Locks"
            width={400}
            height={400}
            className="w-full h-90 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0  p-3">
            <h3 className="font-semibold text-white text-sm sm:text-base">
              Van Slam Locks
            </h3>
          </div>
        </div>

       
        <div className="relative rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow cursor-pointer">
          <Image
            src="/loack4.png"
            alt="Van Statement Lock"
            width={600}
            height={400}
            className="w-full h-90 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0  p-3">
            <h3 className="font-semibold text-white text-sm sm:text-base">
              Van Statement Lock
            </h3>
          </div>
        </div>
      </div>

      
      <div>
        <button className="bg-[#2282C6] hover:bg-[#18517a] text-white font-semibold px-8 py-4 rounded-lg shadow-md flex items-center gap-2 mx-auto transition-all cursor-pointer">
          View All Services <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}
