"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-8xl font-bold text-blue-600"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-gray-500 mt-4"
      >
        Oops! The page you are looking for does not exist.
      </motion.p>

      <Link
        href="/"
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg"
      >
        Back Home
      </Link>

    </div>
  );
}