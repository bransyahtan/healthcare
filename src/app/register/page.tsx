"use client";

import doctorAnimation from "@/../public/lotties/login.json";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { ArrowLeft, Lock, Mail, Phone, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.password === formData.confirmPassword &&
      formData.fullName &&
      formData.email &&
      formData.phone &&
      formData.password
    ) {
      setIsSubmitted(true);
    }
  };

  const isFormValid =
    formData.fullName &&
    formData.email &&
    formData.phone &&
    formData.password &&
    formData.confirmPassword &&
    formData.password === formData.confirmPassword;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#eafafa] to-[#d6f5f4] px-4 py-8">
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
              Buat Akun Baru
            </h1>
            <p className="text-center text-gray-500 mb-8">
              Bergabunglah dengan kami untuk memulai perjalanan kesehatan Anda
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#20b4ad]">
                <User className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  name="fullName"
                  placeholder="Nama Lengkap"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full focus:outline-none"
                  required
                />
              </div>

              <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#20b4ad]">
                <Mail className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full focus:outline-none"
                  required
                />
              </div>

              <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#20b4ad]">
                <Phone className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Nomor Telepon"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full focus:outline-none"
                  required
                />
              </div>

              <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#20b4ad]">
                <Lock className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full focus:outline-none"
                  required
                />
              </div>

              <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-[#20b4ad]">
                <Lock className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Konfirmasi Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full focus:outline-none"
                  required
                />
              </div>

              {formData.password &&
                formData.confirmPassword &&
                formData.password !== formData.confirmPassword && (
                  <p className="text-red-500 text-sm">Password tidak cocok</p>
                )}

              <motion.button
                type="submit"
                whileTap={{ scale: 0.95 }}
                disabled={!isFormValid}
                className={`w-full py-3 rounded-xl text-white font-semibold transition-all duration-300 ${
                  isFormValid
                    ? "bg-gradient-to-r from-[#20b4ad] to-[#19908b] hover:opacity-90"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                Daftar Sekarang
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
              <User className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-[#20b4ad] mb-2">
              Pendaftaran Berhasil!
            </h2>
            <p className="text-gray-600 mb-6">
              Selamat! Akun Anda telah berhasil dibuat. Silakan login untuk
              melanjutkan.
            </p>
            <Link href="/login">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#20b4ad] to-[#19908b] text-white font-semibold hover:opacity-90 transition-all duration-300"
              >
                Login Sekarang
              </motion.button>
            </Link>
          </motion.div>
        )}

        <div className="flex items-center justify-center mt-6">
          <Link
            href="/login"
            className="flex items-center text-sm text-gray-500 hover:text-[#20b4ad] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Sudah punya akun? Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
