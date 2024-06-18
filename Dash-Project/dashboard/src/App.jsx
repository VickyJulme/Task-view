import { useState } from 'react'

import './App.css'
// import DashboardNav from './components/DashboardNav/DashboardNav'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Analytics from './components/Analytics/Analytics'
import Invoice from './components/Invoice/Invoice'
import Schedule from './components/Schedule/Schedule'
import Messages from './components/Messages/Messages'
import Notification from './components/Notification/Notification'
import Settings from './components/Settings/Settings'
import DashNav from './components/DashNav/DashNav'
import Calendar from './components/Calendar/Calendar'


function App() {
  const [count, setCount] = useState(0)


  const router =   createBrowserRouter([
    {
      path:'/',
      element: <><DashNav/><Dashboard/></>
    },
    {
      path:'/Analytics',
      element: <><DashNav/><Analytics/></>
    },
    {
      path:'/Invoice',
      element: <><DashNav/><Invoice/></>
    },
    {
      path:'/Schedule',
      element: <><DashNav/><Schedule/></>
    },
    {
      path:'/Calendar',
      element: <><DashNav/><Calendar/></>
    },
    {
      path:'/Messages',
      element: <><DashNav/><Messages/></>
    },
    {
      path:'/Notification',
      element: <><DashNav/><Notification/></>
    },
    {
      path:'/Settings',
      element: <><DashNav/><Settings/></>
    },
  
  ])
    return (
      <>
     
     <div className='flex' > <RouterProvider  router={router} /></div>
     
      </>
    )
}

export default App
