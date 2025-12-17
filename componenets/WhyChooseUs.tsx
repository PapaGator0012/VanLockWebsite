"use client";

import React from "react";
import {
  ShieldCheck,
  Lightbulb,
  Cpu,
  Cog,
  Truck,
  Users,
  ClipboardList,
  Shield,
} from "lucide-react";

interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: <ShieldCheck className="w-10 h-10 text-[#2282C6] mb-4" />,
    title: "Specialists in Van Lock Security",
    description:
      "Our expertise lies solely in van security lock systems, leaving no room for distractions.",
  },
  {
    id: 2,
    icon: <Lightbulb className="w-10 h-10 text-[#2282C6] mb-4" />,
    title: "Custom Solutions for All Van Types",
    description:
      "Whether it’s one van or a fleet, we offer customised security solutions to meet your exact needs across London.",
  },
  {
    id: 3,
    icon: <Cpu className="w-10 h-10 text-[#2282C6] mb-4" />,
    title: "Cutting-Edge Technology",
    description:
      "Our advanced Vanlock systems offer smart tracking, real-time alerts, and remote monitoring.",
  },
  {
    id: 4,
    icon: <Cog className="w-10 h-10 text-[#2282C6] mb-4" />,
    title: "Professional-Grade Components",
    description:
      "We use only high-quality, durable components designed specifically for van security locks.",
  },
  {
    id: 5,
    icon: <Truck className="w-10 h-10 text-[#2282C6] mb-4" />,
    title: "Designed for Mobile Businesses",
    description:
      "Our deep knowledge of mobile operations makes us a go-to for Central London Vanlock security and beyond.",
  },
  {
    id: 6,
    icon: <Users className="w-10 h-10 text-[#2282C6] mb-4" />,
    title: "User-Friendly Systems",
    description:
      "Intuitive and easy to use, our systems integrate seamlessly into your daily routine.",
  },
  {
    id: 7,
    icon: <ClipboardList className="w-10 h-10 text-[#2282C6] mb-4" />,
    title: "End-to-End Service",
    description:
      "From expert installation to ongoing support, VanLock is trusted for reliable security in Central London.",
  },
  {
    id: 8,
    icon: <Shield className="w-10 h-10 text-[#2282C6] mb-4" />,
    title: "Your Trusted Partner in Security",
    description:
      "We deliver reliable Vanlock solutions that provide 24/7 peace of mind.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-semibold text-[#2282C6] mb-2">
          WHY CHOOSE US?
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Secure, Track & Protect <br /> Bring It All Together
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="p-6 bg-blue-50 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
