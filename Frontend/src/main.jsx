import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './component/Home.jsx'
import Service from './component/Service.jsx'
import Contact from './component/Contact.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from '../Layout.jsx'

const connection = createBrowserRouter(
   createRoutesFromElements(
      <Route path='/' element={<Layout />} >
      <Route path='' element= {<Home />} />
      <Route path='service' element= {<Service />} />
      <Route path='contact' element = {<Contact/>} />
      </Route>
   )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={connection} />
  </React.StrictMode>,
)
