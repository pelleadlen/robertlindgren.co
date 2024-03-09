"use client";
import ClockNew from "./components/clockNew";
import { useState, useEffect } from "react";
import Footer from "./components/footer";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  };
  return (
    <main className=" h-svh relative p-6 flex-col items-center justify-between text-sm tracking-tight">
      <div className="w-[180px]">
        <h1 className="mb-6">Robert Lindgren</h1>
        <h2 className="mb-4">
          Designing digital products and brands with people I look up to. Let me
          show you!
        </h2>
        <div className="flex gap-2 mb-1">
          <a
            href="https://www.linkedin.com"
            className="bg-white text-black px-1"
          >
            Book meeting
          </a>
          <p>or:</p>
        </div>
        <div className="flex flex-col">
          <a href="mailto:hello@robertlindgren.co">hello@robertlindgren.co</a>
          <a href="mailto:business@robertlindgren.co">
            business@robertlindgren.co
          </a>
        </div>
      </div>
      <AnimatePresence>
        <motion.div
          variants={fadeIn}
          transition="transition"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <ClockNew />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </main>
  );
}
