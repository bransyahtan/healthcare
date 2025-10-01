"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const DoctorSection = () => {
  return (
    <section className="responsive-container py-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-black mb-8"
      >
        Dokter & Spesialis
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 bg-white p-6 rounded-2xl shadow">
        <div className="flex justify-center">
          <Image
            src="/images/doctor2.png"
            alt="doctor"
            width={300}
            height={300}
            className="rounded-2xl object-cover"
          />
        </div>

        <div className="text-center md:text-left space-y-3">
          <h3 className="text-2xl font-semibold text-gray-800">
            Tenaga Medis Profesional
          </h3>
          <p className="text-gray-600">
            Tim dokter dan spesialis kami siap memberikan pelayanan kesehatan
            terbaik untuk Anda dan keluarga.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <motion.a
            href="/doctors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full text-white font-semibold shadow bg-primarygreen"
          >
            Lihat Semua Dokter
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
