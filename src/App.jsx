import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './pages/firebase'
import { ToastContainer } from 'react-toastify'

const App = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)

      
      if (!currentUser && location.pathname !== '/login') {
        navigate('/login')
      }

     
      if (currentUser && location.pathname === '/login') {
        navigate('/')
      }
    })

    return () => unsubscribe()
  }, [navigate, location.pathname])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/player/:id'
          element={user ? <Player /> : <Login />}
        />
      </Routes>
    </div>
  )
}

export default App
