"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const initialProducts = [
  {
    id: 1,
    title: "Grilled Chicken",
    price: "$12",
  },
  {
    id: 2,
    title: "Beef Steak",
    price: "$18",
  },
  {
    id: 3,
    title: "Veggie Salad",
    price: "$9",
  },
];

export default function ManageProducts() {

  const [products, setProducts] = useState(initialProducts);

  const handleDelete = (id) => {
    const filtered = products.filter((p) => p.id !== id);
    setProducts(filtered);
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-10"
      >
        Manage Products
      </motion.h1>

      <div className="overflow-x-auto">

        <table className="w-full border rounded-lg overflow-hidden">

          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product, i) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="border-t"
              >
                <td className="p-4">{product.title}</td>
                <td className="p-4">{product.price}</td>

                <td className="p-4 flex gap-3">

                  <Link
                    href={`/all-meal/${product.id}`}
                    className="px-3 py-1 bg-green-600 text-white rounded"
                  >
                    View
                  </Link>

                  <button
                    onClick={() => handleDelete(product.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded"
                  >
                    Delete
                  </button>

                </td>
              </motion.tr>
            ))}
          </tbody>

        </table>

      </div>

    </section>
  );
}