"use client";

import doctorAnimation from "@/../public/lotties/login.json";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <h1 className="text-3xl font-bold text-center text-[#20b4ad] mb-2">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Login to continue your healthcare journey
        </p>

        <div className="flex items-center border rounded-xl mb-4 px-4 py-3 focus-within:ring-2 focus-within:ring-[#20b4ad]">
          <Mail className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full focus:outline-none"
          />
        </div>

        <div className="flex items-center border rounded-xl mb-6 px-4 py-3 focus-within:ring-2 focus-within:ring-[#20b4ad]">
          <Lock className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full focus:outline-none"
          />
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          disabled={!email || !password}
          className={`w-full py-3 rounded-xl text-white font-semibold transition-all duration-300 ${
            email && password
              ? "bg-gradient-to-r from-[#20b4ad] to-[#19908b] hover:opacity-90"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Login
        </motion.button>

        <div className="flex justify-between mt-6 text-sm text-gray-500">
          <Link href="/forgot-password" className="hover:text-[#20b4ad]">
            Lupa Password?
          </Link>
          <Link href="/register" className="hover:text-[#20b4ad]">
            Buat Akun
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
