import './App.css'
import Employess from './Employess/Employess'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'

function App() {
  return (
    <div className='w-full min-h-screen flex flex-col'>
      <Navbar/>
      <div className='flex-1 py-10'>

      <Employess/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
