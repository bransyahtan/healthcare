"use client";

import { motion } from "framer-motion";
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
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-black mb-8"
      >
        Layanan Kami
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              href={item.link}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-transparent hover:border-primarygreen transition"
            >
              <item.icon className="w-10 h-10 text-primarygreen mb-3" />
              <span className="text-lg font-semibold text-gray-700">
                {item.title}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
