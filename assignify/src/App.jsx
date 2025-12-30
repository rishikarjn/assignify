import './App.css'
import EmployeePopup from './components/EmployeePopup/EmployeePopup'
import Employess from './components/Employess/Employess'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div className='w-full min-h-screen flex flex-col'>
      <EmployeePopup/>
      <Navbar/>
      <div className='flex-1 py-10'>

      <Employess/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
