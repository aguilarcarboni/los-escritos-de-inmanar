import React from 'react'
import '../style.css'
import Link from 'next/link'

export default function MiObra() {
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

      <div className="fondo"></div>

      <div className="midtext">
        <p>Mi Obra</p>
      </div>

      <div className="suidos">
        <p>La saga de Suidós: espejo y sombra</p>
      </div>

      <div className="suidos2">
        <p>Vior, poderoso rey de Inmanar, espera la llegada de su primogénito. Una milenaria tradición exige que, en la última etapa de gestación, la reina Andra coma las pesuñas sagradas de Suidós, asegurando al hacerlo la protección de los dioses, la fuerza y la sabiduría del guerrero para su hijo, heredero del trono de Inmanar. Suidós, jabalí sagrado, pertenece a los dioses y no a los hombres. Los inmortales, celosos, exigen la ceremonia sangrienta, justamente la noche anterior a la cacería. La soberbia de Vior lo traiciona y decide que la noche le dará la ventaja necesaria. ¿Qué pueden importar los dioses ante la certeza de su mano invicta?</p>
      </div>

      <div className="iandesh">
        <p>El advenimiento de Iandesh</p>
      </div>

      <div className="iandesh2">
        <p>Estaba escrito que del desierto saldría la ruina y la aniquilación de Inmanar. Por siglos los sacerdotes y los adivinos, los exégetas y los iluminados anunciaron el evento sin tiempo que borraría su estirpe de la faz de la tierra. Pero sin tiempo, la misma piedra parece afantasmarse, perderse en el murmullo de la ciudad inmensa. Estaba escrito que la grandeza de Inmanar desaparecería y que las arañas y las lagartijas reinarían ahí, donde reinó el hombre. El horror sin nombre marchó sobre Inmanar y mostró por fin su rostro: El Poderoso Iandesh, como una roja e incontenible tormenta de la muerte.</p>
      </div>
    </>
  )
} 