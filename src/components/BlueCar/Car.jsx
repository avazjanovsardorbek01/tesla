import './Car.css'
import Blue from '../img/blue.png'

function Car() {
  return (
    <div>
      <img className='blueCar' src={Blue} alt="car" />
    </div>
  )
}

export default Car