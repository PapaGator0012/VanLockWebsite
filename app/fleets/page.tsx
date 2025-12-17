import React from 'react'

import Fleet from '@/componenets/Fleet'
import Image from 'next/image'
import { Star } from 'lucide-react';


const testimonials = [
  {
    name: "Daniel Morris",
    location: "West Yorkshire",
    image: "/daniel.jpg", 
    text: "VanLock transformed the way we secure our vans. Their team was prompt, professional, and the system works flawlessly. Highly recommended.",
  },
  {
    name: "Karen Doyle",
    location: "Surrey",
    image: "/karen.jpg", 
    text: "Reliable service from start to finish. The GPS tracking and smart lock system gave us peace of mind. VanLock truly understands van owners’ needs.",
  },
  {
    name: "Stephen Patel",
    location: "Greater Manchester",
    image: "/stephen.jpg",
    text: "Excellent experience with VanLock. Installation was quick, and support is always responsive. Our vans feel safer than ever. Very satisfied with their service.",
  },
];
const page = () => {

  return (
    <>
    
    <section className="flex flex-col items-center justify-center text-center 
   bg-[linear-gradient(-25deg,#2B75AC_0%,#1E4058_60%)] text-white px-6 pt-30 pb-30">
    <h1 className='text-[3em] font-bold'>Fleets</h1>
   </section>

    
    
    <Fleet></Fleet>
     <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-[#2282C6] font-semibold uppercase tracking-wider mb-2">
          Testimonials
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
          Why Van Owners Trust VanLock
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#e2f0fc] rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              <div className="flex gap-1 mb-4 justify-center sm:justify-start">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} className="fill-[#2282C6] text-[#2282C6]" />
                ))}
              </div>

              <p className="text-gray-700 text-base leading-relaxed mb-6">
                {t.text}
              </p>

              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default page
