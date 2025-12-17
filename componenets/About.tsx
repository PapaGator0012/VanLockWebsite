"use client";

import Image from "next/image";
import React from "react";
import { ArrowRight } from "lucide-react";
const About = () => {
  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center gap-10">
       
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[420px] rounded-2xl overflow-hidden">
            <Image
              src="/manvan.png"
              alt="VanLock professional"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-sm font-semibold text-[#2282C6] uppercase mb-3">
            About Us
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Approach to Smart Security
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            A permanent solution to protection requires a combination of
            strategies, which include, among others, innovative locking systems,
            powerful hardware,{" "}
            <a
              href="#"
              className="text-[#2282C6] underline hover:text-blue-700 transition"
            >
              intelligent monitoring
            </a>
            , and frequent maintenance. Van Lock Security in London uses the
            latest technology to protect every vehicle with assurance, and we
            learn from real-world threats.
          </p>

          <button className="bg-[#2282C6] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition">
            Read More <ArrowRight size={20} className="inline-block ml-1 cursor-pointer" />
          </button>
        </div>

        
      </div>
    </section>
  );
};

export default About;
