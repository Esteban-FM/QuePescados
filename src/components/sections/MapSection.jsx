import { useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api'
import pinIcon from '../../assets/images/pescados_marker.png'
import sucursal1Img from '../../assets/images/sucursal1.png'
import sucursal2Img from '../../assets/images/sucursal2.png'

const sucursales = [
  {
    id: 1,
    nombre: 'Sucursal Centro',
    direccion: 'C. 4a 2417, Bolívar, Zona Centro, 31000 Chihuahua, Chih.',
    // horario: 'Lun–Sáb 8:00am – 8:00pm',
    telefono: '+526144664881',
    imagen: sucursal1Img,
    position: { lat: 28.630295966216877, lng: -106.06977200151165 },

  },
  {
    id: 2,
    nombre: 'Sucursal Norte',
    direccion: 'Plaza Comercial Cimarron, Av. Francisco Villa 6107 Local 1 C Col, Jardines de San Francisco, 31115 Chihuahua',
    // horario: 'Lun–Sáb 8:00am – 8:00pm',
    telefono: '6145982559',
    imagen: sucursal2Img,
    position: { lat: 28.66514569447824, lng: -106.13230999073767 },
  },
]

const mapCenter = { lat: 28.6500, lng: -106.1000 }

const mapStyles = [
  { featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'off' }] },
  { featureType: 'transit', stylers: [{ visibility: 'off' }] },
]

export default function MapSection() {
  const [selected, setSelected] = useState(null)

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY,
  })

  if (!isLoaded) {
    return (
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center text-gray-400">
          Cargando mapa...
        </div>
      </section>
    )
  }

  return (
    <section className="bg-gray-50 py-8">
      <div className="mx-auto max-width px-2 sm:px-6 lg:px-8">

        {/* Encabezado */}
        {/* <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Nuestras sucursales</h2>
          <p className="mt-2 text-gray-500">Encuéntranos en dos ubicaciones en Chihuahua</p>
        </div> */}

        {/* Mapa */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '520px' }}
            center={mapCenter}
            zoom={13}
            options={{
              styles: mapStyles,
              disableDefaultUI: false,
              zoomControl: true,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: true,
            }}
            onClick={() => setSelected(null)}
          >
            {sucursales.map((sucursal) => (
              <Marker
                key={sucursal.id}
                position={sucursal.position}
                icon={{
                  url: pinIcon,
                  scaledSize: new window.google.maps.Size(40, 55),
                  anchor: new window.google.maps.Point(20, 55),
                }}
                onClick={() => setSelected(sucursal)}
              />
            ))}

            {selected && (
              <InfoWindow
                position={selected.position}
                onCloseClick={() => setSelected(null)}
                options={{ pixelOffset: new window.google.maps.Size(0, -55) }}
              >
                <div className="w-64 overflow-hidden rounded-lg">
                  {/* Imagen de la sucursal */}
                  <img
                    src={selected.imagen}
                    alt={selected.nombre}
                    className="w-full h-36 object-cover"
                  />
                  {/* Info */}
                  <div className="p-3">
                    <h3 className="font-bold text-gray-900 text-base mb-1">
                      {selected.nombre}
                    </h3>
                    <p className="text-xs text-gray-500 mb-1">
                      {selected.direccion}
                    </p>
                    <p className="text-xs text-gray-500 mb-1">
                      {selected.horario}
                    </p>
                    <p className="text-xs font-medium text-indigo-600">
                      {selected.telefono}
                    </p>
                  </div>
                </div>
              </InfoWindow>
            )}

          </GoogleMap>
        </div>

      </div>
    </section>
  )
}