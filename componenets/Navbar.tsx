// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [vanOpen, setVanOpen] = useState(false);

//   return (
//   <nav className="fixed top-0 left-0 w-full z-50 bg-transparent text-white backdrop-blur-sm transition-all duration-300 border-b border-[#1E88E5]/30 hover:border-[#1E88E5] hover:shadow-[0_4px_12px_-2px_rgba(30,136,229,0.4)]">

//       <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
       
//         <Link href="/" className="flex items-center gap-2">
//           <Image
//             src="/logo.png"
//             alt="VanLock Security"
//             width={140}
//             height={60}
//             priority
//           />
//         </Link>
//         <div className="hidden md:flex items-center gap-8 text-[17px] font-semibold">
//           {[
//             { name: "Home", href: "/" },
//             { name: "About Us", href: "/about" },
//           ].map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               className="relative group transition-all duration-300"
//             >
//               {item.name}
//               <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#2282C6] transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           ))}

//           <div className="relative group">
//             <button
//               onClick={() => setVanOpen(!vanOpen)}
//               className="flex items-center gap-1 relative group transition-all duration-300"
//             >
//               Choose Your Van <ChevronDown size={18} />
//               <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#2282C6] transition-all duration-300 group-hover:w-full"></span>
//             </button>
//             {vanOpen && (
//               <div className="absolute top-full mt-3 bg-black/90 text-white rounded-lg shadow-lg py-2 px-4 min-w-[180px] border-t border-[#2282C6]">
//                 <Link href="/van/ford" className="block py-1 hover:text-[#1E88E5] transition-all">to be implemented</Link>
      
//               </div>
//             )}
//           </div>
//           <div className="relative group">
//             <button
//               onClick={() => setServicesOpen(!servicesOpen)}
//               className="flex items-center gap-1 relative group transition-all duration-300"
//             >
//               Our Services <ChevronDown size={18} />
//               <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#2282C6] transition-all duration-300 group-hover:w-full"></span>
//             </button>
//             {servicesOpen && (
//               <div className="absolute top-full mt-3 bg-black/90 rounded-lg shadow-lg py-2 px-4 min-w-[180px] border-t border-gray-800">
//                 <Link href="/services/installation" className="block py-1 hover:text-[#1E88E5] transition-all">to be implemented</Link>
               
//               </div>
//             )}
//           </div>

//           {[
//             { name: "Fleets", href: "/fleets" },
//             { name: "Contact", href: "/contact" },
//           ].map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               className="relative group transition-all duration-300"
//             >
//               {item.name}
//               <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#2282C6] transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           ))}
//         </div>

//         <Link
//           href="/quote"
//           className="hidden md:flex items-center bg-[#2282C6] text-white font-bold px-5 py-3 rounded-md hover:bg-[#1565C0] transition-all duration-300"
//         >
//           Get a Quote <ArrowRight size={20} className="ml-1" />
//         </Link>

//         <button
//           className="md:hidden text-white"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {menuOpen && (
//         <div className="md:hidden bg-black/90 text-white px-6 py-4 space-y-4 transition-all duration-300">
//           <Link href="/" onClick={() => setMenuOpen(false)} className="block hover:text-[#1E88E5] transition">Home</Link>
//           <Link href="/about" onClick={() => setMenuOpen(false)} className="block hover:text-[#1E88E5] transition">About Us</Link>

//           <details>
//             <summary className="flex items-center justify-between cursor-pointer hover:text-[#1E88E5] transition">
//               Choose Your Van <ChevronDown size={18} />
//             </summary>
//             <div className="pl-4 mt-2 space-y-1">
//               <Link href="/van/ford">to be implemented</Link>
              
//             </div>
//           </details>

//           <details>
//             <summary className="flex items-center justify-between cursor-pointer hover:text-[#1E88E5] transition">
//               Our Services <ChevronDown size={18} />
//             </summary>
//             <div className="pl-4 mt-2 space-y-1">
//                <Link href="/van/ford">to be implemented</Link>
//             </div>
//           </details>

