"use client";

import Image from "next/image";
import React from "react";

const Difference = () => {
  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-10">
   
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Van Lock Difference
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                No Generic Solutions – Just Customised Solutions
              </h3>
              <p>
                Risks vary in every van. To this end, we conduct detailed
                evaluations to suggest the appropriate products, including slam
                locks and GPS trackers.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                Install with Your Convenience
              </h3>
              <p>
                You will not need to come up and see us since we are a certified
                mobile service, and therefore the service will be brought to you
                wherever you are.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                Round-the-Clock Monitoring and Real-Time Alert
              </h3>
              <p>
                Our connected systems provide protection when you’re not
                present. You receive an immediate call on your phone if unusual
                activity is spotted.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                Easy Upgrades and Repairs
              </h3>
              <p>
                Need to change your Van Lock Security system or repair damages
                due to wear? We’re just a call away — fast response, zero stress.
              </p>
            </div>
          </div>
        </div>

       
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-[280px] sm:h-[380px] md:h-[420px] rounded-2xl overflow-hidden">
            <Image
              src="/ppl.png"
              alt="VanLock security staff"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Difference;
