import proveedor1 from '../../assets/images/proveedores/mercamar.png'
import proveedor2 from '../../assets/images/proveedores/sociedad.png'
import proveedor3 from '../../assets/images/proveedores/bonatto.png'
import proveedor4 from '../../assets/images/proveedores/hermanos.png'
import proveedor5 from '../../assets/images/proveedores/dolores.png'
import proveedor6 from '../../assets/images/proveedores/dolores_atun.png'
import proveedor7 from '../../assets/images/proveedores/pinsa.png'
import proveedor8 from '../../assets/images/proveedores/rosso.png'
import proveedor9 from '../../assets/images/proveedores/earth.png'
import proveedor10 from '../../assets/images/proveedores/bajamar.png'
import proveedor11 from '../../assets/images/proveedores/aniversario.png'
import proveedor12 from '../../assets/images/proveedores/fresh.png'
import proveedor13 from '../../assets/images/proveedores/iik.png'
import proveedor14 from '../../assets/images/proveedores/abarrotes.png'
import bgPattern from '../../assets/Pattern.svg'


const features = [
  { id: 1,  icon: proveedor1},
  { id: 2,  icon: proveedor2 },
  { id: 3,  icon: proveedor3 },
  { id: 4,  icon: proveedor4 },
  { id: 5,  icon: proveedor5 },
  { id: 6,  icon: proveedor6 },
  { id: 7,  icon: proveedor7 },
  { id: 8,  icon: proveedor8 },
  { id: 9,  icon: proveedor9 },
  { id: 10, icon: proveedor10 },
  { id: 11, icon: proveedor11 },
  { id: 12, icon: proveedor12 },
  { id: 13, icon: proveedor13 },
  { id: 14, icon: proveedor14 },
]

export default function FeaturesSection() {
  return (
    <section className="relative bg-white overflow-hidden py-10">


      {/* Contenido */}
      <div className="relative mx-auto max-w-5xl px-2 lg:px-2 text-center">

        <h2 className="text-5xl lg:text-7xl font-bold text-blue-800  mb-10 animate__animated animate__ animate__fadeInUp">
          Proveedores
        </h2>
  
        {/* Grid de iconos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8 mb-0 p-0">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center justify-center gap-3 group"
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


      </div>
    </section>
  )
}