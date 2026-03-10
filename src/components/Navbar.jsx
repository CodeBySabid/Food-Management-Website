"use client";

import React, { useEffect, useRef, useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { IoMenuOutline, IoMoonSharp, IoSunny } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from '../assets/Brown and Black Circle Illustrated Burger Pizza Logo.png'

const Navbar = ({ openLogin, openRegister }) => {
  const [open, setOpen] = useState(false);
  const dropDown = useRef(null);
  // const [theme, setTheme] = useState("dark");
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutsite = (e) => {
      if (open && dropDown.current && !dropDown.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsite);
    return () =>
      document.removeEventListener("mousedown", handleClickOutsite);
  }, [open]);

  useEffect(() => {
    const handleScrollOutsite = () => {
      if (open) {
        setOpen(false);
      }
    };
    window.addEventListener("scroll", handleScrollOutsite);
    return () =>
      window.removeEventListener("scroll", handleScrollOutsite);
  }, [open]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  // const toggleTheme = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  //   document.documentElement.setAttribute("data-theme", newTheme);
  // };

  // useEffect(() => {
  //   document.documentElement.setAttribute("dark-theme", theme);
  // }, [theme]);

  const navClass = (path) =>
    pathname === path
      ? "rounded-4xl text-blue-700 font-semibold"
      : "hover:text-blue-500";

  const links = (
    <>
      <Link href="/" onClick={() => setOpen(false)} className={navClass("/")}>
        Home
      </Link>

      <Link
        href="/all-meal"
        onClick={() => setOpen(false)}
        className={navClass("/all-meal")}
      >
        Meals
      </Link>

      <Link
        href="/about"
        onClick={() => setOpen(false)}
        className={navClass("/about")}
      >
        About
      </Link>

      <Link
        href="/dashboard"
        onClick={() => setOpen(false)}
        className={navClass("/dashboard")}
      >
        Dashboard
      </Link>

      <Link
        href="/contact"
        onClick={() => setOpen(false)}
        className={navClass("/contact")}
      >
        Contact
      </Link>

      <Link
        href="/add-product"
        onClick={() => setOpen(false)}
        className={navClass("/add-product")}
      >
        Add Food
      </Link>

      <Link
        href="/manage-products"
        onClick={() => setOpen(false)}
        className={navClass("/manage-products")}
      >
        Manage Food
      </Link>
    </>
  );

  const loginAndRegister = (
    <>
      <button onClick={openLogin} className="btn">
        <span className="text-container">
          <Link href='/login' className="text">log in</Link>
        </span>
      </button>

      <button onClick={openRegister} className="btn">
        <span className="text-container">
          <Link href='/sign-up' className="text">sign up</Link>
        </span>
      </button>
    </>
  );
  

  return (
    <div className="absolute w-screen bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl shadow-lg">
      <div className="flex justify-between px-4 py-2 items-center">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src={logo}
            width={35}
            height={35}
            alt="logo"
            className="rounded-full"
          />
          <h1 className="max-sm:text-xl sm:text-2xl font-bold">
            CostaVida
          </h1>
        </Link>

        <div className="hidden lg:flex gap-4.5">{links}</div>

        <div className="hidden lg:flex gap-2">{loginAndRegister}</div>

        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <HiXMark size={31} /> : <IoMenuOutline size={31} />}
        </button>
      </div>

      {open && (
        <div
          ref={dropDown}
          className="w-full pb-3.5 flex flex-col items-center justify-center gap-3"
        >
          {links}
          <div className="flex items-center gap-2.5">{loginAndRegister}</div>
        </div>
      )}
    </div>
  );
};

export default Navbar;