"use client";

import { ArrowRight } from "lucide-react";

export default function SnipSection() {
  return (
    <section className="w-full py-20 px-6 md:px-16 bg-[linear-gradient(25deg,#2B75AC_0%,#1E4058_60%)] text-white flex flex-col md:flex-row items-center justify-between gap-10  shadow-lg">
   
      <div className="text-center md:text-left max-w-2xl">
        <p className="text-white tracking-widest text-sm font-bold uppercase mb-2">
          Estimate for your project
        </p>
        <h2 className="text-1xl md:text-5xl font-bold leading-tight">
          Ready to get an Estimate <br className="hidden sm:block" /> for your
          Project?
        </h2>
      </div>

      
      <div>
        <button className="bg-[#2282C6] hover:bg-blue-600 transition-colors text-white font-semibold px-8 py-4 rounded-lg shadow-md flex items-center gap-2 cursor-pointer">
          Get a Quote <ArrowRight size={20} className="ml-1" />
        </button>
      </div>
    </section>
  );
}
