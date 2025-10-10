"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="responsive-container py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
      >
        Lokasi Klinik Kami
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-white to-green-50 p-8 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-8"
      >
        <div className="flex-1 space-y-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <MapPin className="text-primarygreen w-6 h-6" />
            <h3 className="text-2xl font-semibold text-gray-800">
              Klinik Sehat Medika
            </h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Jl. Melati No. 123, Jakarta Selatan, DKI Jakarta <br />
            Buka setiap hari pukul{" "}
            <span className="font-medium">08.00 - 21.00</span>
          </p>

          <motion.a
            href="https://www.google.com/maps/place/Monas/"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-4 px-6 py-3 rounded-full bg-primarygreen text-white font-semibold shadow hover:shadow-md transition"
          >
            Lihat di Google Maps
          </motion.a>
        </div>

        <div className="flex-1 w-full rounded-2xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.557514504939!2d106.81861127485969!3d-6.190064960627105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3f178d05a6d%3A0xa7c8e2e5c6d835d0!2sMonas!5e0!3m2!1sen!2sid!4v1698220000000!5m2!1sen!2sid"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
};
export default LocationSection;
