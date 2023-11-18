import React from 'react'
import image from '../../../assets/images/me.jpg'
import './index.scss'
import '../index.scss'

const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      <img src={image} alt="photo" className="solid-logo" />
    </div>
  )
}
export { Logo }
