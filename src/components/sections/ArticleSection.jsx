import img1 from '../../assets/images/Pescado.png'
import img2 from '../../assets/images/Pescador.png'

const articles = [
  {
    id: 1,
    // tag: 'Naturaleza',
    title: '¡Qué Pescados!',
    description: [
        'Somos una boutique de pescados y mariscos ubicada en la ciudad de Chihuahua, Chih.',
        '\n\nContamos con una amplia variedad de pescados y mariscos que son capturados y cultivados para la venta directa en nuestra tienda, con las más estrictas formas de conservación de cadena de frío para mantener siempre la mejor calidad. Además de una variedad de productos semipreparados listos para cocinar en casa. Todos nuestros productos se encuentran empacados al vacío para tu comodidad.',
        '\n\nEn Qué Pescados Market apoyamos la pesca responsable y sustentable, por lo que todos los productos que comercializamos cuentan con su documentación de legitimidad.',
    ],
    image: img1,
    imageAlt: 'pescado fresco',
    
    // href: '#',
  },
  {
    id: 2,
    // tag: 'Aventura',
    title: 'La comunidad',
    description:
  [
      'Para la comunidad del Desemboque, la pesca lo es todo.',
      '\n\nDedicados a esta actividad por más de 50 años.El municipio del Desemboque de Caborca se ubica al noreste del Estado de Sonora, en el corazón del mar de Cortés. En la comunidad, la pesca artesanal es una de las principales fuentes de empleo, dedicándose a esta actividad por más de 53 años. Somos una comunidad de hombres y mujeres que entregan su corazón y trabajo diariamente para que el sabor de nuestro mar llegue hasta tu hogar.',
      '\n\nGracias a nuestra inigualable situación geográfica, el clima de la región y nuestra experiencia, somos orgullosos productores de: Lenguado, baqueta, chano norteño, guitarra, angelito, cholo, jaiba café, caracol chino, tiburón tripa.',
  ],
    image: img2,
    imageAlt: 'Bosque de niebla',
    href: '#',
  },
]

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
)

export default function ArticleSection() {
  return (
    <section className="bg-blue-800">
      {articles.map((article, index) => {
        const isEven = index % 2 === 0
        return (
          <div
            key={article.id}
            className="flex flex-col sm:flex-row min-h-[480px]"
          >
            {/* Imagen */}
            {/* <div className={`w-full sm:w-1/2 overflow-hidden ${isEven ? 'sm:order-first' : 'sm:order-last'}`}>
              <img
                src={article.image}
                alt={article.imageAlt}
                className="w-full h-72 sm:h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div> */}

            <div className={`w-full sm:w-1/2 ${isEven ? 'sm:order-first' : 'sm:order-last'}`}>
            <img
              src={article.image}
              alt={article.imageAlt}
              draggable={false}
              className="w-full h-auto sm:h-full object-contain sm:object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

            {/* Texto */}
            <div className="w-full sm:w-1/2 flex flex-col justify-center px-10 lg:px-20 py-16 bg-blue-800">
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-4">
                {article.tag}
              </span>
              <h2 className="text-5xl lg:text-8xl font-bold text-cyan-500 leading-tight mb-6 animate__animated animate__fadeIn ">
                {article.title}
              </h2>
              <p className="text-white leading-relaxed mb-8 text-justify whitespace-pre-line">
                {article.description}
              </p>
              
              {/* <a href={article.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-500 transition-colors w-fit">
                Leer más
                <ArrowIcon />
              </a> */}
            </div>

          </div>
        )
      })}
    </section>
  )
}