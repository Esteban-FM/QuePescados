import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.svg'

const links = [
  { name: 'Inicio',      href: '#' },
  { name: 'Nosotros',    href: '#Nosotros' },
  { name: 'Recetas',     href: '#Recetas' },
  { name: 'Ubicaciones', href: '#Ubicaciones' },
  // { name: 'Contacto',    href: '#Contacto' },
]

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleScroll = (e, href) => {
    e.preventDefault()

    // Si es Inicio, sube al top
    if (href === '#') {
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 300)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      return
    }

    const id = href.replace('#', '')

    // Si estamos en una página de receta, navega a / primero y luego hace scroll
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 300)
      return
    }

    // Si ya estamos en /, solo hace scroll
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-30 justify-between items-center">

              {/* Logo */}
              <img src={logo} alt="MiApp" className="h-30 w-auto p-2" />

              {/* Links desktop */}
              <div className="hidden sm:flex gap-8">
                {links.map(link => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-3xl font-medium text-blue-600 hover:text-indigo-600 transition-colors">
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Botón hamburguesa mobile */}
              <Disclosure.Button className="sm:hidden p-2 rounded-md text-blue-400 hover:text-blue-700">
                {open
                  ? <XMarkIcon className="h-6 w-6" />
                  : <Bars3Icon className="h-6 w-6" />
                }
              </Disclosure.Button>
            </div>
          </div>

          {/* Menú mobile */}
          <Disclosure.Panel className="sm:hidden border-t border-gray-100 px-4 py-3 space-y-1">
            {links.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block text-2xl font-medium text-blue-700 hover:text-indigo-600 py-2 text-center">
                {link.name}
              </a>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}



