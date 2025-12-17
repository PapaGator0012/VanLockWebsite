import Image from 'next/image'
import React from 'react'

const Fleet = () => {
  return (
    <>
     <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-10">
       
            <div className="w-full lg:w-1/2 text-center lg:text-left">
            <span className='text-[#2282C6] uppercase font-bold'>Protect What Drives Your Business</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
               Fleet Security Solutions
              </h2>
    
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div>
                
                  <p>
                   Criminal attacks on fleets result in not only the theft of cargo and costly repair bills, but also the loss to your business in having that vehicle off the road.
                  </p>
                </div>
    
                <div>
                  
                  <p>
                   VanLock Security have been protecting commercial vehicles from theft and attack for over 20 years. Our award-winning range of vehicle specific kits includes everything from locking and shielding solutions, to cargo locks and alarms.
                  </p>
                </div>
    
                <div>
                
                  <p>
                 So whether your business is in logistics, construction, parcel delivery, utility, housing maintenance, pharmaceutical, food and beverage or retail, VanLock Security has the widest range of security products available on the market for all major manufacturers.
                  </p>
                </div>
    
               
              </div>
            </div>
    
           
            <div className="w-full lg:w-1/2">
              <div className="relative w-full h-[280px] sm:h-[380px] md:h-[420px] rounded-2xl overflow-hidden">
                <Image
                  src="/fleet1.jpeg"
                  alt="VanLock security staff"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
    
      <section className="bg-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center gap-10">
           
            <div className="w-full lg:w-1/2">
              <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[420px] rounded-2xl overflow-hidden">
                <Image
                  src="/fleet2.jpeg"
                  alt="VanLock professional"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <p className="text-sm font-semibold text-[#2282C6] uppercase mb-3">
               Smart Security Smart Investment
              </p>
    
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Benefits to Your Business
              </h2>
    
              <p className="text-gray-700 leading-relaxed mb-6">
               Investing in VanLock Security not only protects your fleet but also adds long-term value to your operations. From reducing theft and insurance costs to improving driver confidence and operational efficiency, our solutions are designed to secure your assets and support your business growth. Reliable security means fewer disruptions and more peace of mind.
              </p>
    
              
            </div>
    
            
          </div>
        </section>
    
    </>
  )
}

export default Fleet
