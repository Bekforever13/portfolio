import React from 'react'
import './index.scss'
import image from '../../../assets/images/me.jpg'

const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      <img src={image} alt="photo" />
      
    </div>
  )
}
export { Logo }
