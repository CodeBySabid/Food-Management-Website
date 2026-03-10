"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20">

      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, scale: .9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-blue-600 text-white rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold">
            Ready to Explore Delicious Meals?
          </h2>

          <p className="mt-4 opacity-90">
            Discover thousands of meals from top chefs.
          </p>

          <Link
            href="/all-meal"
            className="inline-block mt-6 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold"
          >
            Browse Meals
          </Link>
        </motion.div>

      </div>

    </section>
  );
}