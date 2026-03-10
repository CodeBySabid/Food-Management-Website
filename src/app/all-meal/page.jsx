"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const itemsData = [
  {
    id: 1,
    title: "Grilled Chicken",
    desc: "Juicy grilled chicken with special spices.",
    price: "$12",
    img: 'https://i.ibb.co.com/HD4gV46Y/download.png',
  },
  {
    id: 2,
    title: "Beef Steak",
    desc: "Tender steak cooked to perfection.",
    price: "$18",
    img: "https://i.ibb.co.com/0y0MvXNR/download-1.jpg",
  },
  {
    id: 3,
    title: "Veggie Salad",
    desc: "Healthy vegetable salad bowl.",
    price: "$9",
    img: "https://i.ibb.co.com/NgDQb679/download-2.jpg",
  },
  {
    id: 4,
    title: "Pasta Special",
    desc: "Italian pasta with creamy sauce.",
    price: "$14",
    img: "https://i.ibb.co.com/WvpGkwS9/download-3.jpg",
  },
  {
    id: 5,
    title: "Seafood Combo",
    desc: "Fresh seafood platter with sauce.",
    price: "$20",
    img: "https://i.ibb.co.com/0R4mVhVy/download.jpg",
  },
  {
    id: 6,
    title: "Chicken Burger",
    desc: "Crispy chicken burger with cheese.",
    price: "$10",
    img: "https://i.ibb.co.com/DPmLvDXw/download-1.jpg",
  },
];

export default function ItemsPage() {
  const [search, setSearch] = useState("");

  const filteredItems = itemsData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold mb-2">Meals</h1>
      <p className="text-gray-500 mb-8">
        Explore our delicious meals prepared by expert chefs.
      </p>

      {/* Search */}
      <input
        type="text"
        placeholder="Search meals..."
        className="w-full mb-10 p-3 border rounded-lg"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden"
          >
            <img
              src={item.img}
              alt=""
              className="h-48 w-full object-cover"
            />

            <div className="p-4">

              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm line-clamp-2">
                {item.desc}
              </p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-blue-600 font-bold">
                  {item.price}
                </span>

                <Link
                  href={`/all-meal/${item.id}`}
                  className="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm"
                >
                  Details
                </Link>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}