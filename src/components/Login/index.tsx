import React from 'react'
import { signInWithGoogle } from '../../firebase'

const Login: React.FC = () => {
  return (
    <div className='dashboard'>
      <button onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  )
}
export { Login }
