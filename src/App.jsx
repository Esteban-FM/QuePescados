import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Carousel from './components/ui/Carousel'
import DragCarousel from './components/sections/DragCarousel'
import ArticleSection from './components/sections/ArticleSection'
import FeaturesSection from './components/sections/FeaturesSection'
import LogoSection from './components/sections/LogoSection'
import MapSection from './components/sections/MapSection'
import RecetasSection from './components/sections/RecetasSection'
import Division from './components/ui/Divisor'
import DivisionNosotros from './components/ui/DivisorNosotros'
import RecetaPage from './pages/RecetaPage'
import { Helmet } from 'react-helmet-async'
import logoIcon from './assets/icons/Logo_icon.svg'
import Chatbot from  './components/ui/Chatwidget'

function Home() {
  return (
    <>
    {/* Nombre e icono de la pagina */}
    <Helmet>
        <title>¡Qué Pescados!</title>
        <link rel="icon" type="image/svg+xml" href={logoIcon} />
      </Helmet>

      {/* <Navbar /> */}
      <div id="Inicio"><Navbar/></div>
      <Carousel />
      <div id="Productos"><DragCarousel /></div>
      <div id="Nosotros"><ArticleSection /></div>
      <DivisionNosotros/>
      <div id="Recetas"><RecetasSection /></div>
      <FeaturesSection />
      <div id="Ubicaciones"><MapSection /></div>
      <LogoSection />
      <Division/>
      <Footer />
      <Chatbot />

     
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/receta/:id" element={<RecetaPage />} />
    </Routes>
  )
}


// import { Routes, Route } from 'react-router-dom'
// import Navbar from './components/layout/Navbar'
// import Carousel from './components/ui/Carousel'
// import DragCarousel from './components/sections/DragCarousel'
// import ArticleSection from './components/sections/ArticleSection'
// import FeaturesSection from './components/sections/FeaturesSection'
// import MapSection from './components/sections/MapSection'
// import RecetasSection from './components/sections/RecetasSection'
// import RecetaPage from './pages/RecetaPage'
// import Footer from './components/layout/Footer'


// function Home() {
//   return (
//     <>
//       <div id="inicio"><Carousel /></div>
//       <div id="productos"><DragCarousel /></div>
//       <div id="Nosotros"><ArticleSection /></div>
//       <FeaturesSection />
//       <div id="Recetas"><RecetasSection /></div>
//       <div id="Ubicaciones"><MapSection /></div>
//     </>
//   )
// }


// export default function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/receta/:id" element={<RecetaPage />} />
//       </Routes>
//       <Footer />
//     </>
//   )
// }






// export default function App() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div id="Inicio">
//       <Navbar />
//       </div>
//         <Carousel />
//       <DragCarousel />
//       <div id='Nosotros'>
//         <ArticleSection />
//       </div>
//       <FeaturesSection />
//       <div id='Ubicaciones'>
//         <MapSection />
//       </div>
//       <Footer />




      {/* <main className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Bienvenido a MiApp
        </h1>
        <p className="text-lg text-gray-500 mb-8">
          Componentes reutilizables con React + Tailwind + Headless UI
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="primary" size="lg">Empezar gratis</Button>
          <Button variant="secondary" size="lg">Ver demo</Button>
        </div>
      </main> */}


//     </div>
//   )
// }