//           <Link href="/fleets" onClick={() => setMenuOpen(false)} className="block hover:text-[#1E88E5] transition">Fleets</Link>
//           <Link href="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-[#1E88E5] transition">Contact</Link>

//           <Link
//             href="/quote"
//             className="block w-full text-center bg-[#2282C6] text-white font-bold px-5 py-3 rounded-md mt-4 hover:bg-[#1565C0] transition-all duration-300"
//             onClick={() => setMenuOpen(false)}
//           >
//             Get a Quote
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// }
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [vanOpen, setVanOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent text-white backdrop-blur-sm transition-all duration-300 border-b border-[#1E88E5]/30 ">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="VanLock Security" width={140} height={60} priority />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-[17px] font-semibold">
          {[{ name: "Home", href: "/" }, { name: "About Us", href: "/about" }].map((item) => (
            <Link key={item.name} href={item.href} className="relative group transition-all duration-300">
              {item.name}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#2282C6] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setVanOpen(true)}
            onMouseLeave={() => setVanOpen(false)}
          >
            <button className="flex items-center gap-1 relative group transition-all duration-300">
              Choose Your Van <ChevronDown size={18} />
              <span className="absolute left-1 bottom-[-4px] w-0 h-[2px] bg-[#2282C6] transition-all duration-300 group-hover:w-full"></span>
            </button>

           
            {vanOpen && (
              <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-[720px] bg-white/95 text-[#0b2540] rounded-lg shadow-2xl py-4 px-5 border border-[#e6eef8]">
                <div className="grid grid-cols-12 gap-4 items-start">
                  
                  <div className="col-span-4">
                    <div className="bg-[#e8f6fb] text-[#0b2540] rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-3">Popular Vans</h3>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <Link href="/van/ford-custom-2023" className="flex items-center gap-2 hover:text-[#1E88E5]">
                            <span className="rounded-full w-5 h-5 flex items-center justify-center bg-white/0 border border-[#1E88E5] text-[#1E88E5] text-xs">›</span>
                            Ford Custom 2023
                          </Link>
                        </li>
                        <li>
                          <Link href="/van/ford-custom-2012-2023" className="flex items-center gap-2 hover:text-[#1E88E5]">
                            <span className="rounded-full w-5 h-5 flex items-center justify-center bg-white/0 border border-[#1E88E5] text-[#1E88E5] text-xs">›</span>
                            Ford Custom 2012-2023
                          </Link>
                        </li>
                        <li>
                          <Link href="/van/ford-transit-2014" className="flex items-center gap-2 hover:text-[#1E88E5]">
                            <span className="rounded-full w-5 h-5 flex items-center justify-center bg-white/0 border border-[#1E88E5] text-[#1E88E5] text-xs">›</span>
                            Ford Transit 2014
                          </Link>
                        </li>
                        <li>
                          <Link href="/van/renault-traffic-2014" className="flex items-center gap-2 hover:text-[#1E88E5]">
                            <span className="rounded-full w-5 h-5 flex items-center justify-center bg-white/0 border border-[#1E88E5] text-[#1E88E5] text-xs">›</span>
                            Renault Trafic 2014
                          </Link>
                        </li>
                        <li>
                          <Link href="/van/vauxhall-vivaro-2019" className="flex items-center gap-2 hover:text-[#1E88E5]">
                            <span className="rounded-full w-5 h-5 flex items-center justify-center bg-white/0 border border-[#1E88E5] text-[#1E88E5] text-xs">›</span>
                            Vauxhall Vivaro 2019
                          </Link>
                        </li>
                        <li>
                          <Link href="/van/vw-transporter-t6-1-2020" className="flex items-center gap-2 hover:text-[#1E88E5]">
                            <span className="rounded-full w-5 h-5 flex items-center justify-center bg-white/0 border border-[#1E88E5] text-[#1E88E5] text-xs">›</span>
                            VW Transporter T6.1
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                
                  <div className="col-span-6">
                    <h3 className="text-lg font-semibold mb-3">Choose by Manufacturer</h3>

                    <div className="grid grid-cols-3 gap-3 text-sm">
                      <ul className="space-y-2">
                        <li><Link href="/manufacturer/citroen" className="hover:text-[#1E88E5]">Citroen</Link></li>
                        <li><Link href="/manufacturer/fiat" className="hover:text-[#1E88E5]">Fiat</Link></li>
                        <li><Link href="/manufacturer/ford" className="hover:text-[#1E88E5]">Ford</Link></li>
                        <li><Link href="/manufacturer/isuzu" className="hover:text-[#1E88E5]">Isuzu</Link></li>
                        <li><Link href="/manufacturer/iveco" className="hover:text-[#1E88E5]">IVECO</Link></li>
                        <li><Link href="/manufacturer/land-rover" className="hover:text-[#1E88E5]">Land Rover</Link></li>
                      </ul>

                      <ul className="space-y-2">
                        <li><Link href="/manufacturer/levc" className="hover:text-[#1E88E5]">LEVC</Link></li>
                        <li><Link href="/manufacturer/man" className="hover:text-[#1E88E5]">MAN</Link></li>
                        <li><Link href="/manufacturer/maxus" className="hover:text-[#1E88E5]">Maxus</Link></li>
                        <li><Link href="/manufacturer/mercedes-benz" className="hover:text-[#1E88E5]">Mercedes-Benz</Link></li>
                        <li><Link href="/manufacturer/nissan" className="hover:text-[#1E88E5]">Nissan</Link></li>
                        <li><Link href="/manufacturer/peugeot" className="hover:text-[#1E88E5]">Peugeot</Link></li>
                      </ul>

                      <ul className="space-y-2">
                        <li><Link href="/manufacturer/renault" className="hover:text-[#1E88E5]">Renault</Link></li>
                        <li><Link href="/manufacturer/toyota" className="hover:text-[#1E88E5]">Toyota</Link></li>
                        <li><Link href="/manufacturer/vauxhall" className="hover:text-[#1E88E5]">Vauxhall</Link></li>
                        <li><Link href="/manufacturer/volkswagen" className="hover:text-[#1E88E5]">Volkswagen</Link></li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-span-2 flex items-center justify-center">
                    <div className="w-full">
                      <Link
                        href="/manufacturers"
                        className="block text-center bg-[#157fc8] text-white text-sm font-bold px-4 py-2.5 rounded-md hover:bg-[#0f5f9f] transition-all duration-200"
                      >
                        All Manufacturers
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          
          <div
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 relative group transition-all duration-300">
              Our Services <ChevronDown size={18} />
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#2282C6] transition-all duration-300 group-hover:w-full"></span>
            </button>

            {servicesOpen && (
              <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-white/95 text-[#0b2540] rounded-lg shadow-2xl py-3 px-4 min-w-[280px] border border-[#e6eef8] opacity-0 animate-[slideDown_0.3s_ease-out_forwards]">
                <style jsx>{`
                  @keyframes slideDown {
                    from {
                      opacity: 0;
                      transform: translate(-50%, -10px);
                    }
                    to {
                      opacity: 1;
                      transform: translate(-50%, 0);
                    }
                  }
                `}</style>
                <Link href="/services/van-dead-locks" className="block py-2.5 text-base hover:text-[#1E88E5] transition border-b border-gray-200 last:border-0">Van Dead Locks</Link>
                <Link href="/services/van-hook-locks" className="block py-2.5 text-base hover:text-[#1E88E5] transition border-b border-gray-200 last:border-0">Van Hook Locks</Link>
                <Link href="/services/van-slam-locks" className="block py-2.5 text-base hover:text-[#1E88E5] transition border-b border-gray-200 last:border-0">Van Slam Locks</Link>
                <Link href="/services/van-statement-lock" className="block py-2.5 text-base hover:text-[#1E88E5] transition border-b border-gray-200 last:border-0">Van Statement Lock</Link>
                <Link href="/services/replacement-lock-ford" className="block py-2.5 text-base hover:text-[#1E88E5] transition border-b border-gray-200 last:border-0">Replacement Lock for Ford</Link>
                <Link href="/services/repair-plate-external-shield" className="block py-2.5 text-base hover:text-[#1E88E5] transition border-b border-gray-200 last:border-0">Repair Plate or External Shield</Link>
                <Link href="/services/air-vent-installation" className="block py-2.5 text-base hover:text-[#1E88E5] transition">Air Vent Installation</Link>
              </div>
            )}
          </div>

          {[{ name: "Fleets", href: "/fleets" }, { name: "Contact", href: "/contact" }].map((item) => (
            <Link key={item.name} href={item.href} className="relative group transition-all duration-300">
              {item.name}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#2282C6] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <Link href="/quote" className="hidden md:flex items-center bg-[#2282C6] text-white font-bold px-5 py-3 rounded-md hover:bg-[#1565C0] transition-all duration-300">
          Get a Quote <ArrowRight size={20} className="ml-1" />
        </Link>

        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/90 text-white px-6 py-4 space-y-4 transition-all duration-300">
          <Link href="/" onClick={() => setMenuOpen(false)} className="block hover:text-[#1E88E5] transition">Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="block hover:text-[#1E88E5] transition">About Us</Link>

          <details>
            <summary className="flex items-center justify-between cursor-pointer hover:text-[#1E88E5] transition">
              Choose Your Van <ChevronDown size={18} />
            </summary>
            <div className="pl-4 mt-2 space-y-1">
              <Link href="/van/ford-custom-2023">Ford Custom 2023</Link>
              <Link href="/van/ford-custom-2012-2023">Ford Custom 2012-2023</Link>
              <Link href="/van/ford-transit-2014">Ford Transit 2014</Link>
              <Link href="/van/renault-traffic-2014">Renault Trafic 2014</Link>
              <Link href="/van/vauxhall-vivaro-2019">Vauxhall Vivaro 2019</Link>
              <Link href="/van/vw-transporter-t6-1-2020">Volkswagen Transporter T6.1 2020</Link>
              <Link href="/manufacturers" className="mt-2 block text-sm text-[#a8d0f7]">See all manufacturers</Link>
            </div>
          </details>

          <details>
            <summary className="flex items-center justify-between cursor-pointer hover:text-[#1E88E5] transition">
              Our Services <ChevronDown size={18} />
            </summary>
            <div className="pl-4 mt-2 space-y-1 text-sm">
              <Link href="/services/van-dead-locks" className="block py-1.5 hover:text-[#1E88E5]">Van Dead Locks</Link>
              <Link href="/services/van-hook-locks" className="block py-1.5 hover:text-[#1E88E5]">Van Hook Locks</Link>
              <Link href="/services/van-slam-locks" className="block py-1.5 hover:text-[#1E88E5]">Van Slam Locks</Link>
              <Link href="/services/van-statement-lock" className="block py-1.5 hover:text-[#1E88E5]">Van Statement Lock</Link>
              <Link href="/services/replacement-lock-ford" className="block py-1.5 hover:text-[#1E88E5]">Replacement Lock for Ford</Link>
              <Link href="/services/repair-plate-external-shield" className="block py-1.5 hover:text-[#1E88E5]">Repair Plate or External Shield</Link>
              <Link href="/services/air-vent-installation" className="block py-1.5 hover:text-[#1E88E5]">Air Vent Installation</Link>
            </div>
          </details>

          <Link href="/fleets" onClick={() => setMenuOpen(false)} className="block hover:text-[#1E88E5] transition">Fleets</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-[#1E88E5] transition">Contact</Link>

          <Link
            href="/quote"
            className="block w-full text-center bg-[#2282C6] text-white font-bold px-5 py-3 rounded-md mt-4 hover:bg-[#1565C0] transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
}