"use client";

import {
  ClipboardCheck,
  FlaskConical,
  MoreHorizontal,
  Smile,
  Syringe,
} from "lucide-react";
import Link from "next/link";

const ServiceSection = () => {
  const items = [
    {
      title: "Pemeriksaan Kesehatan",
      icon: ClipboardCheck,
      link: "#",
    },
    {
      title: "Laboratorium",
      icon: FlaskConical,
      link: "#",
    },
    {
      title: "Vaksinasi",
      icon: Syringe,
      link: "#",
    },
    {
      title: "Perawatan Gigi",
      icon: Smile,
      link: "#",
    },
    {
      title: "Layanan Lainnya",
      icon: MoreHorizontal,
      link: "/services",
    },
  ];

  return (
    <section className="responsive-container py-12">
      <h2 className="text-3xl font-bold text-black mb-8">Layanan Kami</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {items.map((item, idx) => (
          <Link
            href={item.link}
            key={idx}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-transparent hover:border-primarygreen transition"
          >
            <item.icon className="w-10 h-10 text-primarygreen mb-3" />
            <span className="text-lg font-semibold text-gray-700">
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
