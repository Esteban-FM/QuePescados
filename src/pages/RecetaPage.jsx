import { useParams, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import logoIcon from '../assets/icons/Logo_icon.svg'
import { useEffect } from 'react'
import recetas from '../data/recetas'
import franjaReceta from '../assets/franjaReceta.svg'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

export default function RecetaPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const receta = recetas.find(r => r.id === id)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [id])

  if (!receta) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Receta no encontrada</h1>
          <button
            onClick={() => navigate('/')}
            className="text-indigo-600 hover:text-indigo-500 font-medium"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    )
  }

  let stepCounter = 0

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Helmet>
      <title>{receta.nombre} — ¡Qué Pescados!</title>
      <link rel="icon" type="image/svg+xml" href={logoIcon} />
      </Helmet>

      {/* Hero */}
      <div className="relative w-full py-16 overflow-hidden mb-10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src={franjaReceta}
            alt=""
            aria-hidden="true"
            style={{
              width: '100%',
              height: '100%',
              minWidth: '100%',
              minHeight: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 sm:px-12">
          <div className="flex flex-col sm:flex-row items-center gap-10 sm:gap-16">

            {/* Imagen */}
            <div className="w-full sm:w-1/2 flex justify-center py-6">
              <div className="group -rotate-3 hover:rotate-0 hover:scale-105
                             shadow-2xl rounded-2xl w-full max-w-md
                             transition-all duration-500 cursor-pointer">
                <img
                  src={receta.imagen}
                  alt={receta.nombre}
                  draggable={false}
                  className="w-full h-auto rounded-2xl object-cover
                             group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Título */}
            <div className="w-full sm:w-1/2 text-center sm:text-left">
              <h1 className="text-5xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4">
                {receta.nombre}
              </h1>
              <p className="text-white text-md font-bold porciones rounded-lg flex justify-center content-center px-16">{receta.porciones}</p>
            </div>

          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="mx-auto max-w-6xl px-6 sm:px-12 pb-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* Ingredientes */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-blue-600 mb-10 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-indigo-100 text-black flex items-center justify-center text-xl font-bold flex-shrink-0">
                1
              </span>
              Ingredientes
            </h2>
            <ul className="space-y-1 mb-10">
              {receta.ingredientes.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-black text-sm leading-relaxed">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Instrucciones */}
          <div className="lg:w-1/2 space-y-10">
              {receta.instrucciones.map((seccion, si) => {
                if (!seccion || !seccion.pasos) return null
                return (
                  <div key={si}>
                    <h2 className="text-4xl font-bold text-blue-600 mb-10 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-full bg-indigo-100 text-black
                                      flex items-center justify-center text-xl font-bold flex-shrink-0">
                        {si + 2}
                      </span>
                      {seccion.titulo}
                    </h2>
                    <ol className="space-y-2 mb-6">
                      {seccion.pasos.map((paso, pi) => {
                      stepCounter++
                      const num = stepCounter
                      return (
                        <li key={pi} className="flex items-start gap-4">
                          <span className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-indigo-300
                                           text-indigo-500 flex items-center justify-center text-xs font-bold">
                            {num}
                          </span>
                          <p className="text-gray-600 text-sm leading-relaxed pt-0.5">{paso}</p>
                        </li>
                      )
                    })}
                  </ol>
                  {si < receta.instrucciones.length - 1 && (
                    <hr className="border-gray-100 mt-6" />
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}