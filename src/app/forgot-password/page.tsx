"use client";

import doctorAnimation from "@/../public/lotties/login.json";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#eafafa] to-[#d6f5f4] px-4">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="mb-6 w-60"
      >
        <Lottie animationData={doctorAnimation} loop={true} />
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-lg hover:shadow-2xl rounded-3xl p-8 w-full max-w-md"
      >
        {!isSubmitted ? (
          <>
            <h1 className="text-3xl font-bold text-center text-[#20b4ad] mb-2">
              Lupa Password?
            </h1>
            <p className="text-center text-gray-500 mb-8">
              Jangan khawatir! Masukkan email Anda dan kami akan mengirimkan
              link untuk reset password
            </p>

            <form onSubmit={handleSubmit}>
              <div className="flex items-center border rounded-xl mb-6 px-4 py-3 focus-within:ring-2 focus-within:ring-[#20b4ad]">
                <Mail className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="email"
                  placeholder="Masukkan email Anda"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full focus:outline-none"
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.95 }}
                disabled={!email}
                className={`w-full py-3 rounded-xl text-white font-semibold transition-all duration-300 ${
                  email
                    ? "bg-gradient-to-r from-[#20b4ad] to-[#19908b] hover:opacity-90"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                Kirim Link Reset
              </motion.button>
            </form>
          </>
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-[#20b4ad] mb-2">
              Email Terkirim!
            </h2>
            <p className="text-gray-600 mb-6">
              Kami telah mengirimkan link reset password ke{" "}
              <strong>{email}</strong>. Silakan cek inbox atau folder spam Anda.
            </p>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSubmitted(false)}
              className="w-full py-3 rounded-xl text-[#20b4ad] border-2 border-[#20b4ad] font-semibold hover:bg-[#20b4ad] hover:text-white transition-all duration-300 mb-4"
            >
              Kirim Ulang Email
            </motion.button>
          </motion.div>
        )}

        <div className="flex items-center justify-center mt-6">
          <Link
            href="/login"
            className="flex items-center text-sm text-gray-500 hover:text-[#20b4ad] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Kembali ke Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
