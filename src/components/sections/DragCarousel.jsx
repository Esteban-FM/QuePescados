import { useRef, useState } from 'react'

// Reemplaza estas URLs con tus imágenes locales
import img1 from '../../assets/images/Productocamaron.png'
import img2 from '../../assets/images/Productocazon.png'
import img3 from '../../assets/images/Productocubos_de_atun.png'
import img4 from '../../assets/images/Productoempanadas.png'
import img5 from '../../assets/images/Productomedallon_atun.png'
import img6 from '../../assets/images/Productosalmon.png'
import img7 from '../../assets/images/Productotilapia_empanizada.png'
import img8 from '../../assets/images/Productotilapia.png'
import img9 from '../../assets/images/Productototoaba.png'

const images = [
  { id: 1, src: img1, alt: 'Camaron' },
  { id: 2, src: img2, alt: 'Cazón' },
  { id: 3, src: img3, alt: 'Cubos de atún' },
  { id: 4, src: img4, alt: 'Empanadas' },
  { id: 5, src: img5, alt: 'Medallon de atún' },
  { id: 6, src: img6, alt: 'Salmón' },
  { id: 7, src: img7, alt: 'Tilapia Empanizada' },
  { id: 8, src: img8, alt: 'Tilapia' },
  { id: 9, src: img9, alt: 'Totoaba' },
]

// Duplicamos las imágenes para el efecto circular infinito
const infiniteImages = [...images, ...images, ...images]

export default function DragCarousel() {
  const trackRef = useRef(null)

  // Estado del drag
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  // Para detectar si fue click o drag (evitar abrir imágenes al arrastrar)
  const [dragged, setDragged] = useState(false)

  // ── Mouse events ──────────────────────────────────────────
  const onMouseDown = (e) => {
    isDragging.current = true
    startX.current = e.pageX - trackRef.current.offsetLeft
    scrollLeft.current = trackRef.current.scrollLeft
    setDragged(false)
    trackRef.current.style.cursor = 'grabbing'
  }

  const onMouseMove = (e) => {
    if (!isDragging.current) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    const distance = x - startX.current
    if (Math.abs(distance) > 5) setDragged(true)
    trackRef.current.scrollLeft = scrollLeft.current - distance
    checkInfiniteScroll()
  }

  const onMouseUp = () => {
    isDragging.current = false
    trackRef.current.style.cursor = 'grab'
  }

  // ── Touch events (mobile) ──────────────────────────────────
  const onTouchStart = (e) => {
    startX.current = e.touches[0].pageX - trackRef.current.offsetLeft
    scrollLeft.current = trackRef.current.scrollLeft
  }

  const onTouchMove = (e) => {
    const x = e.touches[0].pageX - trackRef.current.offsetLeft
    const distance = x - startX.current
    trackRef.current.scrollLeft = scrollLeft.current - distance
    checkInfiniteScroll()
  }

  // ── Lógica circular infinita ───────────────────────────────
  // Las imágenes están triplicadas: [copia1][ORIGINAL][copia2]
  // Cuando llegas a los extremos, saltas silenciosamente al centro
  const checkInfiniteScroll = () => {
    const el = trackRef.current
    const third = el.scrollWidth / 3

    if (el.scrollLeft < third * 0.3) {
      // Llegó muy al inicio → salta al centro sin animación
      el.scrollLeft += third
    } else if (el.scrollLeft > third * 2.1) {
      // Llegó muy al final → salta al centro sin animación
      el.scrollLeft -= third
    }
  }

  // Posición inicial al centro del track (el bloque del medio)
  const initScroll = (el) => {
    if (el && el.scrollLeft === 0) {
      el.scrollLeft = el.scrollWidth / 3
    }
  }

  return (
    <section className="bg-white py-16 hide-scroll">

      {/* Encabezado de la sección */}
      <div className="mx-auto max-w-7xl px-4 mb-10">
        <h1 className="text-7xl font-bold text-blue-800 text-center animate__animated animate__fadeInUp">¡Qué Pescados!</h1>
        <p className="text-gray-500 mt-2 text-center text-2xl">
          Encuentra los mejores productos del mar en ¡Que pescados!
        </p>
      </div>

      {/* Track del carrusel */}
      <div
        ref={(el) => {
          trackRef.current = el
          initScroll(el)
        }}
        className="flex gap-4 overflow-x-scroll px-8 select-none  hide-scroll"

        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
      >
        {/* Oculta scrollbar en Chrome/Safari con una clase inline */}
        <style>{`.hide-scroll::-webkit-scrollbar { display: none; }`}</style>

        {infiniteImages.map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-56 h-64 rounded-2xl overflow-hidden  
                         duration-300 group"
          >
            <img
              src={img.src}
              alt={img.alt}
              draggable={false}  // evita el drag nativo del browser
              className={`w-full h-full object-cover transition-transform duration-500
                         ${!dragged ? 'group-hover:scale-105' : ''}`}
            />
          </div>
        ))}
      </div>

    </section>
  )
}