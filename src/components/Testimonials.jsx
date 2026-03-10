"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahim",
    text: "Amazing food and fast delivery!",
  },
  {
    name: "Karim",
    text: "The chefs are really talented.",
  },
  {
    name: "Fatima",
    text: "Best meal service I’ve tried.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow"
            >
              <p className="text-gray-500">“{t.text}”</p>
              <h4 className="mt-4 font-semibold">{t.name}</h4>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}