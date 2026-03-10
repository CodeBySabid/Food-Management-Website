"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function SignUpPage() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 overflow-hidden">

      {/* Animated background shapes */}

      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl top-10 left-10"
      />

      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl bottom-10 right-10"
      />

      {/* Card */}

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-10 w-[380px]"
      >

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-white text-center mb-6"
        >
          Create Account
        </motion.h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 outline-none"
          />

          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 outline-none"
          />

          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 outline-none"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-white text-purple-700 font-semibold p-3 rounded-lg"
          >
            Sign Up
          </motion.button>

        </form>

        <p className="text-center text-white/80 text-sm mt-6">
          Already have an account? <Link href='/login' className="text-blue-600">Login</Link>
        </p>

      </motion.div>
    </div>
  );
}