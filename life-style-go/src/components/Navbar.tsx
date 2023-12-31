"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flexible">
      <nav className="w-full fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl text-cyan-600 font-bold ">
                  Life Style Go
                </h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setOpen(!open)}
                >
                  {open ? (
                    <Image
                      src="/close-blue.svg"
                      width={30}
                      height={30}
                      alt="close"
                    />
                  ) : (
                    <Image
                      src="/menu-blue.svg"
                      width={30}
                      height={30}
                      alt="menu"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                open ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-cyan-700  border-cyan-900  md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="/ingredients" onClick={() => setOpen(!open)}>
                    Ingredients
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0   hover:bg-cyan-700  border-cyan-900  md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="/recipes" onClick={() => setOpen(!open)}>
                    Recipes
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0   hover:bg-cyan-700  border-cyan-900  md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="/register" onClick={() => setOpen(!open)}>
                    Sign Up
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0   hover:bg-cyan-700  border-cyan-900  md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setOpen(!open)}>
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
