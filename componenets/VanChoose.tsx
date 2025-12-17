"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ChooseYourVan() {
  const vans = [
    { id: 1, name: "Vauxhall", model: "Vivaro 2019", image: "/Vauxhall.png" },
    { id: 2, name: "Volkswagen", model: "Transporter T6.1 2020", image: "/Volkswagen.jpeg" },
    { id: 3, name: "Ford", model: "Transit 2014", image: "/Ford-Transit-2014.png" },
    { id: 4, name: "Ford", model: "Custom 2012–2023", image: "/Ford-Custom-2012.png" },
    { id: 5, name: "Renault", model: "Trafic 2014", image: "/Renault.jpeg" },
    { id: 6, name: "Ford", model: "Custom 2023>", image: "/Ford-Custom-2023.png" },
    { id: 7, name: "Talento", model: "2014>", image: "/Fiat-Talento-2014.png" },
    { id: 8, name: "Relay", model: "2008>", image: "/Citoren_Relay.jpeg" },
  ];

  return (
    <section className="w-full bg-[#E6F4FF] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
       
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <p className="text-[#2282C6] uppercase tracking-widest text-sm font-semibold mb-2">
              Choose Your Van
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Security Solutions for Popular Vans
            </h2>
          </div>

          <Link
            href="/vans"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 bg-[#2282C6] text-white font-semibold px-5 py-3 rounded-md hover:bg-[#1565C0] transition-all duration-300 shadow-sm"
          >
            View All Vans <ArrowRight size={20} />
          </Link>
        </div>

       
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {vans.map((van) => (
            <div
              key={van.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-4 flex flex-col items-center text-center cursor-pointer hover:-translate-y-1"
            >
              <div className="relative w-full h-40 mb-4">
                <Image
                  src={van.image}
                  alt={van.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{van.name}</h3>
              <p className="text-sm text-gray-600">{van.model}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
