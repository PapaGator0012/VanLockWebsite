import { useState } from 'react';
import { Phone, Mail } from 'lucide-react';

export default function Contact() {
  

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div className="bg-gray-800 rounded-3xl p-9 md:p-1  text-white flex flex-col items-center justify-center order-2 lg:order-1">
          <div className="w-full max-w-md space-y-12">
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4 mt-4">
                <Phone className="w-8 h-8 text-[#2282C6]" />
              </div>
              <h3 className="text-lg text-gray-300 mb-2">Call Support Center 24/7</h3>
              <a href="tel:07446898025" className="text-2xl font-semibold hover:text-blue-400 transition">
                07446898025
              </a>
            </div>

           
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
                <Mail className="w-8 h-8 text-[#2282C6]" />
              </div>
              <h3 className="text-lg text-gray-300 mb-2">Write To Us</h3>
              <a href="mailto:info@vanlocksecurity.co.uk" className="text-xl font-semibold hover:text-blue-400 transition break-all">
                info@vanlocksecurity.co.uk
              </a>
            </div>

           
            <div className="flex justify-center mt-8">
              <div className="w-64 h-90 rounded-2xl overflow-hidden">
                <img 
                  src="/contact-info-img.png" 
                  alt="Support Agent"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-3xl p-8 md:p-12 order-1 lg:order-2">
          <div className="mb-8">
            <p className="text-[#2282C6] font-semibold text-sm uppercase tracking-wider mb-2">CONTACT US</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Get In Touch With Us</h2>
          </div>

          <div className="space-y-6">
           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                
                className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
               
                className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
              />
            </div>

           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
               
                className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
              />
              <input
                type="tel"
                name="phoneNo"
                placeholder="Phone No"
               
                className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
              />
            </div>

           
            <textarea
              name="message"
              placeholder="Message"
              
              rows={6}
              className="w-full px-6 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400 resize-none"
            />

         
            <button
              
              className="px-10 py-4 bg-[#2282C6] text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-200 shadow-lg hover:shadow-xl"
            >
              Submit Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}