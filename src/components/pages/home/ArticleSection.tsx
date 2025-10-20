"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Tips Menjaga Kesehatan di Musim Hujan",
    bannerPhoto: "/images/article.jpg",
    content:
      "Musim hujan membawa risiko penyakit seperti flu dan demam. Berikut beberapa tips untuk menjaga daya tahan tubuh Anda agar tetap fit.",
  },
  {
    id: 2,
    title: "Pentingnya Cek Kesehatan Rutin",
    bannerPhoto: "/images/article.jpg",
    content:
      "Pemeriksaan kesehatan rutin membantu mendeteksi penyakit lebih awal, sehingga penanganannya bisa lebih efektif dan efisien.",
  },
  {
    id: 3,
    title: "Cara Menjaga Pola Tidur Sehat",
    bannerPhoto: "/images/article.jpg",
    content:
      "Tidur cukup sangat penting bagi kesehatan fisik dan mental. Simak cara mudah menjaga pola tidur agar tubuh tetap segar setiap hari.",
  },
];

const ArticleSection = () => {
  return (
    <section className="responsive-container py-16">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
      >
        Artikel Kesehatan
      </motion.h2>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden transition"
          >
            <Image
              src={article.bannerPhoto}
              alt={article.title}
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-gray-800">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3">
                {article.content}
              </p>
              <Link
                href={`/articles/${article.id}`}
                className="inline-block text-primarygreen font-medium hover:underline"
              >
                Baca Selengkapnya →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* More Button */}
      <motion.div
        className="mt-12 flex justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href="/articles"
          className="px-8 py-3 rounded-full bg-primarygreen text-white font-semibold shadow hover:shadow-md transition"
        >
          Lihat Artikel Lainnya
        </Link>
      </motion.div>
    </section>
  );
};

export default ArticleSection;
