import { useState } from 'react'

import './App.css'
import { Routes,Route, Link } from 'react-router'

function App() {


  return (
    
      <div>
        <nav className='flex justify-between h-8 bg-green-200 px-5 items-center' >
         <div className='flex gap-6'>
         <Link to='/'>Home</Link>
          <Link to ='about'>About</Link>
          <Link to ='contact'>Contact</Link>
         </div>
         
          <div className='flex gap-6'>
          <Link to ='login'>Login</Link>
          <Link to ='register'>Register</Link>
          </div>    

        </nav>

        {/* {public} */}     
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='about' element={<h1>About</h1>} />
          <Route path='contact' element={<h1>Contact</h1>} />
          <Route path='login' element={<h1>Login page</h1>} />
          <Route path='register' element={<h1>Register</h1>} />


        {/*private*/}
          <Route path="admin">
            <Route path='dashboard' element={<h1>Dashboard</h1>} />
            <Route path='manage' element={<h1>Manager</h1>} />
            <Route path='setting' element={<h1>Setting</h1>} />    
          </Route>   

        </Routes>
      </div>
    
  )
}

export default App
