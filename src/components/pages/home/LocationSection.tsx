"use client";

import { motion } from "framer-motion";

const LocationSection = () => {
  return (
    <section className="responsive-container py-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-black mb-8"
      >
        Lokasi Klinik
      </motion.h2>

      <div className="bg-white p-6 rounded-2xl shadow space-y-6">
        <div className="text-center md:text-left space-y-2">
          <h3 className="text-2xl font-semibold text-gray-800">
            Klinik Sehat Medika
          </h3>
          <p className="text-gray-600">
            Jl. Melati No. 123, Jakarta Selatan, DKI Jakarta
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.557514504939!2d106.81861127485969!3d-6.190064960627105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3f178d05a6d%3A0xa7c8e2e5c6d835d0!2sMonas!5e0!3m2!1sen!2sid!4v1698220000000!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
