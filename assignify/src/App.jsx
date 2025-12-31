import './App.css'
import EmployeePopup from './components/employeePopup/EmployeePopup'
import Employess from './components/employess/Employess'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import DeletePopup from './components/deletePopup/DeletePopup'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getEmployees } from './store/features/employee/employee.thunk'

function App() {

  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getEmployees());
  },[])
  return (
    <div className='w-full min-h-screen flex flex-col'>
      
      <EmployeePopup/>
      <DeletePopup/>
      <Navbar/>
      <div className='flex-1 py-10'>

      <Employess/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
