import React from 'react'
import { Routes,Route, Link, Outlet } from 'react-router'
import Layout from '../layouts/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import Manage from '../pages/Manage'
import Setting from '../pages/Setting'
import Recap from '../pages/Recap'


function AppRoutes() {
  return (
    <div>
   <Routes>

   {/* {public} */}     
    <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path='recap' element={<Recap/>} />
            <Route path='about' element={<About/>} />
            <Route path='contact' element={<Contact/>} />
            <Route path='login' element={<Login/>} />
            <Route path='register' element={<Register/>} />
    </Route>
     

   {/*private*/}
     <Route path="admin" element={<Layout />}>
       <Route index  element={<Dashboard/>} />
       <Route path='manage' element={<Manage/>} />
       <Route path='setting' element={<Setting/>} />    
     </Route>   


   </Routes>

   </div>
  )
}


export default AppRoutes