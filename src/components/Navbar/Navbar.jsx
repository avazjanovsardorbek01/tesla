import './Navbar.css'
import Logo from '../img/Frame.png'
import Person from '../img/Vector.png'
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  return (
    <div>

    <header>
      <div className="logo"><img src={Logo} alt="logo"/></div>
      <nav>
        <ul className='ul'>
          <li>Model S</li>
          <li>Model 3</li>
          <li>Model X</li>
          <li>Model Y</li>
          <li>Solar Roof</li>
          <li>Solar Panels</li>
        <div className='search'>
          <CiSearch id='icon'/>
          <input className='input' placeholder='Search' type="text" />
          <img className='person' src={Person} alt="person" />
          <RxHamburgerMenu  className='burger'/>
        </div>
        </ul>
      </nav>
    </header>
    </div>
  )
}

export default Navbar