import franjaFooter from '../../assets/franjaFooter.svg'

export default function Divisor() {
  return (
    <div className="w-full overflow-hidden -mb-1 sm:-mb-2 ">
      <img
        src={franjaFooter}
        alt=""
        aria-hidden="true"
        style={{
          width: '100%',
          height: '100%',
          minWidth: '100%',
          minHeight: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
        }}
      />
    </div>
  )
}