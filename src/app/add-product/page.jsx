"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function AddProduct() {

  const [form, setForm] = useState({
    title: "",
    shortDesc: "",
    fullDesc: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    toast.success("Product added successfully!");

    setForm({
      title: "",
      shortDesc: "",
      fullDesc: "",
      price: "",
      image: "",
    });
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">

      <Toaster />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-10"
      >
        Add Product
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow"
      >

        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Product Title"
          required
          className="w-full p-3 border rounded-lg"
        />

        <input
          name="shortDesc"
          value={form.shortDesc}
          onChange={handleChange}
          placeholder="Short Description"
          required
          className="w-full p-3 border rounded-lg"
        />

        <textarea
          name="fullDesc"
          value={form.fullDesc}
          onChange={handleChange}
          placeholder="Full Description"
          rows="4"
          required
          className="w-full p-3 border rounded-lg"
        />

        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          type="number"
          required
          className="w-full p-3 border rounded-lg"
        />

        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Image URL (optional)"
          className="w-full p-3 border rounded-lg"
        />

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
        >
          Add Product
        </button>

      </motion.form>

    </section>
  );
}