import { ArrowRight, Mail, Phone } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div>
<>

<section className="flex flex-col items-center justify-center text-center 
   bg-[linear-gradient(-25deg,#2B75AC_0%,#1E4058_60%)] text-white px-6 pt-30 pb-30">
    <h1 className='text-[3em] font-bold'>Contact us</h1>
   </section>




<section className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h4 className="text-[#2282C6] font-semibold text-sm uppercase tracking-wide mb-3">
            Contact us 
          </h4>

          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
            Get in Touch With Us
          </h2>
         <p className='text-black mb-5'>Have questions or need a quote? Our team is ready to assist you with any inquiries related to our services. Whether it’s a new project or general support, feel free to reach out. We’re just a call or message away!</p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-[#2282C6] p-3 rounded-xl text-white shadow-md">
                <Phone className="w-6 h-6" />
              </div>
              <p className="text-lg text-gray-800 font-medium">
                +92 312 068 3400
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#2282C6] p-3 rounded-xl text-white shadow-md">
                <Mail className="w-6 h-6" />
              </div>
              <p className="text-lg text-gray-800 font-medium">
                visal@firnas.tech
              </p>
            </div>
          </div>
        </div>

         <div className="bg-[#E9F7FE] rounded-2xl p-8 shadow-md border border-gray-100">
          <h3 className="text-black font-semibold text-sm uppercase tracking-wide mb-6">
            Message Me
          </h3>

          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-1xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white text-black"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-1xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white text-black"
              />
            </div>

            <textarea
              rows={4}
              placeholder="Message"
              className="w-full px-4 py-3 rounded-1xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white text-black"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#2282C6] hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-1xl flex justify-center items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>


</>
    </div>
  )
}

export default page
