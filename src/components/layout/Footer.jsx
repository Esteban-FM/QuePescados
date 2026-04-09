import { FaFacebook, FaInstagram } from 'react-icons/fa'
import footerPattern from '../../assets/footerPattern.svg'
import { useNavigate, useLocation } from 'react-router-dom'

const links = [
  { name: 'Inicio',    href: '#' },
  { name: 'Nosotros', href: '#Nosotros' },
  { name: 'Recetas', href: '#Recetas' },
  { name: 'Ubicaciones',   href: '#Ubicaciones' },
  // { name: 'Contacto',  href: '#Contacto' },
]

export default function Footer() {

const navigate = useNavigate()
const location = useLocation()

const handleScroll = (e, href) => {
  e.preventDefault()
  if (href === '#') {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return
  }
  if (location.pathname !== '/') {
    navigate('/')
    setTimeout(() => {
      const id = href.replace('#', '')
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 300)
    return
  }
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

  return (
   <footer className="relative overflow-hidden">

  {/* SVG de fondo */}
  <img
    src={footerPattern}
    alt=""
    aria-hidden="true"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay para legibilidad */}
  <div className="absolute inset-0" />

      {/* Contenido */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-4">

        {/* Links + Redes sociales */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-shadow-md  gap-8 mb-16">

          {/* Navegación */}
          <nav className="flex flex-wrap justify-center sm:justify-start gap-6">
            {links.map((link) => (
            <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-4lx font-medium text-white hover:text-indigo-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Redes sociales */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/quepescadosmarket"
              aria-label="Facebook"
              className="text-white hover:text-indigo-600 transition-colors"
            >
              <FaFacebook className="w-10 h-10" />
            </a>
            <a
              href="https://www.instagram.com/quepescadosmarket/"
              aria-label="Instagram"
              className="text-white hover:text-pink-500 transition-colors"
            >
              <FaInstagram className="w-10 h-10" />
            </a>
          </div>

        </div>

        <div>
        {/* Línea divisora */}
        <hr className="border-white mb-2 border-2" />

        {/* Párrafo inferior */}
        <p className="text-center text-xs text-white leading-relaxed">
          Qué Pescados ® 2023 Todos los derechos reservados. Web Graphö Asesores Creativos
          {' '}|{' '}
          <a href="#" className="underline hover:text-indigo-600 transition-colors">
            Aviso de privacidad
          </a>
        </p>

        </div>
      </div>
    </footer>
  )
}