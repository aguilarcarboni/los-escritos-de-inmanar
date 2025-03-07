import React from 'react'
import '../style.css'
import Link from 'next/link'

export default function Autor() {
  return (
    <>
    <div className="topnav">
    </div>

    <div className="nombre">
      <p> Mauricio Vargas Ortega </p>
    </div>

    <div className="navtext2">
      <Link href="/old/mis-obras">Mis obras</Link>
    </div>

    <div className="active2">
      <Link href="/old/autor">Sobre el autor</Link>
    </div>

    <div className="navtext2">
      <Link href="/old">Inicio</Link>
    </div>

    <div className="mau">
      <img src="mau.jpg" alt="Mauricio Vargas"/>
    </div>

    <div className="bio">
      <p> Mauricio Vargas Ortega (Santa Ana, Costa Rica, enero de 1971). Escritor, investigador y profesor. Estudió Filología española en la Universidad de Costa Rica (UCR), donde obtuvo una Maestría en Literatura latinoamericana. Se ha destacado como poeta, pero la Editorial EUNED publicó en el 2010 su primer libro en prosa Para que la patria no sea el silencio: memorias de Alberto Lorenzo Brenes. Representó a Costa Rica en el Tercer Encuentro Hispanoamericano de Jóvenes Escritores (Alcalá de Henares, España, 1995) y en el IX Festival Internacional de Poesía de El Salvador 2010. Formó parte del grupo literario Urú y fue miembro fundador y director de la revista Fijezas. Sus publicaciones literarias son: Desfigurando Sombras (San José: Líneas Grises, 1994), El Valle de las Ventanas (Santa Ana: Municipalidad de Santa Ana, 1995), Preguntas para Inviernos (San José: EUCR, 1996), La ceniza de los péndulos (San José: Perro Azul, 2001), Entre Nieblas (San José: ECR, 2001), Retratos al Anochecer (San José: EUCR, 2006), Para que la patria no sea el silencio (San José: EUNED, 2010), Fito Páez y la construcción nostálgica de la ciudad (San José: EUCR, 2012), Vivir después del Holocausto (San José: EUNED, 2017), Alegorías del susurro (San José: EUCR: 2020). </p>
    </div>

    </>
  )
} 