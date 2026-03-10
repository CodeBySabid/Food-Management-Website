"use client";

import { motion } from "framer-motion";

const meals = [
  { name: "Grilled Chicken", price: "$12", img: "https://i.ibb.co.com/HD4gV46Y/download.png" },
  { name: "Beef Steak", price: "$18", img: "https://i.ibb.co.com/0y0MvXNR/download-1.jpg" },
  { name: "Veggie Salad", price: "$9", img: "https://i.ibb.co.com/NgDQb679/download-2.jpg" },
  { name: "Pasta Special", price: "$14", img: "https://i.ibb.co.com/WvpGkwS9/download-3.jpg" },
];

export default function PopularMeals() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Popular Meals
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {meals.map((meal, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden"
            >
              <img
                src={meal.img}
                alt=""
                className="h-48 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold">{meal.name}</h3>
                <p className="text-blue-600 font-bold">{meal.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}