'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

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

export default function Yo() {
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
        className="relative z-20 max-w-4xl mx-auto px-6 py-20"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <motion.div 
          className="p-8 md:p-12 rounded-3xl backdrop-blur-xl border border-sandDark/20 shadow-2xl"
          style={{
            background: `linear-gradient(135deg, ${colors.papyrus}90, ${colors.sandLight}90)`,
            boxShadow: `0 10px 30px -5px ${colors.sandDark}30`
          }}
        >
          <motion.h1 
            className="font-['Cinzel'] text-4xl font-bold text-center mb-12 tracking-wider"
            style={{
              color: colors.text,
              textShadow: `0 2px 4px ${colors.sandDark}, 0 0 20px ${colors.accent}40`
            }}
          >
            Mauricio Vargas Ortega
          </motion.h1>
          
          <div className="relative w-full aspect-square max-w-xl mx-auto mb-12">
            <motion.div
              className="relative w-full h-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/mau.jpg"
                alt="Mauricio Vargas"
                fill
                className="object-cover rounded-xl shadow-xl"
                priority
                style={{
                  boxShadow: `0 10px 30px -5px ${colors.sandDark}30`
                }}
              />
            </motion.div>
          </div>

          <motion.div 
            className="prose prose-lg max-w-none"
            variants={fadeIn}
          >
            <p className="text-lg leading-relaxed font-davidLibre" style={{ color: colors.text }}>
              Mauricio Vargas Ortega (Santa Ana, Costa Rica, enero de 1971). Escritor, investigador y profesor. 
              Estudió Filología española en la Universidad de Costa Rica (UCR), donde obtuvo una Maestría en Literatura latinoamericana. 
              Se ha destacado como poeta, pero la Editorial EUNED publicó en el 2010 su primer libro en prosa Para que la patria no sea el silencio: 
              memorias de Alberto Lorenzo Brenes. Representó a Costa Rica en el Tercer Encuentro Hispanoamericano de Jóvenes Escritores 
              (Alcalá de Henares, España, 1995) y en el IX Festival Internacional de Poesía de El Salvador 2010. Formó parte del grupo 
              literario Urú y fue miembro fundador y director de la revista Fijezas. Sus publicaciones literarias son: Desfigurando Sombras 
              (San José: Líneas Grises, 1994), El Valle de las Ventanas (Santa Ana: Municipalidad de Santa Ana, 1995), Preguntas para Inviernos 
              (San José: EUCR, 1996), La ceniza de los péndulos (San José: Perro Azul, 2001), Entre Nieblas (San José: ECR, 2001), 
              Retratos al Anochecer (San José: EUCR, 2006), Para que la patria no sea el silencio (San José: EUNED, 2010), 
              Fito Páez y la construcción nostálgica de la ciudad (San José: EUCR, 2012), Vivir después del Holocausto (San José: EUNED, 2017), 
              Alegorías del susurro (San José: EUCR: 2020).
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}