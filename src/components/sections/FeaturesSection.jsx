import icon1 from '../../assets/icons/icono_bote.svg'
import icon2 from '../../assets/icons/icono_camaron.svg'
import icon3 from '../../assets/icons/icono_estrella.svg'
import icon4 from '../../assets/icons/icono_langosta.svg'
import icon5 from '../../assets/icons/icono_ola.svg'
import icon6 from '../../assets/icons/icono_pescado.svg'
import bgPattern from '../../assets/Pattern.svg'


const features = [
  { id: 1, label: 'Abarrotes',  icon: icon1 },
  { id: 2, label: 'Camarones',     icon: icon2 },
  { id: 3, label: 'Especcializados',   icon: icon3 },
  { id: 4, label: 'Varios',    icon: icon4 },
  { id: 5, label: 'Atún',     icon: icon5 },
  { id: 6, label: 'Pescados',icon: icon6 },
]

export default function FeaturesSection() {
  return (
    <section className="relative bg-white overflow-hidden py-10">

     {/* Patrón SVG de fondo */}
    <div
        className="absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
            backgroundImage: `url(${bgPattern})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
    />

      {/* Contenido */}
      <div className="relative mx-auto max-w-5xl px-2 lg:px-2 text-center">

        {/* Título y párrafo */}
        {/* <span className="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-4 block">
          ¿Por qué elegirnos?
        </span> */}
        <h2 className="text-5xl lg:text-7xl font-bold text-blue-800  mb-6 animate__animated animate__fadeInUp">
          Productos
        </h2>
        <p className="text-gray-500 mt-2 text-center text-2xl">
          Para Qué Pescados nuestra calidad es el mayor compromiso. Llevar a tu familia un producto siempre fresco a tu mesa.
        </p>

        {/* Grid de iconos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-2">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="transition-transform duration-300 group-hover:-translate-y-1">
                <img
                  src={feature.icon}
                  alt={feature.label}
                  className="w-64 h64"
                  draggable={false}
                />
              </div>
              <span className="text-2xl font-medium text-gray-700 leading-tight text-center">
                {feature.label}
              </span>
            </div>
          ))}
        </div>

        {/* Botón */}
        {/* <a
          href="#"
          className="inline-flex items-center gap-2 bg-indigo-600 text-white text-sm font-semibold px-8 py-3 rounded-lg hover:bg-indigo-500 transition-colors duration-200"
        >
          Conoce nuestros productos
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a> */}

      </div>
    </section>
  )
}