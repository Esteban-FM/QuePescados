import franjaNosotros from '../../assets/franjaNosotros.svg'

export default function Divisor() {
  return (
    <div className="w-full overflow-hidden -mt-1 sm:-mt-2 ">
      <img
        src={franjaNosotros}
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