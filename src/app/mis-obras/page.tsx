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

interface Work {
  id: number
  image: string
  title: string
  poem: string
}

const works: Work[] = [
  {
    id: 1,
    image: '/desfigurando.jpg',
    title: 'Hay distancias',
    poem: `Hay distancias que nos reafirman plenamente
en las arenas perdidas de la tarde,
y nos identifican en la amarillez eterna
de las cartas incesantes del olvido.

Hay distancias calladas y empedradas de lunas,
que nunca supieron ignorar lo doloroso
de una mentira involuntaria.

Son distancias que, siempre en tus ojos,
serpentean en el brazo secreto de la lluvia.

Hay distancias ingenuas e inlogrables,
que se posan eternas en lo cotidiano de tu ausencia.`
  },
  {
    id: 2,
    image: '/valle.jpg',
    title: 'El sol estuvo aquí',
    poem: `El sol estuvo aquí,
imitando ventanas en todas las tardes.
Yo te quise tanto.
Alargado en las hojas de tus poemas.
La cabeza sin el odio,
ese odio tuyo de la boina de claveles
que nos obliga la muerte.
He guardado cementerios
para devolverte la cruz que me has dado,
esta loza de gritos con la que duermo
como una cobija cegada de fríos.

Hay un amor que se me pudre en las manos
cuando renegás de las sombras al retomar el día.
Sé que hay una fiera en la otra esquina
que me obligará a dejarte.

Santa Ana permanecerá sola.
Las mariposas amarillas reinventarán los estantes.
La hierba impregnará las soledades perdidas.
Qué difícil será, a pesar de nosotros mismos,
dejar de dibujarnos para siempre en los ojos de la lluvia.`
  },
  {
    id: 3,
    image: '/preguntas.jpg',
    title: 'Nunca me habían sobrado tanto las cosas',
    poem: `Nunca me habían sobrado tanto las cosas.
Las caricias en tardes de reclusiones por la lluvia;
los senderos de saliva que me recuerdan ese olor
extraño en mi ropa,
que todo lo sigue procreando entre las sábanas.
Mi sexo, insuficiente además
para tanto amor que me sobra
y se desborda de mi cuarto,
con esa música justa de lo incontenible.
Los zapatos me sobran.
Los teléfonos me gritan
todo lo que de vos saben y se callan.
Los relojes son lechuzas de sangre,
bestias inmundas con cabezas de niños en las alas;
despreciables y cotidianas señales que me muestran
que entre un punto y otro
pueden erigirse todas las distancias.
Veo también muros,
monstruosas anémonas de escarcha.
Pájaros que se comieron mi lengua
en la última redada del odio.
Amigos que se marchan y no quiero llamarlos.

Porque hoy me sobra tanto
que me consumo en el último,
en el más mínimo,
en el insalvable charco más pequeño de tu ausencia.`
  },
  {
    id: 4,
    image: '/pendulos.jpg',
    title: 'Se me ha secado el viento',
    poem: `Se me ha secado el viento,
el alquitrán de las manos,
el porvenir de tu sombra
en la pared de enfrente.
Ya no proyecta el sonido de mi padre
mi miedo,
la absoluta impotencia de faroles inciertos.
Ya no se asombra la luna
entre los huesos de Lorca sobre el piano,
ni tu llanto en el teléfono y mi llanto.
Como se seca todo
mis labios se secaron
y respiro tan solo sangre para respirar tu risa.
Que estoy completamente solo
al otro lado del teléfono
y por primera vez tengo miedo.`
  },
  {
    id: 5,
    image: '/nieblas.jpg',
    title: 'Por perseguir a los gatos',
    poem: `Por perseguir a los gatos
entre un grito de mis sueños,
por acompañarte sin calma.
Por no saber con exactitud
la sinfonía de tu dicha,
pero en cambio por recomenzar
noche a noche su misterio.
Por esperarte en la tarde y,
cuando ya la luz vuelve a ser luna,
seguir escribiéndote en la oscuridad.`
  },
  {
    id: 6,
    image: '/retratos.jpg',
    title: 'Jamás el hombre encontraría',
    poem: `Jamás el hombre encontraría
mayor belleza en lo abstracto
que dibujó en sus ojos,
que conformó en sus ojos
el éxodo inevitable de los sistemas.

Jamás se necesitaría
para plasmar su sombra
tanta ciencia ignorada,
tantos genios multiformes que en ella habitan.
Amenazantes, duros, amenazantes.

Jamás mayor tristeza
se volvería océano ante mis ojos.
Mis ojos quietos de navegante.

Jamás otra voz como la suya
partiría instantes con hacha inmensa
en esta ciénaga de la sonrisa.
Mi sonrisa dulce de saberme humano
y no serlo entonces cuando te miro.

Jamás tu rostro, tus pies, tus manos,
tu impertinencia de asir los astros
y transformarlos en la palabra.
Tu sabiduría profética de adivinarme
y recorrer sola los mil desiertos de cada cosa.

Jamás podría…
Lejos del infierno de tu sonrisa.`
  }
]

export default function MiObra() {
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
            Mis Obras
          </motion.h1>

          <div className="flex flex-col space-y-12">
            {works.map((work) => (
              <div key={work.id} className="flex flex-col space-y-4">
                <h2 
                  className="text-2xl font-['Cinzel'] font-bold"
                  style={{ color: colors.text }}
                >
                  {work.title}
                </h2>
                <pre 
                  className="font-davidLibre text-lg whitespace-pre-wrap"
                  style={{ color: colors.text }}
                >
                  {work.poem}
                </pre>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}