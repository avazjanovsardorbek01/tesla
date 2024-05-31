import { Route, Routes } from 'react-router-dom'
import './App.css'
import Car from './components/BlueCar/Car'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
    <Navbar/>
     <Routes>
      
      <Route path='/' element={<Car/>}/>

     </Routes>
    </>
  )
}

export default App
