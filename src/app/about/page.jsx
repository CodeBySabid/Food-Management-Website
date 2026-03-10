"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Rahim Ahmed",
    role: "Founder & CEO",
    img: 'https://i.ibb.co.com/93ggv60h/images.jpg',
  },
  {
    name: "Karim Uddin",
    role: "Head Chef",
    img: "https://i.ibb.co.com/8Dm9Yr8V/images-1.jpg",
  },
  {
    name: "Fatima Noor",
    role: "Product Manager",
    img: "https://i.ibb.co.com/jPBX147n/images-2.jpg",
  },
];

export default function AboutPage() {
  return (
    <main>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold"
        >
          About Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 max-w-2xl mx-auto"
        >
          We help people discover amazing meals and manage products
          efficiently with a modern and simple platform.
        </motion.p>

      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >

          <img
            src="https://i.ibb.co.com/70W9RBG/download-2.jpg"
            alt=""
            className="rounded-xl shadow"
          />

          <div>

            <h2 className="text-3xl font-bold mb-4">
              Our Story
            </h2>

            <p className="text-gray-600 dark:text-gray-300">
              Our platform was created to simplify product management
              and help users discover quality meals and products.
              We focus on clean design, great user experience,
              and modern web technologies.
            </p>

          </div>

        </motion.div>

      </section>

      {/* Mission Vision */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">

          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow"
          >
            <h3 className="text-xl font-bold mb-3">
              Our Mission
            </h3>

            <p className="text-gray-500">
              To provide a powerful yet simple platform
              where users can manage products and explore
              quality meals effortlessly.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow"
          >
            <h3 className="text-xl font-bold mb-3">
              Our Vision
            </h3>

            <p className="text-gray-500">
              To become a trusted platform for product
              management and food discovery across the world.
            </p>
          </motion.div>

        </div>

      </section>

      {/* Team Section */}
      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Team
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10 }}
                className="text-center bg-white dark:bg-gray-800 rounded-xl shadow p-6"
              >

                <img
                  src={member.img}
                  alt=""
                  className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
                />

                <h4 className="font-semibold">
                  {member.name}
                </h4>

                <p className="text-gray-500 text-sm">
                  {member.role}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}