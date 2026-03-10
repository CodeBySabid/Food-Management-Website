"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[65vh] flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-black dark:to-gray-800"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl px-6 text-center">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Discover Delicious Meals <br />
          with <span className="text-blue-600">CostaVida</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300"
        >
          Explore thousands of recipes, discover amazing chefs,
          and enjoy delicious meals from around the world.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 flex justify-center gap-4"
        >
          <Link
            href="/all-meal"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Explore Meals
          </Link>

          <Link
            href="/about"
            className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Learn More
          </Link>
        </motion.div>
      </div>

      {/* Decorative blur circles */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full blur-[120px] opacity-30"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-400 rounded-full blur-[120px] opacity-30"></div>
    </section>
  );
}