"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Link from "next/link";

const items = [
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

export default function ItemDetails() {
  const { id } = useParams();
  const item = items.find((i) => i.id == id);
  if (!item) {
    return <p className="p-20">Item not found</p>;
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">

      <Link
        href="/all-meal"
        className="text-blue-600 mb-6 inline-block"
      >
        ← Back to meal
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden"
      >
        <img
          src={item.img}
          alt=""
          className="w-full h-80 object-cover"
        />

        <div className="p-6">

          <h1 className="text-3xl font-bold">
            {item.title}
          </h1>

          <p className="mt-4 text-gray-500">
            {item.desc}
          </p>

          <div className="mt-6 text-xl font-bold text-blue-600">
            Price: {item.price}
          </div>

        </div>
      </motion.div>

    </section>
  );
}