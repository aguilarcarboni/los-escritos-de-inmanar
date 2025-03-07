'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 backdrop-blur-md bg-[#1a1a1a]/80">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-['david_libreregular'] text-[#AE5034] text-4xl md:text-5xl font-bold tracking-tight [text-shadow:_-1px_-1px_0_#fff,_1px_-1px_0_#fff,_-1px_1px_0_#fff,_1px_1px_0_#fff]">
            Mauricio Vargas Ortega
          </h1>
        </motion.div>
        <motion.div 
          className="flex gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link 
            href="/mis-lecturas" 
            className="inline-block px-6 py-3 text-sm font-bold rounded-full bg-[#AE5034] text-zinc-100 font-['david_libreregular'] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#AE5034]/30 border-2 border-transparent"
          >
            Mis lecturas
          </Link>
          <Link 
            href="/mi-obra" 
            className="inline-block px-6 py-3 text-sm font-bold rounded-full bg-[#AE5034] text-zinc-100 font-['david_libreregular'] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#AE5034]/30 border-2 border-transparent"
          >
            Mi obra
          </Link>
          <Link 
            href="/yo" 
            className="inline-block px-6 py-3 text-sm font-bold rounded-full bg-[#AE5034] text-zinc-100 font-['david_libreregular'] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#AE5034]/30 border-2 border-transparent"
          >
            Yo
          </Link>
          <Link 
            href="/" 
            className="inline-block px-6 py-3 text-sm font-bold rounded-full bg-[#933A20] text-zinc-100 font-['david_libreregular'] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#933A20]/30 border-2 border-white/10"
          >
            Inicio
          </Link>
        </motion.div>
      </div>
    </nav>
  );
} 