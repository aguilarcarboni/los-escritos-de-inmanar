'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring, MotionValue } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect } from "react";

// Desert theme colors
const colors = {
  primary: "#FF9100",
  sand: "#E6D5AC",
  sandLight: "#F5E6CA",
  sandDark: "#C4B080",
  papyrus: "#EDE0C9",
  accent: "#B8860B",
  text: "#2C1810"
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

interface ParallaxTextProps {
  children: string;
  baseVelocity?: number;
}

export default function Home() {

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sandLight to-sand" style={{ backgroundColor: colors.sandLight }}>
      {/* Desert pattern overlay */}
      <div 
        className="fixed inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L17.515 10.485 18.93 11.9l7.9-7.9h-2.83zm5.656 0L23.172 12.485 24.586 13.9l7.9-7.9h-2.83zm5.656 0L28.828 14.485 30.242 15.9l7.9-7.9h-2.83zM32 0l-9.9 9.9 1.415 1.415 7.9-7.9h.585zm5.657 0L27.9 9.9l1.415 1.415L37 3.828V0h.657z' fill='%23000000' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      <motion.div 
        ref={targetRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity, scale, y }}
      >
        {/* Desert dunes background */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/dunes-pattern.svg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* Sand particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 3 + 2}px`,
                height: `${Math.random() * 3 + 2}px`,
                backgroundColor: i % 3 === 0 ? colors.accent : i % 2 === 0 ? colors.sandDark : colors.sand,
                boxShadow: `0 0 ${Math.random() * 6 + 4}px ${colors.accent}`,
                filter: 'blur(0.5px)'
              }}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: Math.random() * 0.5 + 0.3,
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{
                x: [null, Math.random() * window.innerWidth],
                y: [null, Math.random() * window.innerHeight],
                opacity: [null, Math.random() * 0.5 + 0.3],
                scale: [null, Math.random() * 0.5 + 0.5]
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            />
          ))}
        </div>

        <motion.div 
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >

          <div className="font-['Cinzel'] relative text-center text-papyrus text-[#FF9100] z-10 -mt-32 pb-20" style={{ color: colors.primary, display: 'flex', justifyContent: 'center', gap: '10px', justifyItems: 'center', alignItems: 'center' }}>
            <Link href="/" className="text-text hover:text-primary transition-colors">
              Inicio
            </Link>
            <Link href="/autor" className="text-text hover:text-primary transition-colors">
              Autor
            </Link>
            <Link href="/mis-obras" className="text-text hover:text-primary transition-colors">
              Mis Obras
            </Link>
          </div>


          <motion.h1 
            className="font-['Cinzel'] text-[clamp(3rem,8vw,6rem)] font-bold text-center leading-tight tracking-wider"
            style={{
              color: colors.text,
              textShadow: `0 2px 4px ${colors.sandDark}, 0 0 20px ${colors.accent}40`
            }}
          >
            Los escritos de Inmanar
          </motion.h1>
          <motion.p
            className="mt-6 text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: colors.text }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Un viaje épico a través de las leyendas y misterios de un mundo ancestral
          </motion.p>
          <motion.div 
            className="mt-12"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="/mis-obras"   
              className="inline-block px-10 py-4 text-2xl font-bold rounded-xl bg-white text-papyrus"
            >
              <p className="text-[#FF9100]" style={{ color: colors.primary}}> Ver más</p>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="relative z-20 max-w-7xl mx-auto px-6 py-20"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div 
          className="mb-20 p-8 md:p-12 rounded-3xl backdrop-blur-xl border border-sandDark/20 shadow-2xl transition-all duration-300"
          style={{
            background: `linear-gradient(135deg, ${colors.papyrus}90, ${colors.sandLight}90)`,
            boxShadow: `0 10px 30px -5px ${colors.sandDark}30`
          }}
          variants={fadeIn}
        >
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <motion.h2 
                className="font-['Cinzel'] text-4xl md:text-5xl font-bold mb-6 tracking-wide leading-tight"
                style={{ color: colors.text }}
                whileHover={{ scale: 1.02 }}
              >
                La saga de Suidós: espejo y sombra
              </motion.h2>
              <p className="text-lg text-text/90 leading-relaxed mb-8" style={{ color: colors.text }}>
                Vior, poderoso rey de Inmanar, espera la llegada de su primogénito. Una milenaria tradición exige que, 
                en la última etapa de gestación, la reina Andra coma las pesuñas sagradas de Suidós, asegurando al hacerlo 
                la protección de los dioses, la fuerza y la sabiduría del guerrero para su hijo, heredero del trono de Inmanar...
              </p>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-sandDark rounded-full blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                <a 
                  href="/mis-obras#suidos" 
                  className="relative inline-block px-8 py-4 text-base font-bold rounded-full bg-gradient-to-r from-accent to-sandDark text-papyrus transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    textShadow: `0 1px 2px ${colors.text}80`
                  }}
                >
                  Leer más
                </a>
              </motion.div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-xl"></div>
              <motion.div
                className="w-full h-[300px] md:h-[400px] rounded-xl bg-[url('/saga.jpg')] bg-cover bg-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{
                  boxShadow: `0 10px 30px -5px ${colors.sandDark}30`
                }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="mb-20 p-8 md:p-12 rounded-3xl backdrop-blur-xl border border-sandDark/20 shadow-2xl transition-all duration-300"
          style={{
            background: `linear-gradient(135deg, ${colors.papyrus}90, ${colors.sandLight}90)`,
            boxShadow: `0 10px 30px -5px ${colors.sandDark}30`
          }}
          variants={fadeIn}
        >
          <div className="flex flex-col md:flex-row-reverse gap-12">
            <div className="flex-1">
              <motion.h2 
                className="font-['Cinzel'] text-4xl md:text-5xl font-bold mb-6 tracking-wide leading-tight"
                style={{ color: colors.text }}
                whileHover={{ scale: 1.02 }}
              >
                El advenimiento de Iandesh
              </motion.h2>
              <p className="text-lg text-text/90 leading-relaxed mb-8" style={{ color: colors.text }}>
                Estaba escrito que del desierto saldría la ruina y la aniquilación de Inmanar. Por siglos los sacerdotes 
                y los adivinos, los exégetas y los iluminados anunciaron el evento sin tiempo que borraría su estirpe de 
                la faz de la tierra...
              </p>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-sandDark rounded-full blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                <a 
                  href="/mis-obras#iandesh" 
                  className="relative inline-block px-8 py-4 text-base font-bold rounded-full bg-gradient-to-r from-accent to-sandDark text-papyrus transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    textShadow: `0 1px 2px ${colors.text}80`
                  }}
                >
                  Leer más
                </a>
              </motion.div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-xl"></div>
              <motion.div
                className="w-full h-[300px] md:h-[400px] rounded-xl bg-[url('/iandesh.jpg')] bg-cover bg-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{
                  boxShadow: `0 10px 30px -5px ${colors.sandDark}30`
                }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
