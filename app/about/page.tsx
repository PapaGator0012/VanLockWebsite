import About from '@/componenets/About'
import Difference from '@/componenets/Differnce'
import SnipSection from '@/componenets/SnipSection'
import Testimonials from '@/componenets/Testimonial'
import React from 'react'

const page = () => {
  return (
    <div>
      <>
        <section className="flex flex-col items-center justify-center text-center 
   bg-[linear-gradient(-25deg,#2B75AC_0%,#1E4058_60%)] text-white px-6 pt-30 pb-30">
    <h1 className='text-[3em] font-bold'>About us</h1>
   </section>


      <About></About>
      <Testimonials></Testimonials>
      <Difference></Difference>
      <SnipSection></SnipSection>
      </>
    </div>
  )
}

export default page
