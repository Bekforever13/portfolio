import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useState, useEffect } from 'react'
import { Login } from '../Login'
import { Home } from './Home'

const Dashboard: React.FC = () => {
  const [user, setUser] = useState(null)
  const auth = getAuth()

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      if (user) setUser(user)
      else setUser(null)
    })
  }, [])
  return <div>{user ? <Home /> : <Login />}</div>
}

export { Dashboard }
