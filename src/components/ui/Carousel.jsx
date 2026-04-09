import { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import slide1 from '../../assets/images/carousel_1.jpg'
import slide2 from '../../assets/images/carousel_2.jpg'
import franjaBlanca from '../../assets/franjaBlanca.svg'

const slides = [
  {
    id: 1,
    url: slide1,
    title: 'Mariscos Market Chihuahua',
    // subtitle: 'Naturaleza en su estado puro',
  },
  {
    id: 2,
    url: slide2,
    title: 'Mariscos Market Chihuahua',
    // subtitle: 'La calma entre los árboles',
  },

]

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const [show, setShow] = useState(true)

  const goTo = (index) => {
    setShow(false)
    setTimeout(() => {
      setCurrent(index)
      setShow(true)
    }, 300) // coincide con la duración del Transition
  }

  const next = () => goTo((current + 1) % slides.length)
  const prev = () => goTo((current - 1 + slides.length) % slides.length)

  // Auto-avance cada 2 segundos
  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer) // limpieza al desmontar
  }, [current])

  return (
    <div className="relative w-full h-[480px] overflow-hidden bg-gray-900">

      {/* Imagen con Transition de Headless UI */}
      <Transition
        show={show}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <img
          src={slides[current].url}
          alt={slides[current].title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </Transition>

      {/* Overlay degradado */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Texto del slide */}
      <Transition
        show={show}
        enter="transition-all duration-600 delay-100"
        enterFrom="opacity-0 translate-y-4"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all duration-600"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <p className="text-white/70 text-sm font-medium uppercase tracking-widest mb-2">
                {slides[current].subtitle}
            </p>
            <h2 className="text-white text-5xl font-bold drop-shadow-xl/50 ">
                {slides[current].title}
            </h2>
        </div>
      </Transition>

      {/* Botón anterior */}
      <button
        onClick={prev}
        className="z-10 absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white transition-all"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>

      {/* Botón siguiente */}
      <button
        onClick={next}
        className="z-10 absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white transition-all"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>

      {/* Indicadores (dots) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current
                ? 'w-6 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

{/* Franja decorativa inferior */}
      {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none"> */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none translate-y-1/2">
        <img
          src={franjaBlanca}
          alt=""
          aria-hidden="true"
          style={{
            width: '100%',
            height: '100%',
            minWidth: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>

    </div>
  )
}