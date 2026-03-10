"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-6"
      >
        Contact Us
      </motion.h1>

      <p className="text-gray-500 mb-10">
        Have questions or feedback? Send us a message.
      </p>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="space-y-4 bg-white dark:bg-gray-800 p-8 rounded-xl shadow"
        >

          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            required
            className="w-full p-3 border rounded-lg"
          />

          <textarea
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 border rounded-lg"
          />

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg"
          >
            Send Message
          </button>

          {submitted && (
            <p className="text-green-600 text-sm">
              Message sent successfully!
            </p>
          )}

        </motion.form>

        {/* Map / Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-gray-100 dark:bg-gray-800 bg-[url('https://i.ibb.co.com/DgwPvVGb/download-3.jpg')] bg-cover bg-center rounded-xl flex items-center justify-center p-10"
        >
        </motion.div>

      </div>

    </section>
  );
}