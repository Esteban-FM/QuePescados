import { Link } from 'react-router-dom'
import useAnimateOnScroll from '../../hooks/useAnimateOnScroll'
import recetas from '../../data/recetas'

const rotaciones = ['-rotate-3', 'rotate-0', 'rotate-3']

export default function RecetasSection() {
  const titulo  = useAnimateOnScroll('animate__fadeInDown')
  const parrafo = useAnimateOnScroll('animate__fadeInUp')
  const grid    = useAnimateOnScroll('animate__fadeIn')

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-4">

        {/* Encabezado */}
        <div className="text-center mb-14">
          <h2
            ref={titulo.ref}
            className={`${titulo.classes} text-5xl lg:text-7xl font-bold text-blue-800 mb-6 animate__animated animate__fadeInUp`}
          >
            Recetas
          </h2>
          <p
            ref={parrafo.ref}
            className={`${parrafo.classes} text-gray-500 mt-2 text-center text-2xl`}
          >
            Hemos elaborado cuidadosamente una selección de deliciosos platos que están repletos de nutrientes y llenos de sabor.
          </p>
        </div>

        {/* Grid de recetas */}
        <div
          ref={grid.ref}
          className={`${grid.classes} grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14`}
        >
          {recetas.map((receta, index) => {
            const posicion = index % 3
            const rotacion = rotaciones[posicion]

            return (
              <Link
                key={receta.id}
                to={`/receta/${receta.id}`}
                className="group flex flex-col items-center gap-3"
              >
                {/* Imagen con rotación y hover */}
                <div
                  className={`
                    w-full overflow-hidden rounded-xl aspect-[4/3]
                    ${rotacion}
                    transition-all duration-500
                    group-hover:rotate-0
                    group-hover:scale-105
                    group-hover:shadow-2xl
                  `}
                >
                  <img
                    src={receta.imagen}
                    alt={receta.nombre}
                    draggable={false}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Nombre debajo de la imagen */}
                <h3 className="text-gray-800 text-sm font-semibold text-center
                               group-hover:text-indigo-600 transition-colors duration-300">
                  {receta.nombre}
                </h3>

              </Link>
            )
          })}
        </div>

      </div>
    </section>
  )
}





// import { Link } from 'react-router-dom'
// import useAnimateOnScroll from '../../hooks/useAnimateOnScroll'

// import tacosbajaImg  from '../../assets/images/recetas/Tacosestilobaja.jpg'
// import aguachilemango from '../../assets/images/recetas/Aguachilealmango.jpg'
// import aguachileneg  from '../../assets/images/recetas/Aguachilenegrodecamaron.jpg'
// import fumet         from '../../assets/images/recetas/Fumetdepescado.jpg'
// import paella        from '../../assets/images/recetas/Paella.jpg'
// import tacosGob      from '../../assets/images/recetas/TacosGobernardor.jpg'
// import aguachilechil from '../../assets/images/recetas/Aguachilechiltepin.jpg'
// import tostadaPulpo  from '../../assets/images/recetas/TostadaPulpo.jpg'
// import clamchowder   from '../../assets/images/recetas/Clamchowder.jpg'
// import atun          from '../../assets/images/recetas/Atúnsellado.jpg'
// import fetuccini     from '../../assets/images/recetas/Fetuccinicamaron.jpg'
// import ceviche       from '../../assets/images/recetas/Cevichedepargo.jpg'
// import tostadaAtun   from '../../assets/images/recetas/Tostadadeatun.jpg'
// import pulpo         from '../../assets/images/recetas/Pulpoalasbrasas.jpg'

// const recetas = [
//   { id: 'tacos-estilo-baja',       nombre: 'Tacos estilo baja',           imagen: tacosbajaImg },
//   { id: 'aguachile-de-mango',      nombre: 'Aguachile de mango',          imagen: aguachilemango },
//   { id: 'aguachile-negro-camaron', nombre: 'Agua chile negro de camarón', imagen: aguachileneg },
//   { id: 'fumet-de-pescado',        nombre: 'Fumet de pescado',            imagen: fumet },
//   { id: 'paella',                  nombre: 'Paella',                      imagen: paella },
//   { id: 'tacos-gobernador',        nombre: 'Tacos gobernador',            imagen: tacosGob },
//   { id: 'aguachile-chiltepin',     nombre: 'Aguachile chiltepin',         imagen: aguachilechil },
//   { id: 'tostada-pulpo',           nombre: 'Tostada Pulpo',               imagen: tostadaPulpo },
//   { id: 'clam-chowder',            nombre: 'Clam chowder',                imagen: clamchowder },
//   { id: 'atun-sellado',            nombre: 'Atún sellado',                imagen: atun },
//   { id: 'fetuccini-alfredo',       nombre: 'Fetuccini Alfredo',           imagen: fetuccini },
//   { id: 'ceviche-de-pargo',        nombre: 'Ceviche de pargo',            imagen: ceviche },
//   { id: 'tostada-de-atun',         nombre: 'Tostada de atún',             imagen: tostadaAtun },
//   { id: 'pulpo-a-las-brasas',      nombre: 'Pulpo a las brasas',          imagen: pulpo },
// ]

// // Rotación por posición dentro del renglón: 0=izq, 1=centro, 2=der
// const rotaciones = ['-rotate-3', 'rotate-0', 'rotate-3']

// export default function RecetasSection() {
//   const titulo  = useAnimateOnScroll('animate__fadeInDown')
//   const parrafo = useAnimateOnScroll('animate__fadeInUp')
//   const grid    = useAnimateOnScroll('animate__fadeIn')

//   return (
//     <section className="bg-white py-10">
//       <div className="mx-auto max-w-7xl px-6 lg:px-4">

//         {/* Encabezado */}
//         <div className="text-center mb-14">
//           <h2
//             ref={titulo.ref}
//             className={`${titulo.classes} text-5xl lg:text-7xl font-bold text-blue-800  mb-6 animate__animated animate__fadeInUp`}
//           >
//             Recetas
//           </h2>
//           <p
//             ref={parrafo.ref}
//             className={`${parrafo.classes} text-gray-500 mt-2 text-center text-2xl`}
//           >
//             Hemos elaborado cuidadosamente una selección de deliciosos platos que están repletos de nutrientes y llenos de sabor.
//           </p>
//         </div>

//         {/* Grid de recetas */}
//         <div
//           ref={grid.ref}
//           className={`${grid.classes} grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14`}
//         >
//           {recetas.map((receta, index) => {
//             const posicion = index % 3
//             const rotacion = rotaciones[posicion]

//             return (
//               <Link
//                 key={receta.id}
//                 to={`/receta/${receta.id}`}
//                 className="group flex flex-col items-center gap-3"
//               >
//                 {/* Imagen con rotación y hover */}
//                 <div
//                   className={`
//                     w-full overflow-hidden rounded-xl aspect-[4/3]
//                     ${rotacion}
//                     transition-all duration-500
//                     group-hover:rotate-0
//                     group-hover:scale-105
//                     group-hover:shadow-2xl
//                   `}
//                 >
//                   <img
//                     src={receta.imagen}
//                     alt={receta.nombre}
//                     draggable={false}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                 </div>

//                 {/* Nombre debajo de la imagen */}
//                 <h3 className="text-gray-800 text-sm font-semibold text-center
//                                group-hover:text-indigo-600 transition-colors duration-300">
//                   {receta.nombre}
//                 </h3>

//               </Link>
//             )
//           })}
//         </div>

//       </div>
//     </section>
//   )
// }