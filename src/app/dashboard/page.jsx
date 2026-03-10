"use client";

import { motion } from "framer-motion";

const stats = [
  { title: "Total Products", value: 120 },
  { title: "Total Orders", value: 340 },
  { title: "Customers", value: 89 },
  { title: "Revenue", value: "$5,200" },
];

export default function Dashboard() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold mb-10"
      >
        Dashboard
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow"
          >

            <h3 className="text-gray-500">
              {stat.title}
            </h3>

            <p className="text-3xl font-bold mt-2">
              {stat.value}
            </p>

          </motion.div>
        ))}

      </div>

      {/* Chart placeholder */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-16 bg-gray-100 dark:bg-gray-800 rounded-xl h-64 flex items-center justify-center"
      >
        <p className="text-gray-500">
          Chart / Analytics Graph Placeholder
        </p>
      </motion.div>

    </section>
  );
}