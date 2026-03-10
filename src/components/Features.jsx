"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Fresh Ingredients",
    desc: "We ensure the freshest ingredients for every meal.",
    icon: "🥗",
  },
  {
    title: "Expert Chefs",
    desc: "Meals prepared by experienced professional chefs.",
    icon: "👨‍🍳",
  },
  {
    title: "Fast Delivery",
    desc: "Get your favorite meals delivered quickly.",
    icon: "🚚",
  },
  {
    title: "Healthy Options",
    desc: "Nutritious and balanced meals for everyone.",
    icon: "💚",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-500 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}