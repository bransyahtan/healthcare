"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  return (
    <section className="">
      <div className="responsive-container grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Konsultasi dengan Dokter Terpercaya
          </h1>
          <p className="text-lg text-gray-600">
            Temukan dokter terbaik sesuai kebutuhan kesehatan Anda dan baca
            artikel-artikel terpercaya seputar kesehatan.
          </p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <button
              onClick={() => router.push("/doctors")}
              className="cursor-pointer px-6 py-3 rounded-2xl font-semibold shadow-md bg-primarygreen text-white hover:opacity-90 hover:-translate-y-0.5 transition"
            >
              Cari Dokter
            </button>
            <button
              onClick={() => router.push("/articles")}
              className="border border-primarygreen text-primarygreen cursor-pointer px-6 py-3 rounded-2xl font-semibold shadow-lg bg-white hover:opacity-90 hover:-translate-y-0.5 transition"
            >
              Article
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hidden md:flex justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Image
            src="/images/doctor.png"
            alt="Dokter"
            width={400}
            height={400}
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
